"use client";

import { CustomCursor } from "./custom-cursor";
import { NoiseOverlay } from "./noise-overlay";

export function GlobalEffects() {
  return (
    <>
      <CustomCursor />
      <NoiseOverlay />
    </>
  );
}
