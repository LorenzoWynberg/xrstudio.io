'use client';

import { CustomCursor } from './custom-cursor';
import { NoiseOverlay } from './noise-overlay';
import { TechBackground } from './tech-background';

export function GlobalEffects() {
  return (
    <>
      <TechBackground />
      <CustomCursor />
      <NoiseOverlay />
    </>
  );
}
