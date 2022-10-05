import React from "react";
import setPositions from "./setpositionscity";

const City = () => {
  var positions = setPositions(20)

  return (
    <>
      {positions.map((d)=>(
              <mesh position={d}>
              <boxGeometry args={[1,  d[1]*2 ,1]} />
              <meshStandardMaterial color={'#d668ce'}  />
            </mesh>
      ))

  
     }   
  

    </>
  );
};

export default City;
