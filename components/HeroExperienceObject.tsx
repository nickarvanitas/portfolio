import React, { useRef, useLayoutEffect, useState } from 'react'
import { Float, GradientTexture, useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'

export default function HeroExperienceObject(props) {
  const logo = useRef()
  const scroll = useScroll()
  const tl = useRef()
  const [rotation, setRotation] = useState(0)

  useFrame((state, delta) => {
    // tl.current.seek(scroll.offset * tl.current.duration())
    setRotation(rotation + delta)
  })


  return (
    <group {...props} dispose={null} ref={logo} scale={4}>
      <Float floatIntensity={2}>
        <group position={[0, 0, 0]} >
          <group rotation={[0, 0, Math.PI * .68]}>
            <group rotation={[0, Math.sin(rotation) * .4, 0]}>
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