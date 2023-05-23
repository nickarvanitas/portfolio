import React, { useRef, useState } from 'react'
import { Float, GradientTexture, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function HeroExperienceObject(props) {
  const logo = useRef()
  const object = useRef()

  useFrame((state) => {
    object.current.rotation.y = Math.sin(state.clock.getElapsedTime()) * 0.4
  })

  return (
    <group {...props} dispose={null} ref={logo} scale={4}>
      <Float floatIntensity={2}>
        <group position={[0, 0, 0]} >
          <group rotation={[0, 0, Math.PI * .68]}>
            <group ref={object} rotation={[0, 0, 0]}>
              <mesh castShadow receiveShadow position={[-2.5, 0, 0]}>
                <capsuleGeometry args={[1, 2.6, 4, 24]} />
                <meshBasicMaterial toneMapped={false} wireframe  >
                  <GradientTexture stops={[0, 1]}
                    colors={['#b91c1c', '#F18141']}

                  />
                </meshBasicMaterial>
              </mesh>
              <mesh castShadow receiveShadow position={[0, 2.5, 0]}>
                <capsuleGeometry args={[1, 2.6, 4, 24]} />
                <meshBasicMaterial toneMapped={false} wireframe  >
                  <GradientTexture stops={[0, 1]}
                    colors={['#b91c1c', '#F18141']}
                  />
                </meshBasicMaterial>
              </mesh>
              <mesh castShadow receiveShadow position={[0, -2.5, 0]}>
                <capsuleGeometry args={[1, 2.6, 4, 24]} />
                <meshBasicMaterial toneMapped={false} wireframe  >
                  <GradientTexture stops={[0, 1]}
                    colors={['#b91c1c', '#F18141']}
                  />
                </meshBasicMaterial>
              </mesh>
              <mesh castShadow receiveShadow position={[2.5, 0, 0]}>
                <capsuleGeometry args={[1, 2.6, 4, 24]} />
                <meshBasicMaterial toneMapped={false} wireframe   >
                  <GradientTexture stops={[0, 1]}
                    colors={['#b91c1c', '#F18141']}
                  />
                </meshBasicMaterial>
              </mesh>
            </group>
          </group>
        </group>
      </Float >
    </group >
  )
}