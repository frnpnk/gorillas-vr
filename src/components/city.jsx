import React from "react";
import setPositions from "./setpositionscity";

const City = () => {
  var positions = setPositions(15)

  return (
    <>
      {positions.map((d)=>(
              <mesh position={d}>
              <boxGeometry args={[8,  d[1]*2 ,8]} />
              <meshStandardMaterial color={'#d668ce'}  />
            </mesh>
      ))

  
     }   
  

    </>
  );
};

export default City;
