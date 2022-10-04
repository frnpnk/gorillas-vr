import "./App.css";
import { Canvas } from "@react-three/fiber";
import React from "react";
import BoxVr from "./components/little_boxes";

function App() {
  return (
    <div className="App">
      <header>Gorillas Vr </header>
      <Canvas >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <BoxVr position={[-1.2, 0, 0]} />
        <BoxVr position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
