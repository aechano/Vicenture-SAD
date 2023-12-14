import React, { useState } from 'react';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  
  const handleImageChange = (e) => {
    const files = e.target.files;
    setImages([...images, ...files]);
  };
  
  const handleSubmit = () => {
    // Handle the form submission logic here
    // You can send the data to your backend or perform any necessary actions
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Images:', images);
    
    // Reset the form fields after submission
    setTitle('');
    setDescription('');
    setImages([]);
  };
  
  const handleCancel = () => {
    // Handle the cancellation logic here
    // You might want to navigate back to the main page or do something else
  };

  return (
    <div className='fixed top-0 left-0 z-40 w-full h-full bg-white'>
      <h1>Create a Post</h1>
      <form>
        <label>Title:</label>
        <input type='text' value={title} onChange={handleTitleChange} />
        
        <label>Description:</label>
        <textarea value={description} onChange={handleDescriptionChange}></textarea>
        
        <label>Images:</label>
        <input type='file' multiple onChange={handleImageChange} />
        
        {/* Display selected images */}
        {images.map((image, index) => (
          <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index + 1}`} />
        ))}
        
        <button type='button' onClick={handleSubmit}>Submit</button>
        <button type='button' onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
}
