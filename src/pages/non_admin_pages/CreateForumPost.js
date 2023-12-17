// PostForm.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { API } from '../../Variables/GLOBAL_VARIABLE';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const CreateForumPost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [fileNames, setFileNames] = useState([]);
    const [visibility, setVisibility] = useState('Category');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [topic, setTopic] = useState("");
    const navigate = useNavigate();

    const [userBasicData, setUserBasicData] = useState({ PFP: null, username: null })

    const visibilityOptions = ['Nature', 'Restaurant', 'Resorts'];

    const fileInputRef = React.createRef();

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    useEffect(() => {
        var jwt = Cookies.get("token");
        if (jwt) {
            var payload = jwtDecode(jwt);
            axios.get(API.getProfilePFP, {
                headers: { "Authorization": `Bearer ${Cookies.get("token")}` },
                withCredentials: true
            })
                .then((response) => response.data)
                .then((data) => {
                    setUserBasicData({
                        PFP: data, // Optionally, you may want to keep the raw binary data
                        username: payload.Username
                    });
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [])


    const handleImageChange = (e) => {
        const files = e.target.files;
        const newImages = [...images];
        const newFileNames = [...fileNames];

        for (let i = 0; i < files.length; i++) {
            newImages.push(files[i]);
            newFileNames.push(files[i].name);
        }

        setImages(newImages);
        setFileNames(newFileNames);
    };

    const handleDeleteImage = (index) => {
        const newImages = [...images];
        const newFileNames = [...fileNames];

        newImages.splice(index, 1);
        newFileNames.splice(index, 1);

        setImages(newImages);
        setFileNames(newFileNames);

        // Update the file input value
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Reset the value
        }
    };

    const handleSubmit = () => {
        axios.post(API.publishForum, {
            "topics": [topic],
            "title": title,
            "body": description
        }, {
            headers: { "Authorization": `Bearer ${Cookies.get("token")}` },
            withCredentials: true
        })
            .then((response) => response.data)
            .then((data) => {
                const formData = new FormData();
                images.forEach(image => {
                    formData.append("images", image);
                    formData.append("altTexts", image.name);
                });
                formData.append("forumID", data.contentID);
                axios.post(API.publishForumPhotos, formData, {
                    headers: { "Authorization": `Bearer ${Cookies.get("token")}` },
                    withCredentials: true
                })
                    .then((response) => response.data)
                    .then((data) => {
                        console.log(data);
                    })
            })
        // TODO: insert pop up "Upload success!" here.
        navigate(-1);
    };

    const handleCancel = () => {
        navigate(-1);
    };

    const handleVisibilityClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleVisibilityChange = (selectedVisibility) => {
        setVisibility(selectedVisibility);
        setIsDropdownOpen(false);
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100 m-20'>
            <div className='bg-lgu-green p-12 rounded shadow-md w-full md:w-2/3 lg:w-1/2'>
                <div className='flex items-center space-x-4 mb-6'>
                    <img
                        src={userBasicData.PFP ? 'data:image/jpeg;base64,' + userBasicData.PFP : require("./../../res/img/icon.png")}
                        alt="User Avatar"
                        className="w-16 h-16 rounded-full"
                    />
                    <div className='flex flex-col'>
                        <p className='text-white font-semibold text-lg'>{userBasicData.username ? userBasicData.username : "anonymous"}</p>
                        <div className='relative inline-block text-left'>
                            <button
                                type="button"
                                onClick={handleVisibilityClick}
                                className="inline-flex text-white justify-center w-full rounded-md border p-2 focus:outline-none"
                            >
                                {visibility}
                                <svg
                                    className="-mr-1 ml-2 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute text-white right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-white ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {visibilityOptions.map((option) => (
                                            <button
                                                key={option}
                                                onClick={() => {
                                                    handleVisibilityChange(option);
                                                    setTopic(option);
                                                }}
                                                className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <form className='flex flex-col space-y-4'>
                    {/* Rest of the form remains unchanged */}
                    <input
                        type='text'
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="Title"
                        className='border p-4 rounded-md focus:outline-none text-lg'
                    />

                    <textarea
                        value={description}
                        onChange={handleDescriptionChange}
                        placeholder='Write something...'
                        className='border p-4 rounded-md h-[300px] focus:outline-none text-lg resize-none'
                    ></textarea>

                    <input
                        type='file'
                        multiple
                        onChange={handleImageChange}
                        className='text-white border p-4 rounded-md focus:outline-none text-lg'
                        ref={fileInputRef}
                    />


                    <div className='flex items-center space-x-2'>
                        {images.map((image, index) => (
                            <div key={index} className='relative'>
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt={`Image ${index + 1}`}
                                    className='w-16 h-16 object-cover rounded'
                                />
                                <button
                                    onClick={() => handleDeleteImage(index)}
                                    className='absolute top-0 right-0 bg-gray-400 text-white rounded-full p-2 cursor-pointer'
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className='flex space-x-2 mt-6 justify-end'>
                        <button
                            type='button'
                            onClick={handleCancel}
                            className='bg-gray-700 text-white py-2 px-6 rounded-md hover:bg-gray-400 text-lg'
                        >
                            Cancel
                        </button>
                        <button
                            type='button'
                            onClick={handleSubmit}
                            className='bg-lgu-lime text-lgu-green py-2 px-6 rounded-md hover:bg-blue-400 text-lg'
                        >
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateForumPost;
