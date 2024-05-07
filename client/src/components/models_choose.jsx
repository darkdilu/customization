import React, { useContext } from "react";
import { Context17 } from "./canvas";

function Model_choose() {
  const [model_choose,setModel_choose] = useContext(Context17);

  const handleModelChoose = (event) => {
    setModel_choose(event.target.value);
    console.log("model_choosen")
  };

  return (
    <>
      <div>
        <select value={model_choose} onChange={handleModelChoose}>
          <option value="Tshirt">Tshirt</option>
          <option value="Skirt">Skirt</option>
          <option value="shirt">Shirt</option>
        </select>
      </div>
    </>
  );
}

export default Model_choose;
