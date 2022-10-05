import { Canvas } from "@react-three/fiber";
import React from "react";

const ThreeScene = ({ children }) => {
  return <Canvas>{children}</Canvas>;
};

export default ThreeScene;
