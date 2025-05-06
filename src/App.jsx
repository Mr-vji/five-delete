import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
      <color attach="background" args={["#121512"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
