import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { Raycaster, Vector2 } from 'three';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/basic_shirt_2.glb');
  const groupRef = useRef();
  const [selectedMesh, setSelectedMesh] = useState(null);
  const raycaster = new Raycaster();
  const mouse = new Vector2();

  const { camera, gl } = useThree();

  useFrame(() => {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(groupRef.current.children, true);

    if (intersects.length > 0) {
      const intersectedMesh = intersects[0].object;
      setSelectedMesh(intersectedMesh);
    } else {
      setSelectedMesh(null);
    }
  });

  const handleMouseClick = (event) => {
    event.preventDefault();

    mouse.x = (event.clientX / gl.domElement.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / gl.domElement.clientHeight) * 2 + 1;
  };

  const handleButtonClick = (meshName) => {
    const mesh = groupRef.current.children.find((child) => child.name === meshName);
    setSelectedMesh(mesh);
  };

  return (
    <group ref={groupRef} {...props} dispose={null} scale={[0.75, 0.75, 0.75]} onClick={handleMouseClick}>
      {Object.keys(nodes).map((nodeName) => (
        <mesh key={nodeName} name={nodeName} geometry={nodes[nodeName].geometry} material={materials.Cotton_Heavy_Canvas_2443799}>
          {selectedMesh === groupRef.current.children[nodeName] && (
            <meshBasicMaterial color="yellow" attach="material" />
          )}
        </mesh>
      ))}
      <button onClick={() => handleButtonClick('Button_836348')} style={{ position: 'absolute', top: '10px', left: '10px' }}>
        Button 1
      </button>
      <button onClick={() => handleButtonClick('Button_836567')} style={{ position: 'absolute', top: '50px', left: '10px' }}>
        Button 2
      </button>
      {/* Add more buttons as needed */}
    </group>
  );
}

useGLTF.preload('/basic_shirt_2.glb');
