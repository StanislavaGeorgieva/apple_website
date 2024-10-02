import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import * as THREE from 'three';
import Lights from './Lights';
import Loader from './Loader';
import IPhone from './Iphone';
import { Suspense, useEffect } from "react";

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {

  useEffect(() => {
    if (controlRef.current) {
      controlRef.current.target.set(0, 0, 0); // Set target explicitly
      controlRef.current.update(); // Update controls after target change
    }
  }, [controlRef]);

  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls 
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)} // Ensure target is set
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      /> 

      <group ref={groupRef} name={index === 1 ? 'small' : 'large'} position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <IPhone 
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
