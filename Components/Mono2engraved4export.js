import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/mono2engraved4export.gltf");
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
      <group
        position={[0.1, -2.7, -0.5]}
        rotation={[0, -0.1, 0]}
        scale={[1.15, 1.2, 1.2]}
      >
        <group
          position={[0.24, 1.82, 0.38]}
          rotation={[0, 0.41, 0.97]}
          scale={[0.31, 0.14, 0.14]}
        >
          <mesh
            geometry={nodes.Plane022_1.geometry}
            material={materials["new green med.001"]}
          />
          <mesh
            geometry={nodes.Plane022_2.geometry}
            material={materials["stone dark"]}
          />
          <mesh
            geometry={nodes.Plane022_3.geometry}
            material={materials["stone light"]}
          />
          <mesh
            geometry={nodes.Plane022_4.geometry}
            material={materials["stone med"]}
          />
          <mesh
            geometry={nodes.Plane022_5.geometry}
            material={materials["new green dark"]}
          />
          <mesh
            geometry={nodes.Plane022_6.geometry}
            material={materials["new green med"]}
          />
          <mesh
            geometry={nodes.Plane022_7.geometry}
            material={materials.bone_white}
          />
          <mesh
            geometry={nodes.Plane022_8.geometry}
            material={materials.bone_dark001}
          />
          <mesh
            geometry={nodes.Plane022_9.geometry}
            material={materials["skin.001"]}
          />
          <mesh geometry={nodes.Plane022_10.geometry} material={materials.sk} />
          <mesh
            geometry={nodes.Plane022_11.geometry}
            material={materials["bone_whitex.001"]}
          />
          <mesh
            geometry={nodes.Plane022_12.geometry}
            material={materials["new green med/dark"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mono2engraved4export.gltf");
