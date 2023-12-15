// App.js or App.jsx
import React, { useState } from 'react';

function CreateForumPost() {
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
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-lgu-green to-lgu-lime'>
            <div className='bg-lgu-green p-8 rounded shadow-lg w-full sm:w-96'>
                <h1 className='text-2xl font-bold mb-4 text-white'>Create a Post</h1>
                <form className='flex flex-col space-y-4'>
                    <label className='text-sm text-white'>Title:</label>
                    <input
                        type='text'
                        value={title}
                        onChange={handleTitleChange}
                        className='border p-2 rounded focus:outline-none focus:border-lgu-lime'
                    />

                    <label className='text-sm text-white'>Description:</label>
                    <textarea
                        value={description}
                        onChange={handleDescriptionChange}
                        className='border p-2 rounded focus:outline-none focus:border-lgu-lime'
                    ></textarea>

                    <label className='text-sm text-white'>Images:</label>
                    <input
                        type='file'
                        multiple
                        onChange={handleImageChange}
                        className='border p-2 rounded focus:outline-none focus:border-lgu-lime'
                    />

                    {/* Display selected images */}
                    <div className='flex space-x-2'>
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={URL.createObjectURL(image)}
                                alt={`Image ${index + 1}`}
                                className='w-16 h-16 object-cover rounded'
                            />
                        ))}
                    </div>

                    <div className='flex space-x-2 mt-4 ml-auto'>
                        <button
                            type='button'
                            onClick={handleCancel}
                            className='bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400'
                        >
                            Cancel
                        </button>
                        <button
                            type='button'
                            onClick={handleSubmit}
                            className='bg-lgu-lime text-gray-700 py-2 px-4 rounded hover:bg-gray-400'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateForumPost;
