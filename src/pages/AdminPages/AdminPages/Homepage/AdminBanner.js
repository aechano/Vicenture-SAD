import React, { useState, useEffect, useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
import axios from 'axios';
import { API } from '../../../../Variables/GLOBAL_VARIABLE';
import Cookies from 'js-cookie';

// FileUpload component for handling file upload and preview
function FileUpload({ onFileChange, resetFileInput, initialSelectedFile, selectedFile, setSelectedFile }) {
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
                accept='image/png, image/jpeg'
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

export default function AdminBanner() {
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
                if (itemObject.title === item) {
                    setSelectedItem(itemObject);
                    if (typeof itemObject.image === "object") {
                        setSelectedFile(itemObject.image);
                    } else {
                        const ImageName = itemObject.imgName;
                        const byteCharacters = atob(itemObject.image);
                        const byteNumbers = new Array(byteCharacters.length);
                        for (let i = 0; i < byteCharacters.length; i++) {
                            byteNumbers[i] = byteCharacters.charCodeAt(i);
                        }
                        const byteArray = new Uint8Array(byteNumbers);
                        const blob = new Blob([byteArray], { type: 'image/*' });

                        // Create a File object from the Blob with the actual filename
                        const file = new File([blob], ImageName || 'Image', { type: 'image/*' });
                        setSelectedFile(file);
                    }
                    // Set the selected file
                    setCustomItemName(itemObject.title);
                    switchMode('editing');

                }
            }
    };

    useEffect(() => {
        axios.get(API.viewBanner, {})
            .then((response) => response.data)
            .then((data) => {
                console.log(data);
                setItems(data);
                var newItemSidebarItems = []
                for (var banner of data) {
                    newItemSidebarItems.push(banner.title)
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
        formData.append('title', customItemName);
        formData.append('image', selectedFile);
        formData.append('imgName', selectedFile.name);

        axios.post(API.addBanner, formData, {
            headers: {
                'Authorization': `Bearer ${Cookies.get("token")}`,
                'Content-Type': 'multipart/form-data', // Important for file uploads
            }
        })
            .then((response) => response.data)
            .then((data) => {
                setItems([...items, data])
            });
        resetInputFields();
        handleFeedbackMessage('Item added successfully!');
    }

    const handleSaveEdit = () => {
        var hasChanges = false;
        if (selectedItem.image === selectedFile) {
            setSelectedFile(selectedItem.image);
        } else {
            hasChanges = true;
        }
        if (selectedItem.title !== customItemName) {
            hasChanges = true;
        }

        if (hasChanges) {
            // TODO: save to axios

            const formData = new FormData();
            formData.append('bannerID', selectedItem.bannerID);
            formData.append('title', customItemName);
            formData.append('image', selectedFile);
            formData.append('imgName', selectedFile.name);

            axios.post(API.editBanner, formData, {
                headers: {
                    'Authorization': `Bearer ${Cookies.get("token")}`,
                    'Content-Type': 'multipart/form-data', // Important for file uploads
                }
            })
                .then((response) => response.data)
                .then((data) => {
                    var newItems = [];
                    for (var item of items) {
                        newItems.push(item.bannerID === selectedItem.bannerID ? data : item);
                    }
                    setItems(newItems);

                    var newSidebarItems = [];
                    for (var item of itemSidebarItems) {
                        newSidebarItems.push(item === selectedItem.title ? customItemName : item);
                    }
                    setItemSidebarItems(newSidebarItems);
                });

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
                item === selectedItem.title ? customItemName : item
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
                    {/* Modal Content */}
                    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-32 rounded-10 bg-lgu-green z-70'>
                        {/* Close Button */}
                        <button
                            className='absolute top-0 right-0 p-2 text-white cursor-pointer'
                            onClick={() => {
                                console.log('Close button clicked');
                                setRemoveItemModal(false);
                            }}
                        >
                            X
                        </button>

                        <p className='text-white p-4'>Remove item?</p>

                        <div className='p-3 text-center'>
                            {/* Yes Button */}
                            <button
                                className='bg-blue-500 text-white px-4 py-2 mr-2 rounded'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    var id = selectedItem.profileID;
                                    switchMode("");
                                    resetInputFields();
                                    axios.post(API.deleteBanner(id), {}, {
                                        headers: {
                                            'Authorization': `Bearer ${Cookies.get("token")}`,
                                            withCredentials: true
                                        }
                                    })
                                        .then((response) => response.data)
                                        .then((data) => {
                                            setItems(prevItems => prevItems.filter(item => item.title !== id));
                                            setItemSidebarItems(prevItems => prevItems.filter(item => item !== selectedItem.title));

                                            console.log(data)
                                        });

                                    handleFeedbackMessage('Item deleted successfully!');
                                    setRemoveItemModal(false);
                                }}
                            >
                                Yes
                            </button>

                            {/* No Button */}
                            <button
                                className='bg-red-500 text-white px-4 py-2 rounded'
                                onClick={(e) => {
                                    e.stopPropagation(); // Stop the event from propagating to the overlay
                                    console.log('No button clicked');
                                    // Add your logic for "No" button action here
                                    setRemoveItemModal(false);
                                }}
                            >
                                No
                            </button>
                        </div>

                    </div>
                </>


                :
                null}
            <div className="flex flex-col">
                {/* Title */}
                <h1 className="text-4xl font-bold mb-2 mt-8 ml-2">Banner</h1>

                {/* Main content container */}
                <div className="flex">
                    {/* Item Sidebar */}
                    <ItemSidebar
                        items={itemSidebarItems}
                        onItemSelected={handleItemSelected}
                        onAddItem={handleAddItem}
                        onItemRemove={(item) => {
                            setRemoveItemModal(true);
                            handleItemSelected(item);
                        }}
                        onEditItem={handleEditItem}
                    />

                    {/* Right side for file upload and preview */}
                    <div className="w-3/4 p-4">
                        <h2 className="text-2xl font-bold mb-2 mt-8">
                            {isAdding ? 'Add Custom Item' : isEditing ? 'Edit ' + selectedItem.title : 'Item'}
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
                            <FileUpload
                                onFileChange={setSelectedFile}
                                resetFileInput={resetFileInput}
                                selectedFile={selectedFile}
                                setSelectedFile={setSelectedFile} />
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
