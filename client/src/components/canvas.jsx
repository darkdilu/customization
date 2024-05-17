
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, MeshReflectorMaterial, OrbitControls, PresentationControls, Stage } from "@react-three/drei";
import style from "./canvas.module.css";

import shirt_2d from '../../public/2d_t-shirt.png'
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter';

import Material_input from "./material";
import Poncho from '../../public/Poncho'
import CanvasImageUploader from "./2d_canvas";
import New_shirt3 from '../../public/Leander_5_model'
import Model_choose from "./models_choose";

import Shirt_model1 from '../../public/Shirt_model1'


import Tshirt_2 from '../../public/Leander_tshirt_decal'

import Crop_top from '../../public/Crop_top'

import Second_shirt from '../../public/Basic_shirt_2'

export const Context = React.createContext();
export const Context1 = React.createContext();
export const Context2 = React.createContext();
export const Context3 = React.createContext();
export const Context4 = React.createContext();
export const Context5 = React.createContext();
export const Context6 = React.createContext();
export const Context7 = React.createContext();
export const Context8 = React.createContext();
export const Context9=React.createContext();
export const Context10=React.createContext();
export const Context11=React.createContext();
export const Context12=React.createContext();
export const Context13=React.createContext();
export const Context14=React.createContext();
export const Context15=React.createContext();
export const Context16=React.createContext();
export const Context17=React.createContext();
export const Context18=React.createContext();
export const Context19=React.createContext();
export const Context20=React.createContext();


export const Context21=React.createContext();
export const Context22=React.createContext();


function Canvas1(props) {
  const [showdisplay, setShowdisplay] = useState(false);
  const canvasRef = useRef();

  const canvasRef1=useRef();
 
  const [image, setImage] = useState([]);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(shirt_2d);
  const [decal_selected, setDecal_selected] = useState(false);
  const [canvasScene, setCanvasScene] = useState(null);

const[model_choose,setModel_choose]=useState("Tshirt")


  const [decalPosition, setDecalPosition] = useState([]);


  const [text_selected, setText_selected] = useState(false);
  const [color_text, setColor_text] = useState("white");
  const [text, setText] = useState("hello");
  const [color, setColor] = useState("white");
  const [text_pos, setText_pos] = useState([0, 0.04, 0.15]);
  const [dlt, setDlt] = useState(false);
  const [material, setMaterial] = useState("cotton");
  const [front_image, setFront_image] = useState([]);


  const [back_image, setBack_image] = useState([]);
  const [right_image, setRight_image] = useState([]);
  const [left_image, setLeft_image] = useState([]);

const[part_selected,setPart_selected]=useState("upper")
  const[model_image_position,setModel_image_position]=useState(null)
  const [items, setItems] = useState({});
const[backend_image,setBackend_image]=useState(null)
const[model_image,setModel_image]=useState(null)

const[tshirt_image_side,setTshirt_image_side]=useState("front_side")


const[back_position,setBack_position]=useState([])

const[right_position,setRight_position]=useState([])



const handleSaveClick = async () => {
  if (canvasScene) {
    const exporter = new GLTFExporter();
  
    exporter.parse(canvasScene, async function (gltf) {
      const blob1 = new Blob([JSON.stringify(gltf)], { type: 'application/json' });
    
      const formData = new FormData();
      formData.append('model', blob1, 'model1.gltf');
    
      try {
       // const response = await fetch('http://13.201.251.105/:5000/upload_file'   const response = await fetch('http://localhost:5000/upload_file'
       const response = await fetch('http://13.201.251.105/:5000/upload_file'    , {
          method: 'POST',
          body: formData,
        });
        if (response.ok) {
          console.log('Model uploaded successfully');
        } else {
          console.error('Error uploading model:', response.statusText);
        }
      } catch (error) {
        console.error('Error uploading model:', error);
      }
    });
  } else {
    console.error('Error: Unable to export model. Canvas scene is not available.');
  }
};







{/*

  const handleCanvasMouseMove = (event) => {
    if (!decal_selected || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const updatedX = (offsetX / rect.width) * 2 - 1;


   


    const updatedY = -(offsetY / rect.height) * 2.12 + 0.50;



     console.log(`updatedX`,updatedX)
    console.log(`updatedy`,updatedY)
   /* setDecalPosition([-0.03949999999999996, -0.1005912, decalPosition[2]]); */
  };
{/* 
  const handleCanvasMouseUp = () => {
    setDecal_selected(false);
  };

  const handleMouseDown3 = () => {
    setText_selected(false);
  };

  const handleMouseMove = (event) => {
    if (!text_selected || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const updatedX = (offsetX / rect.width) * 2 - 1;
    const updatedY = -(offsetY / rect.height) * 2.12 + 0.50;
    setText_pos([updatedX, updatedY, text_pos[2]]);
  };

*/}

  return (
    <>
      <Context.Provider value={[image, setImage]}>
        <Context1.Provider value={[text, setText]}>
          <Context2.Provider value={[decal_selected, setDecal_selected]}>
            <Context3.Provider value={[text_selected, setText_selected]}>
              <Context4.Provider value={[color_text, setColor_text]}>
                <Context5.Provider value={[material, setMaterial]}>
                  <Context6.Provider value={[image2, setImage2]}>
                    <Context7.Provider value={[image3, setImage3]}>
                      <Context8.Provider value={[front_image, setFront_image]}>
                        <Context9.Provider value={[decalPosition,setDecalPosition]}>
                        <Context10.Provider value={[model_image,setModel_image]}>
                          <Context11.Provider value={[model_image_position,setModel_image_position]}>
                          <Context12.Provider value={[tshirt_image_side,setTshirt_image_side]}>
                          <Context13.Provider value={[back_image, setBack_image]}>
<Context17.Provider value={[model_choose,setModel_choose]}>
  <Context18.Provider value={[back_position,setBack_position]}>
<Context19.Provider value={[part_selected,setPart_selected]}>
  <Context20.Provider value={[right_position,setRight_position]}>
    <Context21.Provider value={[right_image, setRight_image]}>
      <Context22.Provider value={[left_image, setLeft_image]}>
                        {!showdisplay && (
                          <div className={style.app}>
                            <div className={style.canvas_style} style={{ width: "60vw", height: "60vh" }}>


                            <div>
<Model_choose/>

</div>



                            <Canvas

  className={style.canvas}
  
  ref={canvasRef}
  onMouseMove={decal_selected ? handleCanvasMouseMove : text_selected ? handleMouseMove : null}
  onMouseUp={decal_selected ? handleCanvasMouseUp : text_selected ? handleMouseDown3 : null}

  
         style={{
            backgroundColor: '#111a21',
            
         }}


>
  <PresentationControls
    speed={4}
    global
    polar={[0.4, 0,1]}
  >
    <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2.5}>
      <planeGeometry args={[300, 300]} />
      <MeshReflectorMaterial
        blur={[500, 500]}
        resolution={2048}
        mixBlur={5}
        mixStrength={40}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
    color={0x555555}
        metalness={0.5}
      />
    </mesh>



    <ContactShadows
      resolution={2048}
      position={[0, 4, 5]}
      opacity={10}
      scale={10}
      blur={2}
      far={0.8}
    />
    <ambientLight />
    <Suspense fallback={null}>
     <Stage environment="city" intensity={0.6} castShadow={false}> 



     {model_choose === "second_shirt"&&(


<>
<Second_shirt


/>


</>

    )}
     

     {model_choose === 'Skirt' && (
  <>



    <Poncho
      
      material={material}
      front_image={front_image}
      back_image={back_image}
      position1={decalPosition}
      image_side={tshirt_image_side}
      part_selected={part_selected}
      position={[0,-0.70,0]}
    />
    {console.log("model set is Skirt")}
  </>
)}
       
       {model_choose === 'Tshirt' && (
        <>
      <Tshirt_2
       
        material={material}
        front_image={front_image}
        back_image={back_image}
        right_image={right_image}
        position1={decalPosition}
        image_side={tshirt_image_side}
        back_position={back_position}
        right_position={right_position}
        
      />
  {console.log("model set is Tshirt")}
  
</>
    )}

{model_choose === 'shirt' && (
        <>
      <Shirt_model1 
       
        material={material}
        part_selected={part_selected}

        position={[0,-1,0]}
      />
  {console.log("model set is Tshirt")}
  
</>
    )}


    {model_choose === "crop_top"&&(


<>
<Crop_top 

position={[0,-1.4,0]}

/>
 

</>

    )}





{/* model_choose === "tshirt_2"&&(


<>
<Tshirt_2

material={material}
front_image={front_image}
back_image={back_image}
position1={decalPosition}
image_side={tshirt_image_side}
back_position={back_position}


position={[0,-0.95,0]}

/>
 

</>

    ) */}



        </Stage> 
    </Suspense>
    <pointLight position={[15, 25, 15]} />
   
  </PresentationControls>
</Canvas>


<Canvas 

ref={canvasRef1}
onCreated={({ gl, scene }) => setCanvasScene(scene)}
style={{ position: 'absolute', left: '-9999px' }}
>

{model_choose === 'Skirt' && (
  <>



    <Poncho
   
      material={material}
    
     
      part_selected={part_selected}
    />
    {console.log("model set is Skirt")}
  </>
)}
       
       {model_choose === 'Tshirt' && (
        <>
      <Tshirt_2
      
        material={material}
        front_image={front_image}
        back_image={back_image}
        position1={decalPosition}
        image_side={tshirt_image_side}
        back_position={back_position}
        right_image={right_image}
        right_position={right_position}
      />
  {console.log("model set is Tshirt")}
  
</>
    )}

{model_choose === 'shirt' && (
        <>
      <Shirt_model1 
     
        material={material}
        part_selected={part_selected}
      />
  {console.log("model set is Tshirt")}
  
</>
    )}



{model_choose === "crop_top"&&(


<>
<Crop_top/>


</>

    )}

{model_choose === "second_shirt"&&(


<>
<Second_shirt/>
position={[0,2,0]}

</>

    )}


{/*model_choose === "tshirt_2"&&(


<>
<Tshirt_2

material={material}
front_image={front_image}
back_image={back_image}
position1={decalPosition}
image_side={tshirt_image_side}
back_position={back_position}


position={[0,-1.2,0]}

/>
 

</>

    )*/}

</Canvas>


<div>

{/* image5.map((imageUrl,index)=>(


  <img key={index} src={imageUrl}   alt={`Image ${index}`}/>



)) */}

</div>
 

                              <div className={style.customization}>
                              {/*
                                <div className={style.color_container}>
                                  <h2 className={style.shirt_color}>shirt color</h2>
                                  <input type="button" className={style.shirt} onClick={(e) => setColor("yellow")} />
                                  <input type="button" id="mesh" name="vest" className={style.shirt1} onClick={(e) => setColor("red")} />
                                  <input type="button" id="mesh" name="vest" className={style.shirt2} onClick={(e) => setColor("blue")} />
                                  <input type="button" id="mesh" name="vest" className={style.shirt3} onClick={(e) => setColor("green")} />
                                  <input type="button" id="mesh" name="vest" className={style.shirt4} onClick={(e) => setColor("purple")} />
                                  <br />
                                  <input type="button" id="mesh" name="vest" className={style.shirt5} onClick={(e) => setColor("black")} />
                                  <input type="button" id="mesh" name="vest" className={style.shirt6} onClick={(e) => setColor("grey")} />
                                  <input type="button" id="mesh" name="vest" className={style.shirt7} onClick={(e) => setColor("white")} />
                                </div>


                                */}
                                 {/*  <button onClick={(e) => setDlt((prevState) => !prevState)}>Hide</button> */}
                              
                              
                               
                                <Material_input model_choose={model_choose} />
                                <div className={style.upload}>
                               { /*  <Upload delete={dlt} update={setDlt} />  */}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                     
<button 
  onClick={() => {
    setShowdisplay(prevState => !prevState);
    setModel_choose("Tshirt");
  }} 
  className={style.button}
>
  2d Tshirt
</button>
                         {showdisplay && (
                          <CanvasImageUploader/>
                        )}


<button onClick={handleSaveClick}>Save Model</button> 
</Context22.Provider>
</Context21.Provider>
</Context20.Provider>
                        </Context19.Provider>
</Context18.Provider>
</Context17.Provider>

</Context13.Provider>
</Context12.Provider>
                        </Context11.Provider>
                        </Context10.Provider>
                        </Context9.Provider>
                      </Context8.Provider>
                    </Context7.Provider>
                  </Context6.Provider>
                </Context5.Provider>
              </Context4.Provider>
            </Context3.Provider>
          </Context2.Provider>
        </Context1.Provider>
      </Context.Provider>
    </>
  );
}

export default Canvas1;
