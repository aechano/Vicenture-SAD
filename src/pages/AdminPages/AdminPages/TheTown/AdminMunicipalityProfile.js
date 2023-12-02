import React, { useState, useEffect, useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
import axios from 'axios';
import { API } from '../../../../Variables/GLOBAL_VARIABLE';
import Cookies from 'js-cookie';

// FileUpload component for handling file upload and preview
function FileUpload({ onFileChange, resetFileInput, initialSelectedFile }) {
    const [selectedFile, setSelectedFile] = useState(initialSelectedFile ? initialSelectedFile : null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        onFileChange(file);
    };

    useEffect(() => {
        setSelectedFile(initialSelectedFile ? initialSelectedFile : null);
        fileInputRef.current.value = '';
    }, [resetFileInput]);

    return (
        <div className="mt-4">
            <label htmlFor="file" className="block text-sm font-medium text-lgu-green">
                Upload File
            </label>
            <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                ref={fileInputRef}
                className="mt-1 p-2 border border-lgu-green rounded-md w-full focus:outline-none focus:border-lgu-green"
            />

            {selectedFile ?
                <div className="mt-4">
                    <p className="text-sm font-medium text-lgu-green">Selected File:</p>
                    <p className="mt-2">{selectedFile.name}</p>
                </div>
                :
                null
            }
        </div>
    );
}

// ItemSidebar component for adding and selecting items
function ItemSidebar({ items = [], onItemSelected, onItemRemove, onAddItem }) {

    return (
        <div className="w-1/3 bg-lgu-lime p-4 ml-8 mt-8">
            <h2 className="text-2xl font-bold mb-4 mt-4">Items</h2>
            <ul>
                {items.length > 0 ?
                    items.map((item, index) => (
                        <li
                            key={index}
                            className="cursor-pointer text-black mb-2 w-full flex"
                        >
                            <span
                                onClick={() => onItemSelected(item)}
                                className='flex-1 hover:underline'>{item}</span>
                            <span
                                onClick={() => onItemRemove(item)}
                                className='justify-right hover:text-red-500'>x</span>
                        </li>
                    ))
                    :
                    <li className='text-gray-600 py-10'>No items to show</li>
                }
            </ul>

            <div className='flex w-full justify-center'>
                <button
                    onClick={onAddItem}
                    className={`mt-4 py-3 w-10/12 bg-lgu-green text-white rounded-md hover:bg-lgu-green focus:outline-none flex justify-center`}
                >
                    <FaPlus className='mr-1' /> Add
                </button>
            </div>
        </div>
    );
}

// Main TransparencyContent component
export default function AdminMunicipalityProfile() {
    const [itemSidebarItems, setItemSidebarItems] = useState();
    const [items, setItems] = useState([]);

    const [customItemName, setCustomItemName] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const [selectedItem, setSelectedItem] = useState(null);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [resetFileInput, setResetFileInput] = useState(false);
    const [removeItemModal, setRemoveItemModal] = useState(false);

    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const switchMode = (mode) => {
        setIsAdding(false);
        setIsEditing(false);
        if (mode === "adding") {
            setIsAdding(true);
        } else if (mode === "editing") {
            setIsEditing(true);
        }
    }

    const handleItemSelected = (item) => {
        for (var itemObject of items) {
            if (itemObject.profileName === item) {
                setSelectedItem(itemObject);
                setSelectedFile(itemObject.pdf);
                setCustomItemName(itemObject.profileName);
                switchMode('editing');
            }
        }
    };

    useEffect(() => {
        axios.get(API.viewMunProfile, {})
            .then((response) => response.data)
            .then((data) => {
                setItems(data);
                var newItemSidebarItems = []
                for (var profile of data) {
                    newItemSidebarItems.push(profile.profileName)
                }
                setItemSidebarItems(newItemSidebarItems);
            });
    }, [])

    const handleAddItem = () => {
        resetInputFields();
        switchMode('adding');
    };

    const handleSaveAdd = () => {
        if (itemSidebarItems.includes(customItemName.trim())) {
            handleFeedbackMessage(customItemName.trim() + ' already exists.');
            return;
        }

        if (customItemName.trim() === '') {
            handleFeedbackMessage('Please enter a valid item name.');
            return;
        }

        if (!selectedFile) {
            handleFeedbackMessage('Please upload the necessary pdf file.');
            return;
        }

        setItemSidebarItems([...itemSidebarItems, customItemName]);

        const formData = new FormData();
        formData.append('profileName', customItemName);
        formData.append('pdf', selectedFile);

        axios.post(API.addMunProfile, formData, {
            headers: {
                'Authorization': `Bearer ${Cookies.get("token")}`,
                'Content-Type': 'multipart/form-data', // Important for file uploads
            }
        })
            .then((response) => response.data)
            .then((data) => {
                console.log(data);
            });
        resetInputFields();
        handleFeedbackMessage('Item added successfully!');
    }

    const handleSaveEdit = () => {
        var hasChanges = false;
        if (selectedItem.pdf === selectedFile) {
            setSelectedFile(selectedItem.pdf);
        } else {
            hasChanges = true;
        }
        if (selectedItem.profileName !== customItemName) {
            hasChanges = true;
        }

        if (hasChanges) {
            // TODO: save to axios
            handleFeedbackMessage('Changes saved!');
            handleCancelMode();
        } else {
            handleFeedbackMessage('No changes available.');
            handleCancelMode();
        }
    }

    const handleCancelMode = () => {
        switchMode("");
        resetInputFields();
    }

    const handleFeedbackMessage = (message) => {
        setFeedbackMessage(message);
        setTimeout(() => {
            setFeedbackMessage('');
        }, 1000);
    }

    const handleEditItem = () => {
        if (customItemName.trim() !== '') {

            const updatedItems = itemSidebarItems.map((item) =>
                item === selectedItem.profileName ? customItemName : item
            );

            setItemSidebarItems(updatedItems);
            resetInputFields(); // Trigger file input reset

            handleFeedbackMessage('Edited successfully!');
        } else {
            handleFeedbackMessage('Please enter a valid item name.');
        }
    };

    // Function to reset input fields and feedback message
    const resetInputFields = () => {
        setSelectedItem(null);
        setCustomItemName('');
        setSelectedFile(null);
        setResetFileInput(!resetFileInput)
    };

    return (
        <>
            {removeItemModal ?
                <>
                    <div className='fixed w-80 h-32 rounded-10 bg-lgu-green z-70'>
                        <p>Remove item?</p>
                    </div>
                    <div
                        className='fixed top-24 left-0 right-0 bottom-0 bg-black opacity-50 z-60'
                        onClick={() => { setRemoveItemModal(false) }}
                    />
                </>
                :
                null}
            <div className="flex flex-col">
                {/* Title */}
                <h1 className="text-4xl font-bold mb-2 mt-8 ml-2">Municipality Profile</h1>

                {/* Main content container */}
                <div className="flex">
                    {/* Item Sidebar */}
                    <ItemSidebar
                        items={itemSidebarItems}
                        onItemSelected={handleItemSelected}
                        onAddItem={handleAddItem}
                        onItemRemove={() => {
                            setRemoveItemModal(true);
                        }}
                        onEditItem={handleEditItem}
                    />

                    {/* Right side for file upload and preview */}
                    <div className="w-3/4 p-4">
                        <h2 className="text-2xl font-bold mb-2 mt-8">
                            {isAdding ? 'Add Custom Item' : isEditing ? 'Edit ' + selectedItem.profileName : 'Item'}
                        </h2>
                        {/* Input field for custom item name */}
                        <div className="flex">
                            <input
                                type="text"
                                value={customItemName}
                                onChange={(e) => setCustomItemName(e.target.value)}
                                placeholder={'Enter Item Name'}
                                className="mt-2 p-3 border border-lgu-green rounded-md w-full focus:outline-none focus:border-lgu-green"
                            />
                        </div>

                        {/* File Upload with Preview */}
                        <div className="mt-4">
                            <FileUpload onFileChange={setSelectedFile} resetFileInput={resetFileInput} />
                        </div>

                        {
                            isAdding || isEditing ?
                                <div className='mt-5 right-0 float-right'>
                                    <button
                                        onClick={isAdding ? handleSaveAdd : handleSaveEdit}
                                        className='bg-lgu-green text-white px-6 py-3 rounded-lg'>
                                        Save {isEditing ? " Changes" : ""}
                                    </button>
                                    <button
                                        onClick={handleCancelMode}
                                        className='ml-5 px-6 py-3 bg-gray-200 rounded-lg'>
                                        Cancel
                                    </button>
                                </div>
                                :
                                null
                        }

                        {/* Feedback message */}
                        {feedbackMessage ?
                            <p className="text-sm text-lgu-green -500 mb-4">{feedbackMessage}</p>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
