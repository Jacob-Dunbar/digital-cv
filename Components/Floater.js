import React, { useRef } from "react";
import { useGLTF, useAnimations, Float, Sparkles } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/floater.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <Float speed={6} rotationIntensity={0.5} floatIntensity={0.5}>
      <group
        ref={group}
        {...props}
        dispose={null}
        scale={[1, 1, 1]}
        position={[-4, 0, 0]}
      >
        <pointLight />
        <Sparkles />
        <group name="Scene">
          <mesh
            name="Sphere"
            geometry={nodes.Sphere.geometry}
            material={materials.Material}
            position={[6.91, 2.8, 0.38]}
            scale={0.02}
          />
        </group>
      </group>
    </Float>
  );
}

useGLTF.preload("/floater.gltf");
