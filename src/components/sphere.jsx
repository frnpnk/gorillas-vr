



import React from 'react'

const SphereVR = ({color, position}) => {
  return (

      <mesh position={position}>

        <sphereGeometry/>
        <meshStandardMaterial color={color} wireframe/>
      </mesh>
        )
}

export default SphereVR