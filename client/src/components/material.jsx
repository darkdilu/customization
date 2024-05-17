import { useContext, useEffect, useState } from 'react';
import style from './material.module.css';
import { Context19, Context5 } from './canvas';
import axios from 'axios';
import { Buffer } from 'buffer';
function Material_input({ model_choose }) {
    const [material_data, setMaterialData] = useState([]);

    useEffect(() => {
        fetchMaterialData();
        const interval = setInterval(fetchMaterialData, 5000); // Fetch every 5 seconds
        return () => clearInterval(interval);
    }, []);

    const fetchMaterialData = async () => {
        try {
            //http://localhost:5000/send_image http://13.201.251.105:5000/send_image
            const response = await axios.get('http://localhost:5000/send_image');
            setMaterialData(response.data);
        } catch (error) {
            console.error('Error fetching material data:', error);
        }
    };

    const [toogle, setToogle] = useState(false);
    const [material, setMaterial] = useContext(Context5);
    const [part_selected, setPart_selected] = useContext(Context19);

    const material1 = () => {
        setToogle((prevState) => !prevState);
    };

    const selectMaterial = (selectedMaterial) => {
        setMaterial(selectedMaterial.name);
        setToogle(false);
    };

    return (
        <>
            <div className={style.material}>
                <b onClick={material1}>Material</b> 
              
                   
                            {material_data.map((material, index) => (
                                <li className={style.image_list} key={index} onClick={() => selectMaterial(material)}>
                                    <img  className={style.image} src={`data:image/${material.img.contentType};base64,${Buffer.from(material.img.data).toString('base64')}`} alt={`Material ${index}`} />
                                </li>
                            ))}
                   
                   &nbsp;&nbsp;

                {model_choose === "Skirt" && (
                    <>
                        <b>/</b>&nbsp;&nbsp;
                        <b onClick={(event) => {
                            setPart_selected("Upper Skirt");
                        }}>
                            Upper Skirt
                        </b>&nbsp;&nbsp;
                        <b>/</b>&nbsp;&nbsp;
                        <b onClick={(event) => {
                            setPart_selected("Lower Skirt");
                        }}>
                            Lower Skirt
                        </b>
                        &nbsp;&nbsp;
                    </>
                )}

                {model_choose === "shirt" && (
                    <>
                        <b>/</b>&nbsp;&nbsp;
                        <b onClick={(event) => {
                            setPart_selected("Fronted Shirt");
                        }}>
                            Fronted Shirt
                        </b>&nbsp;&nbsp;
                        <b>/</b>&nbsp;&nbsp;
                        <b onClick={(event) => {
                            setPart_selected("Back Shirt");
                        }}>
                            Back Shirt
                        </b>
                        &nbsp;&nbsp;
                        <b>/</b>&nbsp;&nbsp;
                        <b onClick={(event) => {
                            setPart_selected("Back Pieces");
                        }}>
                            Back Pieces
                        </b>
                        &nbsp;&nbsp;
                    </>
                )}
            </div>
        </>
    );
}

export default Material_input;
