"use client"

import React from 'react'
import { OrthographicCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import HeroExperienceObject from './HeroExperienceObject'

export default function HeroExperience({ className }: { className?: string }) {
  return (
    <div className={`border-zinc-600 border-l-2 bg-zinc-900 ${className}`}>
      <Canvas shadows>
        <OrthographicCamera makeDefault position={[0, 2, 100]} zoom={60} />
        <ambientLight intensity={1} />
      </Canvas>
    </div>
  )
}
