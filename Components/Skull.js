import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Skull.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null} position={[-2.0, -2.2, 0]}>
      <group name="Scene">
        <group
          name="skull001"
          onClick={() => props.setEvilMode(!props.evilMode)}
          position={[5.43, 0.61, -0.25]}
          rotation={[1.23, -0.59, 1.36]}
          scale={[0.09, 0.15, 0.07]}
        >
          <mesh
            name="Cube006"
            geometry={nodes.Cube006.geometry}
            material={materials.bone_white}
          />
          <mesh
            name="Cube006_1"
            geometry={nodes.Cube006_1.geometry}
            material={materials.bone_dark001}
          />
          <mesh
            name="Cube006_2"
            geometry={nodes.Cube006_2.geometry}
            material={materials["skin.001"]}
          />
          <mesh
            name="Cube006_3"
            geometry={nodes.Cube006_3.geometry}
            material={materials.sk}
          />
          <mesh
            name="Cube006_4"
            geometry={nodes.Cube006_4.geometry}
            material={materials["bone_whitex.001"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Skull.gltf");
