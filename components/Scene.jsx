"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Robot from "./Robot";

export default function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={1} />

      <Suspense fallback={null}>
        <Robot />
      </Suspense>
    </Canvas>
  );
}
