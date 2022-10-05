import "./App.css";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import BoxVr from "./components/little_boxes";
import setPositions from "./components/setpositionscity";
import ThreeScene from "./components/ThreeScene";
import SphereVR from "./components/sphere";
import { OrbitControls, Stars } from "@react-three/drei";
import City from "./components/city";

function App() {
  let positions = [[0, 1, 2],[ 3, 4, 5] ,[6, 7, 8]];

  return (
    <div style={{ height: "100vh" }}>
      <ThreeScene>
        <color attach="background" args={["#161c62"]} />
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
       
        <pointLight position={[10, -10, -10]} />
        <pointLight position={[-10, 10, -10]} />
        <BoxVr position={[1, 9, -10]} />;
        <Suspense fallback={null}>
          <City/>
        </Suspense>
      
        <Stars count={1000} /> 
        <OrbitControls autoRotate   enableZoom={true} enableRotate={true}/>
      </ThreeScene>
    </div>
  );
}

export default App;
