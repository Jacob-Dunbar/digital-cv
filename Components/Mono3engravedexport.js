import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/mono3engravedexport.gltf");
  const lightRef = useRef();
  const { viewport } = useThree();

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    lightRef.current.position.set(x, y, 1);
    lightRef.current.rotation.set(-y, x, 0);
  });

  return (
    <group {...props} dispose={null}>
      <a.pointLight
        ref={lightRef}
        distance={20}
        decay={2}
        intensity={1}
        color={"#d5fdeb"}
        position={[0, 6, 6]}
      />
      <group position={[0.1, -3.2, -2]} rotation={[0, 0.1, 0]} scale={1.5}>
        <group position={[-0.11, 2.19, 0.32]} scale={[1.57, 0.93, 0.42]}>
          <mesh
            geometry={nodes.Cube002_1.geometry}
            material={materials["stone light"]}
          />
          <mesh
            geometry={nodes.Cube002_2.geometry}
            material={materials["stone dark"]}
          />
          <mesh
            geometry={nodes.Cube002_3.geometry}
            material={materials["stone med"]}
          />
          <mesh
            geometry={nodes.Cube002_4.geometry}
            material={materials["new green med/dark"]}
          />
          <mesh
            geometry={nodes.Cube002_5.geometry}
            material={materials["new purple"]}
          />
          <mesh
            geometry={nodes.Cube002_6.geometry}
            material={materials["new green med"]}
          />
          <mesh
            geometry={nodes.Cube002_7.geometry}
            material={materials["new green xdark"]}
          />
        </group>
        <group
          position={[-2.6, 1.44, 1.37]}
          rotation={[0, -0.5, -0.15]}
          scale={0.35}
        >
          <mesh
            geometry={nodes.Cube001_1.geometry}
            material={materials["skin.003"]}
          />
          <mesh
            geometry={nodes.Cube001_2.geometry}
            material={materials.skin_pink}
          />
          <mesh geometry={nodes.Cube001_3.geometry} material={materials.sk} />
          <mesh
            geometry={nodes.Cube001_4.geometry}
            material={materials.skin_normal}
          />
          <mesh
            geometry={nodes.Cube001_5.geometry}
            material={materials["skin.002"]}
          />
          <mesh
            geometry={nodes.Cube001_6.geometry}
            material={materials["skin.001"]}
          />
          <mesh
            geometry={nodes.Cube001_7.geometry}
            material={materials["sk.001"]}
          />
          <mesh
            geometry={nodes.Cube001_8.geometry}
            material={materials["skin.004"]}
          />
          <mesh
            geometry={nodes.Cube001_9.geometry}
            material={materials.skin_shadow}
          />
          <mesh
            geometry={nodes.Cube001_10.geometry}
            material={materials["sk.002"]}
          />
          <mesh
            geometry={nodes.Cube001_11.geometry}
            material={materials["sk.003"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mono3engravedexport.gltf");
