import React, { Suspense } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader ,CubeTextureLoader} from 'three';

import goku from '../../public/garage.jpg'


import Crop_top from '../../public/Crop_top_leo'
import { PresentationControls } from '@react-three/drei';





const Testing = () => {

  const bgTexture = new TextureLoader().load(goku);
  return (
    <Canvas  style={{ width: "100vw", height: "100vh" }}>
      <Suspense fallback={null}>
      <primitive object={bgTexture} attach="background" />
        <directionalLight intensity={0.5} />
      
        <ambientLight />

        <PresentationControls
    speed={4}
    global
    polar={[0.4, 0,0]}
  >


       <Crop_top  position={[0,-2.5,0]} />

</PresentationControls>

      </Suspense>
    </Canvas>
  );
};

export default Testing;
