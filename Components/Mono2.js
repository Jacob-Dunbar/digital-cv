import React, { useRef, useState } from "react";
import { useGLTF, useAnimations, Float, Sparkles } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/mono2.gltf");
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
            size={50}
            scale={7}
            noise={20}
            color={"#f56f42"}
          />
          <Sparkles
            position={[6, 4, -1]}
            count={7}
            speed={2}
            opacity={0.2}
            size={50}
            scale={7}
            noise={20}
            color={"#f56f42"}
          />
          <Sparkles
            position={[12, 4, -2]}
            count={7}
            speed={0.75}
            opacity={0.2}
            size={50}
            scale={7}
            noise={20}
            color={"#f56f42"}
          />
          <Sparkles
            position={[19, 4, 0]}
            count={7}
            speed={0.75}
            opacity={0.2}
            size={50}
            scale={7}
            noise={20}
            color={"#f56f42"}
          />
          <Sparkles
            position={[24, 4, 0]}
            count={7}
            speed={0.75}
            opacity={0.2}
            size={50}
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
          name="mono2001"
          position={[8.73, 0.99, -1.34]}
          rotation={[Math.PI, -0.07, 0]}
          scale={[-1.67, -0.94, -0.42]}
        >
          <mesh
            name="Cube020"
            geometry={nodes.Cube020.geometry}
            material={materials["stone light.001"]}
          />
          <mesh
            name="Cube020_1"
            geometry={nodes.Cube020_1.geometry}
            material={materials["stone dark.001"]}
          />
          <mesh
            name="Cube020_2"
            geometry={nodes.Cube020_2.geometry}
            material={materials["stone med.001"]}
          />
          <mesh
            name="Cube020_3"
            geometry={nodes.Cube020_3.geometry}
            material={materials["new green dark.001"]}
          />
          <mesh
            name="Cube020_4"
            geometry={nodes.Cube020_4.geometry}
            material={materials["new green med.001"]}
          />
          <mesh
            name="Cube020_5"
            geometry={nodes.Cube020_5.geometry}
            material={materials["new green med/dark.001"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mono2.gltf");
