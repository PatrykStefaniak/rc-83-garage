"use client";

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export interface PaintConfig {
    color: string;
    roughness: number;
    metalness: number;
}

interface ModelProps {
    paintConfig: PaintConfig;
}

export function PaintModel({ paintConfig }: ModelProps) {
    const { scene } = useGLTF("/model/paint_tester.glb");

    scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({
                color: paintConfig.color,
                roughness: paintConfig.roughness,
                metalness: paintConfig.metalness,
            });
        }
    });

    return <primitive object={scene} scale={1} />;
}
