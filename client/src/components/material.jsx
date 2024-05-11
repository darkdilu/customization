
import { useContext, useEffect, useState } from 'react';
import style from './material.module.css'
import { Context19, Context5 } from './canvas';
import axios from 'axios';

function Material_input({model_choose}) {




    const [material_name, setMaterialName] = useState([]);
const [part_selected,setPart_selected]= useContext(Context19)
    useEffect(() => {
       
        fetchMaterialNames(); 
        const interval = setInterval(fetchMaterialNames, 5000); 

        return () => clearInterval(interval);

    }, []);

    const fetchMaterialNames = async () => {
        try {
            const response = await axios.get('http://localhost:5000/send_image');
            setMaterialName(response.data.map(image => image.name));
        } catch (error) {
            console.error('Error fetching material names:', error);
        }
    };

    const [toogle, setToogle] = useState(false);
    const [material, setMaterial] = useContext(Context5);

    const material1 = () => {
        setToogle((prevState) => !prevState);
    };

    const selectMaterial = (selectedMaterial) => {
        setMaterial(selectedMaterial);
        setToogle(false);
    };

    return (
        <>
            <div className={style.material}>
                <b onClick={material1}>Material</b> &nbsp;&nbsp;
                {toogle && (
                    <div className={style.material_list}>
                        <ul>
                            {material_name.map((name, index) => (
                                <li key={index} onClick={() => selectMaterial(name)}>
                                    {name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

{model_choose ==="Skirt" && (
    <>
        <b>/</b>&nbsp;&nbsp;
        <b onClick={(event) => {
            setPart_selected("Upper Skirt"); // Setting a string directly
        }}>
            Upper Skirt
        </b>&nbsp;&nbsp;
        <b>/</b>&nbsp;&nbsp;
        <b onClick={(event) => {
            setPart_selected("Lower Skirt"); // Setting a string directly
        }}>
            Lower Skirt
        </b>

        &nbsp;&nbsp;
    </>
)}




{model_choose ==="shirt" && (
    <>
        <b>/</b>&nbsp;&nbsp;
        <b onClick={(event) => {
            setPart_selected("F"); // Setting a string directly
        }}>
            Fronted Shirt
        </b>&nbsp;&nbsp;
        <b>/</b>&nbsp;&nbsp;
        <b onClick={(event) => {
            setPart_selected("Back Shirt"); // Setting a string directly
        }}>
            Back Shirt
        </b>
        &nbsp;&nbsp;
        <b>/</b>&nbsp;&nbsp;

        <b onClick={(event) => {
            setPart_selected("Back Pieces"); // Setting a string directly
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
