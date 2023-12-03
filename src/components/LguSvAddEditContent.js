import React, { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { TiLocation } from 'react-icons/ti';
import ChipsInputComponent from './ChipsInputComponent';
import { ImEye } from 'react-icons/im'
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

function LguSvAddEditContent({ title, categories, setCategories, type, contentType, contentBody, onSave }) {

    const [selectedFile, setSelectedFile] = useState("No image chosen");
    const [showDropdown, setShowDropdown] = useState(false);
    const [newCategory, setNewCategory] = useState('');

    const [content, setContent] = useState(contentBody === undefined ? '' : contentBody.title);
    const [contact, setContact] = useState(contentBody === undefined ? '' : contentBody.contact);
    const [contentCategory, setContentCategory] = useState(contentBody === undefined ? '' : contentBody.tags[0]);
    const [location, setLocation] = useState(contentBody === undefined ? '' : contentBody.location);
    const [body, setBody] = useState(contentBody === undefined ? '' : contentBody.body);

    const handleCategoryClick = (category) => {
        setContentCategory(category);
        setShowDropdown(false);
    };

    const handleNewCategoryInputChange = (e) => {
        setNewCategory(e.target.value);
    };

    const handleAddCategory = () => {
        if (newCategory.trim() !== '') {
            // Reset the newCategory state
            setNewCategory('');

            // Update the categories prop with the new category
            const updatedCategories = [...categories, newCategory];

            // Update both contentCategory and categories props only if needed
            if (contentCategory === 'Select Category') {
                setContentCategory(newCategory);
            }
            setCategories(updatedCategories);
        }
    };

    const getData = () => {
        var jwt = Cookies.get("token");
        var email;
        if (jwt) {
            var payload = jwtDecode(jwt);
            email = payload.sub;
            return {
                email: email,
                title: content,
                images: [selectedFile],
                altTexts: ["&thumbnail;"],
                contact: contact,
                tags: [contentCategory],
                location: location,
                locationLink: "",
                body: body,
                type: "",
            }
        }
    }


    return (
        <div className="flex flex-col items-center justify-center p-20 min-h-screen">
            <div className="mx-auto flex flex-col items-center w-full max-w-7xl mb-10 border-2 border-lgu-green rounded-2xl">
                <div className="text-2xl font-bold bg-lgu-green text-white p-4 w-full rounded-tl-xl rounded-tr-xl">{title}</div>
                <div className="w-48 h-48 border-4 border-lgu-green rounded-xl mb-2 mt-4">
                    <img src={require("./../res/img/camera.png")} alt="camera icon" className="w-full h-full rounded-xl" />
                </div>
                <div className='pb-2'>
                    <div className="flex flex-row items-center border-2 rounded-md border-lgu-green">
                        <input
                            multiple
                            type="file"
                            accept='image/png, image/jpeg'
                            id="custom-input"
                            name='custom-input'
                            onChange={(e) => {
                                setSelectedFile(e.target.files[0]);
                            }}
                            hidden
                        />
                        <label
                            for="custom-input"
                            className="block text-xs text-lgu-lime mr-4 py-2 px-4
                                rounded-sm rounded-tr-none rounded-br-none border-0 font-semibold bg-lgu-green
                              hover:bg-green-900 cursor-pointer"
                        >
                            Add Image
                        </label>
                        <label className="text-xs text-slate-500 pr-2">{selectedFile.name}</label>
                    </div>
                </div>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <div className='grid grid-cols-2 gap-5 mt-5'>
                        <div>
                            <div className="relative mb-6 mt-5 text-left" data-te-input-wrapper-init>
                                <input
                                    required
                                    type="text"
                                    className="block h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                                    id="content"
                                    placeholder="Title Content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)} />
                            </div>
                            {
                                ["places-to-visit", "activities"].includes(contentType) ?
                                    <div className="relative">
                                        <button
                                            type="button"
                                            className={`block text-left h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black ${contentCategory === 'Select Category' ? 'text-gray-400' : 'text-black'
                                                } pr-12`}
                                            id="content-category-button"
                                            onClick={() => setShowDropdown(!showDropdown)}
                                        >
                                            {contentCategory || 'Select Category'}
                                        </button>
                                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                            <RiArrowDropDownLine
                                                className="text-2xl"
                                                onClick={() => setShowDropdown(!showDropdown)}
                                            />
                                        </div>
                                        {showDropdown && (
                                            <div className="absolute top-full left-0 w-80 mt-2 bg-white border border-1 border-gray-300 shadow-md">
                                                {categories.map((category) => (
                                                    <div
                                                        key={category}
                                                        className="cursor-pointer p-2 hover:bg-gray-100"
                                                        onClick={() => handleCategoryClick(category)}
                                                    >
                                                        {category}
                                                    </div>
                                                ))}
                                                <div className="p-2">
                                                    <input
                                                        type="text"
                                                        placeholder="New Category"
                                                        value={newCategory}
                                                        onChange={handleNewCategoryInputChange}
                                                    />
                                                    <button onClick={handleAddCategory}>Save</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    :
                                    null
                            }
                        </div>
                        {
                            ["places-to-visit", "activities"].includes(contentType) ?
                                <div>
                                    <div className="relative mb-6 mt-5 text-left" data-te-input-wrapper-init>
                                        <div className="flex items-center h-14 rounded border border-1 w-80 bg-transparent">
                                            <input
                                                required
                                                type="text"
                                                className=" w-72 px-3 py-[0.32rem] leading-normal dark:text-black dark:placeholder-text-gray-400 truncate placeholder-gray-400 focus:outline-none focus:border-transparent"
                                                id="location"
                                                placeholder="Location"
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)} />
                                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                                <TiLocation className='text-2xl text-gray-400' />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="relative mb-6 mt-5 text-left" data-te-input-wrapper-init>
                                        <input
                                            required
                                            type="text"
                                            className="block h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                                            id="contact"
                                            placeholder="Contact"
                                            value={contact}
                                            onChange={(e) => setContact(e.target.value)} />
                                    </div>
                                </div>
                                :
                                null
                        }
                    </div>
                    {
                        ["places-to-visit", "activities"].includes(contentType) ?
                            <div className='pb-4'>
                                <h1 className='text-sm pb-1'>Tags</h1>
                                <ChipsInputComponent />
                            </div>
                            :
                            null
                    }
                    <div>
                        <div className="w-full mb-4 border border-gray-200 rounded-lg dark:border-gray-600">
                            <div className="px-4 py-2 bg-white rounded-b-lg">
                                <label for="editor" className="sr-only">Publish post</label>
                                <textarea
                                    id="editor"
                                    rows="8"
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                    className="block w-full p-2 text-sm text-gray-800 bg-white border-0 focus:ring-0 dark:text-black dark:placeholder-gray-400"
                                    placeholder="Write an article..."
                                    required />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between pb-5'>
                        <NavLink className='flex items-center'>
                            <ImEye />
                            <p className='p-2 text-sm font-semibold'>Preview</p>
                        </NavLink>
                        <div className='flex'>
                            <div className="pr-2">
                                <button
                                    onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                                    className="text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300">
                                    Cancel
                                </button>
                            </div>
                            <div>
                                <button onClick={() => {
                                    onSave(getData());
                                }} className="text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300">
                                    {type === "ADD" ? "Save" : "Save Changes"}
                                </button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export { LguSvAddEditContent };
