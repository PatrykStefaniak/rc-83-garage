import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PaintConfig, PaintModel } from "./paint-model";

function Lights() {
    return (
        <>
            <hemisphereLight
                color="#ffffff"      // sky
                groundColor="#444444" // ground reflection
                intensity={0.6}
            />
            <ambientLight intensity={.75} />
            <directionalLight
                position={[0, 0, 4]}
                intensity={1}
            />
            <directionalLight
                position={[0, 0, -4]}
                intensity={1}
            />
            <directionalLight
                position={[4, 0, 0]}
                intensity={1}
            />
            <directionalLight
                position={[-4, 0, 0]}
                intensity={1}
            />
            <directionalLight
                position={[0, 4, 0]}
                intensity={1}
            />
            <directionalLight
                position={[0, -4, 0]}
                intensity={1}
            />
        </>
    );
}

export default function ModelCanvas({ paintConfig }: { paintConfig: PaintConfig }) {
    return (
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
            <Suspense fallback={null}>
                <Lights />
                <PaintModel paintConfig={paintConfig} />
                <OrbitControls
                    enablePan={true}
                    enableZoom={true}
                    enableRotate={true}
                    minDistance={2}
                    maxDistance={10}
                />
            </Suspense>
        </Canvas>
    );
}