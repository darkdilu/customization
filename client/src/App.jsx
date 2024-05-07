import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Canvas1 from './components/canvas';
import CanvasDownload from './components/curvedcanvas';
import Canvas_normal from './components/normal_canvas';
import { createContext, useContext, useEffect, useState } from 'react';
import CanvasDownload2 from './components/circle';
import ImageRotator from './components/triangle';
import Image_backend from './components/triangle';
const ImageContext = createContext();

export const useImage = () => useContext(ImageContext);
function App() {



  return (
    <>
  
   
 
  <Router>
    <Routes>
      
         
          
          <Route exact path="/canvas" element={<Canvas1/>} />
          <Route exact path="/download" element={<CanvasDownload/>} />
          <Route exact path="/normal" element={<Canvas_normal/>} />
          <Route exact path="/circle" element={<CanvasDownload2/>} />
          <Route exact path="/rotation" element={<ImageRotator/>} />
          <Route exact path="/backend" element={<Image_backend/>} />
         
           </Routes>   
    </Router>
 
    </>
  )
}

export default App