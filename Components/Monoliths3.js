import React, { useRef, useState } from "react";
import { useGLTF, useAnimations, Float, Sparkles } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/monoliths3.gltf");
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
          name="mono3"
          position={[16.07, 1.02, -1.38]}
          rotation={[0, -0.1, 0]}
          scale={[1.57, 0.93, 0.42]}
        >
          <mesh
            name="Cube002"
            geometry={nodes.Cube002.geometry}
            material={materials["stone light.002"]}
          />
          <mesh
            name="Cube002_1"
            geometry={nodes.Cube002_1.geometry}
            material={materials["stone dark.003"]}
          />
          <mesh
            name="Cube002_2"
            geometry={nodes.Cube002_2.geometry}
            material={materials["stone med.002"]}
          />
          <mesh
            name="Cube002_3"
            geometry={nodes.Cube002_3.geometry}
            material={materials["new green med/dark.002"]}
          />
          <mesh
            name="Cube002_4"
            geometry={nodes.Cube002_4.geometry}
            material={materials["new purple.001"]}
          />
          <mesh
            name="Cube002_5"
            geometry={nodes.Cube002_5.geometry}
            material={materials["new green med.003"]}
          />
          <mesh
            name="Cube002_6"
            geometry={nodes.Cube002_6.geometry}
            material={materials["new green xdark"]}
          />
        </group>
        <group
          name="jacobFace"
          ref={headRef}
          position={[13.2, 1.44, -0.41]}
          rotation={[0, 5.2, -0.15]}
          scale={0.44}
        >
          <mesh
            name="Cube001"
            geometry={nodes.Cube001.geometry}
            material={materials["skin.003"]}
          />
          <mesh
            name="Cube001_1"
            geometry={nodes.Cube001_1.geometry}
            material={materials.skin_pink}
          />
          <mesh
            name="Cube001_2"
            geometry={nodes.Cube001_2.geometry}
            material={materials["sk.001"]}
          />
          <mesh
            name="Cube001_3"
            geometry={nodes.Cube001_3.geometry}
            material={materials.skin_normal}
          />
          <mesh
            name="Cube001_4"
            geometry={nodes.Cube001_4.geometry}
            material={materials["skin.002"]}
          />
          <mesh
            name="Cube001_5"
            geometry={nodes.Cube001_5.geometry}
            material={materials["skin.004"]}
          />
          <mesh
            name="Cube001_6"
            geometry={nodes.Cube001_6.geometry}
            material={materials["sk.002"]}
          />
          <mesh
            name="Cube001_7"
            geometry={nodes.Cube001_7.geometry}
            material={materials["skin.005"]}
          />
          <mesh
            name="Cube001_8"
            geometry={nodes.Cube001_8.geometry}
            material={materials.skin_shadow}
          />
          <mesh
            name="Cube001_9"
            geometry={nodes.Cube001_9.geometry}
            material={materials["sk.003"]}
          />
          <mesh
            name="Cube001_10"
            geometry={nodes.Cube001_10.geometry}
            material={materials["sk.004"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/monoliths3.gltf");
