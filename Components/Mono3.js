import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/mono3.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null} position={[-2.1, -2.3, 0]}>
      <group name="Scene">
        <group
          name="Cube002"
          position={[16.09, 1.02, -1.3]}
          rotation={[0, -0.09, 0]}
          scale={[1.57, 0.93, 0.42]}
        >
          <mesh
            name="Cube011"
            geometry={nodes.Cube011.geometry}
            material={materials["stone light"]}
          />
          <mesh
            name="Cube011_1"
            geometry={nodes.Cube011_1.geometry}
            material={materials["stone dark"]}
          />
          <mesh
            name="Cube011_2"
            geometry={nodes.Cube011_2.geometry}
            material={materials["new green med"]}
          />
          <mesh
            name="Cube011_3"
            geometry={nodes.Cube011_3.geometry}
            material={materials["new purple.003"]}
          />
          <mesh
            name="Cube011_4"
            geometry={nodes.Cube011_4.geometry}
            material={materials["new green med/dark"]}
          />
          <mesh
            name="Cube011_5"
            geometry={nodes.Cube011_5.geometry}
            material={materials["new green xdark.001"]}
          />
          <mesh
            name="Cube011_6"
            geometry={nodes.Cube011_6.geometry}
            material={materials["stone med"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mono3.gltf");
