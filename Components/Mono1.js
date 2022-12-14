/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/mono1.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null} position={[-2.0, -2.2, 0]}>
      <group name="Scene">
        <group
          name="Cube005"
          position={[-1.85, 0.82, 0.2]}
          rotation={[0, 0.26, 0]}
          scale={[1.1, 0.81, 0.38]}
        >
          <mesh
            name="Cube007"
            geometry={nodes.Cube007.geometry}
            material={materials["stone light.003"]}
          />
          <mesh
            name="Cube007_1"
            geometry={nodes.Cube007_1.geometry}
            material={materials["stone dark.002"]}
          />
          <mesh
            name="Cube007_2"
            geometry={nodes.Cube007_2.geometry}
            material={materials["stone med.003"]}
          />
          <mesh
            name="Cube007_3"
            geometry={nodes.Cube007_3.geometry}
            material={materials["new green med/dark.003"]}
          />
          <mesh
            name="Cube007_4"
            geometry={nodes.Cube007_4.geometry}
            material={materials["stone dark.004"]}
          />
          <mesh
            name="Cube007_5"
            geometry={nodes.Cube007_5.geometry}
            material={materials["new purple"]}
          />
          <mesh
            name="Cube007_6"
            geometry={nodes.Cube007_6.geometry}
            material={materials["new green med.002"]}
          />
          <mesh
            name="Cube007_7"
            geometry={nodes.Cube007_7.geometry}
            material={materials["new green dark.002"]}
          />
        </group>
        <group
          name="Cube001"
          position={[-0.06, 4.04, 0.56]}
          rotation={[0.1, -1.1, 0]}
          scale={[0.05, 0.05, 0.01]}
        >
          <mesh
            name="Cube008"
            geometry={nodes.Cube008.geometry}
            material={materials["stone light.003"]}
          />
          <mesh
            name="Cube008_1"
            geometry={nodes.Cube008_1.geometry}
            material={materials["stone light.003"]}
          />
          <mesh
            name="Cube008_2"
            geometry={nodes.Cube008_2.geometry}
            material={materials["stone med.003"]}
          />
          <mesh
            name="Cube008_3"
            geometry={nodes.Cube008_3.geometry}
            material={materials["stone dark.002"]}
          />
          <mesh
            name="Cube008_4"
            geometry={nodes.Cube008_4.geometry}
            material={materials["stone dark.002"]}
          />
          <mesh
            name="Cube008_5"
            geometry={nodes.Cube008_5.geometry}
            material={materials["stone light.003"]}
          />
          <mesh
            name="Cube008_6"
            geometry={nodes.Cube008_6.geometry}
            material={materials["stone light.003"]}
          />
          <mesh
            name="Cube008_7"
            geometry={nodes.Cube008_7.geometry}
            material={materials["stone dark.002"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mono1.gltf");
