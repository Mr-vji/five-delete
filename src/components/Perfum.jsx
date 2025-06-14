/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { Text, useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import { Color, DoubleSide, MeshBasicMaterial, MeshNormalMaterial } from 'three'
import { MeshTransmissionMaterial } from '@react-three/drei'


export function Perfum(props) {
    const { nodes, materials } = useGLTF('/models/perfumSite.glb')

    const normal = new MeshNormalMaterial()
    const bcolor = new Color("blue")
    bcolor.multiplyScalar(95)

    return (
        <group {...props} castShadow dispose={null}>
            <group
                name="pCylinder4_7"
                position={[0.035, 1.003, 0.009]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.156, 0.156, 0.035]}>
                <mesh
                    name="Object_11"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_11.geometry}
                    material={materials.aiStandardSurface2}
                />
                <mesh
                    name="Object_13"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_13.geometry}
                    material={materials.aiStandardSurface3}
                />
            </group>
            <group
                name="pCylinder5_10"
                position={[0.035, 0.991, 0.009]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.064, 0.064, 0.025]}>
                <mesh
                    name="Object_16"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_16.geometry}
                    material={materials.aiStandardSurface2}
                />
                {/* straw */}
                <mesh
                    name="Object_18"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18.geometry}

                />
            </group>
            {/* <mesh
                name="Text"
                castShadow
                receiveShadow
                geometry={nodes.Text.geometry}
                // material={normal}
                position={[0.1, 0, 0.25]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.32}
            >
                <meshBasicMaterial side={DoubleSide} color={bcolor} />
            </mesh> */}
            <group rotation={[0, 0, Math.PI]}>

                {/* <mesh

                    name="Text"
                    castShadow
                    receiveShadow
                    geometry={nodes.Text.geometry}
                    // material={normal}
                    position={[-0.1, 0, -0.25]}
                    rotation={[Math.PI / 2, Math.PI, 0]}
                    scale={0.32}
                >
                    <meshBasicMaterial side={DoubleSide} color={bcolor} />
                </mesh> */}
            </group>

            <mesh
                name="Object_24"
                castShadow
                receiveShadow
                geometry={nodes.Object_24.geometry}
                material={materials['100ml']}
                position={[-0.013, -0.934, -0.197]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.128}
            />
            <mesh
                name="Object_8"
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}

                position={[-0.013, -0.934, -0.197]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.169, 0.179, 0.179]}
            >
                <MeshTransmissionMaterial
                    thickness={0.2}    // depth of the object for refraction
                    roughness={0}    // a little surface roughness
                    transmission={1}   // fully transmissive (glass-like)
                    ior={1.2}          // index of refraction (glass is ~1.5)
                    chromaticAberration={0.02}
                    color={'blue'}
                />
                {/* <meshNormalMaterial /> */}
            </mesh>

        </group>
    )
}

useGLTF.preload('/models/perfumSite.glb')
