import React, { useRef, useState } from "react";
import { useGLTF, useAnimations, Float, Sparkles } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/monoliths2.gltf");
  const { actions } = useAnimations(animations, group);
  const lightRef = useRef();
  const { viewport } = useThree();
  const spring = useSpring({
    intensity: props.evilMode ? 0.1 : 0.25,
  });

  useFrame(({ mouse, camera }) => {
    const x = camera.position.x + (mouse.x * viewport.width) / 2;
    const y = camera.position.y + (mouse.y * viewport.height) / 2;
    const z = camera.position.z;
    lightRef.current.position.set(x + 2, y + 2, z);
    lightRef.current.rotation.set(-y, x, z);
  });

  return (
    <group ref={group} {...props} dispose={null} position={[-2.0, -2.2, 0]}>
      <animated.pointLight
        ref={lightRef}
        distance={20}
        decay={0}
        intensity={spring.intensity}
        color={"#d5fdeb"}
        position={[0, 0, 0]}
      />
      {props.evilMode ? (
        <group>
          <Sparkles
            position={[1, 4, -1]}
            count={7}
            speed={2}
            opacity={0.2}
            size={20}
            scale={7}
            noise={20}
            color={"#f56f42"}
          />
          <Sparkles
            position={[12, 4, -2]}
            count={7}
            speed={0.75}
            opacity={0.2}
            size={20}
            scale={7}
            noise={20}
            color={"#f56f42"}
          />
          <Sparkles
            position={[24, 4, 0]}
            count={7}
            speed={0.75}
            opacity={0.2}
            size={20}
            scale={7}
            noise={20}
            color={"#f56f42"}
          />
        </group>
      ) : (
        <group>
          <Sparkles
            position={[1, 4, -1]}
            count={7}
            speed={0.75}
            opacity={0.2}
            size={10}
            scale={7}
            noise={20}
            color={"#d5fdeb"}
          />
          <Sparkles
            position={[12, 4, -2]}
            count={7}
            speed={0.75}
            opacity={0.2}
            size={10}
            scale={7}
            noise={20}
            color={"#d5fdeb"}
          />
          <Sparkles
            position={[24, 4, 0]}
            count={7}
            speed={0.75}
            opacity={0.2}
            size={10}
            scale={7}
            noise={20}
            color={"#d5fdeb"}
          />
        </group>
      )}
      <group name="Scene">
        <group
          name="mono2"
          position={[5.89, 1.07, -1.38]}
          rotation={[Math.PI, -0.06, 0]}
          scale={[-0.3, -1.01, -0.36]}
        >
          <mesh
            name="Cube019"
            geometry={nodes.Cube019.geometry}
            material={materials["stone med"]}
          />
          <mesh
            name="Cube019_1"
            geometry={nodes.Cube019_1.geometry}
            material={materials["stone dark"]}
          />
          <mesh
            name="Cube019_2"
            geometry={nodes.Cube019_2.geometry}
            material={materials["stone light"]}
          />
          <mesh
            name="Cube019_3"
            geometry={nodes.Cube019_3.geometry}
            material={materials["new green dark"]}
          />
          <mesh
            name="Cube019_4"
            geometry={nodes.Cube019_4.geometry}
            material={materials["new green med"]}
          />
          <mesh
            name="Cube019_5"
            geometry={nodes.Cube019_5.geometry}
            material={materials["new green med/dark"]}
          />
        </group>
        <group
          onClick={() => props.setEvilMode(!props.evilMode)}
          name="skull"
          position={[5.28, 0.61, -0.43]}
          rotation={[1.24, -0.59, 1.37]}
          scale={[0.09, 0.15, 0.07]}
        >
          <mesh
            name="Cube147"
            geometry={nodes.Cube147.geometry}
            material={materials["bone_white.001"]}
          />
          <mesh
            name="Cube147_1"
            geometry={nodes.Cube147_1.geometry}
            material={materials["bone_dark001.001"]}
          />
          <mesh
            name="Cube147_2"
            geometry={nodes.Cube147_2.geometry}
            material={materials["skin.006"]}
          />
          <mesh
            name="Cube147_3"
            geometry={nodes.Cube147_3.geometry}
            material={materials["sk.005"]}
          />
          <mesh
            name="Cube147_4"
            geometry={nodes.Cube147_4.geometry}
            material={materials["bone_whitex.002"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/monoliths2.gltf");