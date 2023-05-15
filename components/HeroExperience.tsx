"use client"

import React from 'react'
import { OrthographicCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import HeroExperienceObject from './HeroExperienceObject'

export default function HeroExperience() {
  return (
    <Canvas shadows>
      <OrthographicCamera makeDefault position={[0, 2, 100]} zoom={60} />
      <ambientLight intensity={1} />
      <HeroExperienceObject />

    </Canvas>
  )
}
