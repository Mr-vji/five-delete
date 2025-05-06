import { OrbitControls, Stage } from "@react-three/drei";

export const Experience = () => {
   return (
      <>
         <OrbitControls />
         <ambientLight intensity={0.5} />
         <directionalLight position={[2, 8, 5]} intensity={1} castShadow />
         <mesh castShadow>
            <boxGeometry />
            <meshNormalMaterial />
         </mesh>
         <mesh
            receiveShadow
            scale={12}
            position-y={-1 / 2 - 0.13}
            rotation={[-Math.PI / 2, 0, 0]}
         >
            <planeGeometry />
            <meshBasicMaterial color={"white"} />
         </mesh>
      </>
   );
};
