import { Environment, Float, Gltf, OrbitControls, PresentationControls, Stars, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { StarrySky } from "./StarrySky";
import { Starss } from "./Starss";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Snow } from "./Snow";
import { Perfum } from "./Perfum";
import { Color } from "three";
import { Cur } from "./cur";

// "Low Poly Winter Scene" (https://skfb.ly/6R6MM) by EdwiixGG is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

export const Experience = () => {
  const light = useRef();

  const ncolor = new Color('white')
  ncolor.addScalar(-0.1)

  const yescaColor = new Color('blue')
  yescaColor.addScalar(0.8)


  return (
    <>
      {/* <StarrySky /> */}
      <Starss />

      <Float intensity={10}>
        <Snow npParticles={30} />
      </Float>

      {/* <OrbitControls
        minDistance={3}
        maxDistance={12}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
      /> */}

      <Environment preset="studio" />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[- 11, 11]}
        azimuth={[- 11, 11]}
        config={{ mass: 12, tension: 4100 }}
      // snap
      >
        <Float>
          <Perfum scale={1.5} />
        </Float>
      </PresentationControls>


      <Text
        scale={0.45}
        lineHeight={0.9}
        rotation={[0, 0, Math.PI / 2]}
        position={[-3.8, 0, 0]}
        textAlign="left"
        font="/fonts/Kleymissky-0xBG.otf"
        color={ncolor}
      >
        Don't Settle Until {"\n"}Your Brand is Fueled with
      </Text>

      <Text
        scale={2.2}
        lineHeight={1}
        rotation={[0, 0, Math.PI / 2]}
        position={[-2.9, 0.3, 0]}
        color={yescaColor}
        font="/fonts/Kleymissky-0xBG.otf"
      >
        yesca
      </Text>

      <Text
        scale={0.2}
        lineHeight={1}
        position={[2, -1.6, 1]}
        font="/fonts/Kleymissky-0xBG.otf"
      >
        Smells amazing! A perfect mix of fresh and floral
      </Text>

      <ambientLight intensity={0.8} />
      {/* <directionalLight color={'white'} position={[0, 2, 10]} Bloom intensity={100} /> */}

      <fog attach="fog" args={["black", 20, 50]} />


      <EffectComposer>
        <Bloom mipmapBlur intensity={1.5} />
      </EffectComposer>

      <Cur />


    </>
  );
};



