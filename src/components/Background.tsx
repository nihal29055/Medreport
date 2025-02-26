import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useMemo } from 'react';
import * as THREE from 'three';

function Background() {
  const count = 2000;
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      positions[i * 3] = 20 * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = 20 * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = 20 * Math.cos(theta);
    }
    return positions;
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={['#030014']} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={count}
              array={positions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.05}
            color="#5786F5"
            sizeAttenuation
            transparent={false}
          />
        </points>
        <Sphere args={[1, 100, 200]} scale={2.5}>
          <meshBasicMaterial color="#030014" wireframe />
        </Sphere>
      </Canvas>
    </div>
  );
}

export default Background