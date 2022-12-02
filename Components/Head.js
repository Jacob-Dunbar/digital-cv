import React, { useRef, useState } from "react";
import { useGLTF, useAnimations, Float, Sparkles } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/head.gltf");
  const { actions } = useAnimations(animations, group);
  const [turnRight, setTurnRight] = useState(true);
  const headRef = useRef();

  useFrame(() => {
    turnRight
      ? (headRef.current.rotation.y += 0.015)
      : (headRef.current.rotation.y -= 0.015);
    headRef.current.rotation.y > 5.5 &&
      headRef.current.rotation.y < 6 &&
      setTurnRight(false);
    headRef.current.rotation.y > 4.5 &&
      headRef.current.rotation.y < 5 &&
      setTurnRight(true);
  });

  return (
    <group ref={group} {...props} dispose={null} position={[-2.1, -2.3, 0]}>
      <group name="Scene">
        <group
          ref={headRef}
          name="Cube004"
          position={[13.93, 1.44, -0.02]}
          rotation={[0, 5.2, -0.15]}
          scale={0.44}
        >
          <mesh
            name="Cube012"
            geometry={nodes.Cube012.geometry}
            material={materials["skin.006"]}
          />
          <mesh
            name="Cube012_1"
            geometry={nodes.Cube012_1.geometry}
            material={materials["skin_pink.001"]}
          />
          <mesh
            name="Cube012_2"
            geometry={nodes.Cube012_2.geometry}
            material={materials["sk.005"]}
          />
          <mesh
            name="Cube012_3"
            geometry={nodes.Cube012_3.geometry}
            material={materials["skin_normal.001"]}
          />
          <mesh
            name="Cube012_4"
            geometry={nodes.Cube012_4.geometry}
            material={materials["skin.007"]}
          />
          <mesh
            name="Cube012_5"
            geometry={nodes.Cube012_5.geometry}
            material={materials["skin.008"]}
          />
          <mesh
            name="Cube012_6"
            geometry={nodes.Cube012_6.geometry}
            material={materials["sk.006"]}
          />
          <mesh
            name="Cube012_7"
            geometry={nodes.Cube012_7.geometry}
            material={materials["skin.009"]}
          />
          <mesh
            name="Cube012_8"
            geometry={nodes.Cube012_8.geometry}
            material={materials["skin_shadow.001"]}
          />
          <mesh
            name="Cube012_9"
            geometry={nodes.Cube012_9.geometry}
            material={materials["sk.007"]}
          />
          <mesh
            name="Cube012_10"
            geometry={nodes.Cube012_10.geometry}
            material={materials["sk.008"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/head.gltf");
