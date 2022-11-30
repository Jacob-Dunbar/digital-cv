import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";

export default function Model({ ...props }) {
  const group = useRef();
  const lightRef = useRef();

  const { nodes, materials, animations } = useGLTF(
    "/mono1-engravedexport.gltf"
  );
  const { actions } = useAnimations(animations, group);
  const { viewport } = useThree();

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    lightRef.current.position.set(x, y, 1);
    lightRef.current.rotation.set(-y, x, 0);
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <a.pointLight
        ref={lightRef}
        distance={20}
        decay={2}
        intensity={1}
        color={"#d5fdeb"}
        position={[0, 6, 6]}
      />
      <group
        name="Scene"
        position={[0.1, -3, -0.5]}
        rotation={[0, 0.15, 0]}
        scale={[1.2, 1.2, 1.2]}
      >
        <group
          name="Cube025"
          position={[-0.15, 1.84, 0.34]}
          scale={[1.1, 0.81, 0.38]}
        >
          <mesh
            name="Cube026"
            geometry={nodes.Cube026.geometry}
            material={materials["stone light"]}
          />
          <mesh
            name="Cube026_1"
            geometry={nodes.Cube026_1.geometry}
            material={materials["stone dark"]}
          />
          <mesh
            name="Cube026_2"
            geometry={nodes.Cube026_2.geometry}
            material={materials["stone med"]}
          />
          <mesh
            name="Cube026_3"
            geometry={nodes.Cube026_3.geometry}
            material={materials["new green med/dark"]}
          />
          <mesh
            name="Cube026_4"
            geometry={nodes.Cube026_4.geometry}
            material={materials["new purple"]}
          />
          <mesh
            name="Cube026_5"
            geometry={nodes.Cube026_5.geometry}
            material={materials["new green med"]}
          />
          <mesh
            name="Cube026_6"
            geometry={nodes.Cube026_6.geometry}
            material={materials["new green dark"]}
          />
        </group>
        <mesh
          name="Text002"
          geometry={nodes.Text002.geometry}
          material={materials["stone dark.001"]}
          position={[-0.16, 2.88, 0.36]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.13}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mono1-engravedexport.gltf");
