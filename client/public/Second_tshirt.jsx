/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 second_tshirt.glb 
*/

import React, { useRef } from 'react'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import { useControls } from "leva";

import { degToRad } from "three/src/math/MathUtils.js";
import { useState } from 'react';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/second_tshirt.glb')


  const [rotation, setRotation] = useState([0, 0, 0]);
  const [image_size, setScale] = useState([0.50, 0.50, 0.10]);

  useControls({
 
    image_size: {
        min: 0.1,
        max: 2,
        value: 0.10,
        step: 0.01,
        onChange: (value) => {
            setScale(() => [value, value, 1.5]);
        },
    },
});

useControls({
   
    angle2: {
        min: degToRad(0),
        max: degToRad(360),
        value: 0,
        step: 0.01,
        onChange: (value) => {
            const x = Math.sin(value);
            const z = Math.cos(value);
            const rot = Math.atan2(x, z);
            setRotation(() => [0, 0, rot]);
        },
    },
});



  return (
    <group {...props} dispose={null} scale={[0.8,0.8,0.8]}>
      <mesh geometry={nodes.Stitch_389563.geometry} material={materials.ISO_406_Two_Needle_Bottom_Coverstitch_13528} />
      <mesh geometry={nodes.Stitch_389563_1.geometry} material={materials.ISO_406_Two_Needle_Bottom_Coverstitch_13537} />
      <mesh geometry={nodes.Stitch_389591.geometry} material={materials.ISO_406_Two_Needle_Bottom_Coverstitch_13528} />
      <mesh geometry={nodes.Stitch_389591_1.geometry} material={materials.ISO_406_Two_Needle_Bottom_Coverstitch_13537} />
      <mesh geometry={nodes.Topstitch_1642569.geometry} material={materials.ISO_101_Single_Thread_Chainstitch_2mmoffset_14908} />
      <mesh geometry={nodes.Topstitch_1642569_1.geometry} material={materials.ISO_101_Single_Thread_Chainstitch_2mmoffset_14917} />
      <mesh geometry={nodes.Stitch_386715.geometry} material={materials.ISO_406_Two_Needle_Bottom_Coverstitch_13528} />
      <mesh geometry={nodes.Stitch_386715_1.geometry} material={materials.ISO_406_Two_Needle_Bottom_Coverstitch_13537} />
      <mesh geometry={nodes.Stitch_386743.geometry} material={materials.ISO_406_Two_Needle_Bottom_Coverstitch_13528} />
      <mesh geometry={nodes.Stitch_386743_1.geometry} material={materials.ISO_406_Two_Needle_Bottom_Coverstitch_13537} />
      <mesh geometry={nodes.Stitch_392217.geometry} material={materials.ISO_406_Two_Needle_Bottom_Coverstitch_13528} />
      <mesh geometry={nodes.Stitch_392217_1.geometry} material={materials.ISO_406_Two_Needle_Bottom_Coverstitch_13537} />
      <mesh geometry={nodes.Stitch_392189.geometry} material={materials.ISO_406_Two_Needle_Bottom_Coverstitch_13528} />
      <mesh geometry={nodes.Stitch_392189_1.geometry} material={materials.ISO_406_Two_Needle_Bottom_Coverstitch_13537} />
      <mesh geometry={nodes['TSHIRTREGULARSSTGM-COL_1'].geometry} material={materials.main_12888} />
      <mesh geometry={nodes['TSHIRTREGULARSSTGM-COL_2'].geometry} material={materials.main_12888} />
      <mesh geometry={nodes['TSHIRTREGULARSSTGM-COL_3'].geometry} material={materials.main_12888} />


{/* front mesh  */}

      <mesh geometry={nodes['TSHIRTREGULARSSTGM-FRONT_1'].geometry} material={materials.main_12888} >


      {
  props.front_image.map((imageUrl, index) => {



    console.log(`props.position ${props.position1[index]}`)

    const decal = props.position1 ? props.position1[index] : { x: 0, y: 0, z: 0.15 };

    const texture = useTexture(imageUrl);
   
    const { x, y, z } = decal;
    console.log(`x is ${x}`)
    console.log(`y is ${x}`)

    const newPosition = [x, y, z];

    console.log(index);
    console.log(`the decal is ${JSON.stringify(props.position1[index])}`);
 console.log(newPosition); 

    return (
      <Decal key={index} position={[1,1,1]} rotation={rotation} scale={image_size} map={texture} />
    );
  })
}
    



        </mesh>
      
      
      
      
      <mesh geometry={nodes['TSHIRTREGULARSSTGM-FRONT_2'].geometry} material={materials.main_12888} />
      <mesh geometry={nodes['TSHIRTREGULARSSTGM-FRONT_3'].geometry} material={materials.main_12888} />

      {/* left mesh */}
      <mesh geometry={nodes['TSHIRTREGULARSSTGM-SLEEVE_2'].geometry} material={materials.main_12888} >

        </mesh>




      <mesh geometry={nodes['TSHIRTREGULARSSTGM-SLEEVE_3'].geometry} material={materials.main_12888} />


{/* 
      <mesh geometry={nodes['TSHIRTREGULARSSTGM-SLEEVE_4'].geometry} material={materials.main_12888} />

*/}


{/* right mesh */}

      <mesh geometry={nodes['TSHIRTREGULARSSTGM-SLEEVE_1_1'].geometry} material={materials.main_12888} >


        </mesh>



      <mesh geometry={nodes['TSHIRTREGULARSSTGM-SLEEVE_1_2'].geometry} material={materials.main_12888} />
      <mesh geometry={nodes['TSHIRTREGULARSSTGM-SLEEVE_1_3'].geometry} material={materials.main_12888} />
      <mesh geometry={nodes.Pattern_2903483_1.geometry} material={materials['main Copy 1_12915']} />
      <mesh geometry={nodes.Pattern_2903483_2.geometry} material={materials['main Copy 1_12915']} />
      <mesh geometry={nodes.Pattern_2903483_3.geometry} material={materials['main Copy 1_12915']} />

{/* back mesh */}

      <mesh geometry={nodes['TSHIRTREGULARSSTGM-BACK_1'].geometry} material={materials.main_12888} >


</mesh>

      <mesh geometry={nodes['TSHIRTREGULARSSTGM-BACK_2'].geometry} material={materials.main_12888} />
      <mesh geometry={nodes['TSHIRTREGULARSSTGM-BACK_3'].geometry} material={materials.main_12888} />
      <mesh geometry={nodes.Pattern_1086885_1.geometry} material={materials.main_12888} />
      <mesh geometry={nodes.Pattern_1086885_2.geometry} material={materials.main_12888} />
      <mesh geometry={nodes.Pattern_1086885_3.geometry} material={materials.main_12888} />
    </group>
  )
}

useGLTF.preload('/second_tshirt.glb')