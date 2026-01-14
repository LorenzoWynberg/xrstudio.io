import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { existsSync } from 'fs';
import { join, parse, relative } from 'path';

const INPUT_DIR = './docs/imgs';
const OUTPUT_DIR = './public/images';
const MAX_WIDTH = 2000;
const QUALITY = 80;

// Recursively get all image files
async function getImageFiles(dir, baseDir = dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getImageFiles(fullPath, baseDir)));
    } else if (/\.(jpg|jpeg|png|webp|gif)$/i.test(entry.name) && !entry.name.startsWith('.')) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeImages() {
  // Create output directory if it doesn't exist
  if (!existsSync(OUTPUT_DIR)) {
    await mkdir(OUTPUT_DIR, { recursive: true });
  }

  // Get all image files recursively
  const imageFiles = await getImageFiles(INPUT_DIR);

  console.log(`Found ${imageFiles.length} images to optimize\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const inputPath of imageFiles) {
    const { name, dir } = parse(inputPath);
    // Create subfolder prefix from relative path
    const relDir = relative(INPUT_DIR, dir);
    const prefix = relDir
      ? relDir
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-_/]/g, '')
          .replace(/\//g, '-') + '-'
      : '';
    // Sanitize filename: lowercase, replace spaces with hyphens
    const safeName = name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-_]/g, '');
    const outputPath = join(OUTPUT_DIR, `${prefix}${safeName}.webp`);
    const displayName = relative(INPUT_DIR, inputPath);

    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();
      const fileStat = await stat(inputPath);
      const originalSize = fileStat.size;
      totalOriginal += originalSize;

      // Resize if wider than MAX_WIDTH, convert to webp
      let pipeline = image;
      if (metadata.width && metadata.width > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
      }

      const { size } = await pipeline.webp({ quality: QUALITY }).toFile(outputPath);

      totalOptimized += size;
      const savings = ((1 - size / originalSize) * 100).toFixed(1);

      console.log(`✓ ${displayName}`);
      console.log(
        `  ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(size / 1024).toFixed(0)}KB (${savings}% smaller)\n`
      );
    } catch (err) {
      console.error(`✗ ${displayName}: ${err.message}\n`);
    }
  }

  console.log('─'.repeat(50));
  console.log(
    `Total: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB → ${(totalOptimized / 1024 / 1024).toFixed(1)}MB`
  );
  console.log(`Saved: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
  console.log(`\nOptimized images saved to ${OUTPUT_DIR}`);
}

optimizeImages().catch(console.error);
