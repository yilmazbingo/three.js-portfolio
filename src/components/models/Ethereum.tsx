/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 mystic+ethereum+in+place+vertical.gltf --transform 
Files: mystic+ethereum+in+place+vertical.gltf [133.47MB] > /home/tesla/Documents/projects/next-14/portfolios/gltf/mystic+ethereum/mystic+ethereum+in+place+vertical-transformed.glb [886.29KB] (99%)
*/
"use client";

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import { Object3D, Mesh, Group } from "three";

const Ethereum = React.memo(function Ethereum() {
  const ethereumRef = useRef<Group>(null);
  const { nodes, materials, animations } = useGLTF("/models/Ethereum.glb");
  console.log("animations in eth", animations);

  useFrame((state) => {
    if (ethereumRef.current) {
      const object3D = ethereumRef.current as Object3D;
      object3D.position.y = -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
    }
  });

  return (
    //     <a.group {...props} dispose={null}> WE REMOVED dispose={null}

    <a.group ref={ethereumRef} dispose={null}>
      {/* <a.mesh
        geometry={nodes.mesh_0.geometry}
        material={materials.PaletteMaterial001}
      /> */}
      {Object.keys(nodes)
        .filter((key) => nodes[key] instanceof Mesh)
        .map((key) => {
          const node = nodes[key] as Mesh;
          return (
            <a.mesh
              key={key}
              geometry={node.geometry}
              material={materials[node.name]}
            />
          );
        })}
      {/* <a.mesh
        geometry={nodes.mesh_1.geometry}
        material={materials.PaletteMaterial002}
      />
      <a.mesh
        geometry={nodes.mesh_2.geometry}
        material={materials.PaletteMaterial003}
      /> */}
    </a.group>
  );
});

useGLTF.preload("/models/Ethereum.glb");

export default Ethereum;