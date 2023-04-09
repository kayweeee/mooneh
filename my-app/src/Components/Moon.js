import React, { useRef } from "react";
import {Canvas, useFrame, useLoader} from '@react-three/fiber'
import * as THREE from "three";
import moon from "./moontexture.jpg"

const Sphere=()=>{
   const base=new THREE.TextureLoader().load(moon)
   const ref=useRef()
   useFrame(() => (ref.current.rotation.x=ref.current.rotation.y += 0.001))
   return(
      <mesh visible castShadow ref={ref}>
      <directionalLight intensity={0.5} />
      <pointLight color="white" position={[3, 5, 0]} />
      <sphereGeometry attach="geometry" args={[3, 32, 32]} />
      <meshBasicMaterial
         map={base}
         color="white"
      />
      </mesh>
   )
}
export default function Moon(){
   return (
   <div style={{ width: "50vw", height: "50vh" }}>
      <Canvas>
         <ambientLight />
         <Sphere/>
      </Canvas>
   </div>

   );
};