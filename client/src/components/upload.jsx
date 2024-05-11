import React, { useState } from 'react';
import axios from 'axios';

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [processedImageUrl, setProcessedImageUrl] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Set the processed image URL received from the backend
      setProcessedImageUrl(response.data);
    } catch (error) {
      console.error('Error uploading image', error);
    }
  };

  const handleDownload = async () => {
    try {
      // Send GET request to download the processed image
      const response = await axios.get('http://127.0.0.1:5000/proccessed_image', {
        responseType: 'blob' 
        
      });
      setProcessedImageUrl(`data:image/png;base64,${response.data.image_data}`);

      // Create a temporary URL for the Blob
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Create a link element to trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'processed_image.png'; // Specify the filename for the downloaded file
      document.body.appendChild(link);

      // Trigger the download
      link.click();

      // Clean up by revoking the temporary URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
      {processedImageUrl && (
        <div>
          <img src={processedImageUrl} alt="Processed Image" />
          <button onClick={handleDownload}>Download</button>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
