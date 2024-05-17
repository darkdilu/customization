import axios from 'axios';
import React, { useState } from 'react';

function Admin_image_upload() {
  const [formData, setFormData] = useState({
    name: '',
    desc: '',
    image: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

   
//http://13.201.251.105:5000/images
    try {
      const response = await axios.post('http://127.0.0.1:5000/images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response); 
    } catch (error) {
      console.error('Error uploading image', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  return (
    <div>
      <h1>To Upload Image on Backend</h1>
      <hr />
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Image Title</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={formData.name}
              name="name"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="desc">Image Description</label>
            <textarea
              id="desc"
              name="desc"
              value={formData.desc}
              rows="2"
              placeholder="Description"
              required
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="image">Upload Image</label>
            <input
              type="file"
              id="image"
              name="image"
              required
              onChange={handleFileChange}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      <hr />

      <h1>Uploaded Images</h1>
      <div></div>
    </div>
  );
}

export default Admin_image_upload;
