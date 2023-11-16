import React, { useState, useEffect, useRef } from 'react';
import { FaPlus, FaEdit } from 'react-icons/fa';

// FileUpload component for handling file upload and preview
const FileUpload = ({ onFileChange, resetFileInput }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onFileChange(file);
  };

  useEffect(() => {
    // Reset the file input when resetFileInput changes
    if (resetFileInput) {
      setSelectedFile(null);
      fileInputRef.current.value = ''; // Reset the file input value
    }
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

      {selectedFile && (
        <div className="mt-4">
          <p className="text-sm font-medium text-lgu-green">Preview:</p>
          {selectedFile.type.startsWith('image/') ? (
            <img src={URL.createObjectURL(selectedFile)} alt="File Preview" className="mt-2 max-w-full h-auto" />
          ) : (
            <p>{`Preview for ${selectedFile.type} files is not supported.`}</p>
          )}
        </div>
      )}
    </div>
  );
};

// ItemSidebar component for adding and selecting items
const ItemSidebar = ({ items, onItemSelected, onAddItem, onEditItem }) => {
  const [isEditItemClicked, setIsEditItemClicked] = useState(false);

  const handleAddItem = () => {
    onAddItem();
  };

  const handleEditItem = () => {
    setIsEditItemClicked(true);
    onEditItem();
  };

  return (
    <div className="w-1/3 bg-lgu-lime p-4 ml-8 mt-8">
      <h2 className="text-2xl font-bold mb-4 mt-4">Items</h2>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            onClick={() => onItemSelected(item)}
            className="cursor-pointer text-black hover:underline mb-2"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Edit Item Button */}
      <button
      onClick={handleEditItem}
      className={`mt-8 px-6 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none flex items-center`}
    >
      <FaEdit className="mr-1" /> {isEditItemClicked ? 'Edit' : 'Edit'}
    </button>

      {/* Add Item Button */}
      <button
        onClick={handleAddItem}
        className={`mt-4 px-6 py-1 bg-lgu-green text-white rounded-md hover:bg-lgu-green focus:outline-none flex items-center`}
      >
        <FaPlus className='mr-1' /> Add
      </button>
    </div>
  );
};

// Main TransparencyContent component
export function TransparencyContent() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [customItemName, setCustomItemName] = useState('');
  const [itemSidebarItems, setItemSidebarItems] = useState([
    'Financial Data',
    'Project Report',
    'Sales Data',
  ]);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isEditItemClicked, setIsEditItemClicked] = useState(false);
  const [resetFileInput, setResetFileInput] = useState(false);

  const handleItemSelected = (item) => {
    setSelectedItem(item);
    setSelectedFile(null); // Reset selected file when a new item is selected
    setCustomItemName(item); // Set the input field to the selected item name
  };

  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  const handleAddItem = () => {
    if (customItemName.trim() !== '') {
      setItemSidebarItems([...itemSidebarItems, customItemName]);
      setCustomItemName('');
      setSelectedItem(null);
      setResetFileInput(true); // Trigger file input reset
      setFeedbackMessage('Item added successfully!');
      setTimeout(() => {
        setFeedbackMessage('');
      }, 2000);
    } else {
      setFeedbackMessage('Please enter a valid item name.');
    }
  };

  const handleEditItem = () => {
    if (customItemName.trim() !== '' && selectedItem) {
      const updatedItems = itemSidebarItems.map((item) =>
        item === selectedItem ? customItemName : item
      );
      setItemSidebarItems(updatedItems);
      setCustomItemName('');
      setSelectedItem(null);
      setResetFileInput(true); // Trigger file input reset
      setFeedbackMessage('Edit successfully!');
      setTimeout(() => {
        setFeedbackMessage('');
      }, 2000);
    } else {
      setFeedbackMessage('Please enter a valid item name.');
    }

    setIsEditItemClicked(false);
  };

  // Function to reset input fields and feedback message
  const resetInputFields = () => {
    setSelectedItem(null);
    setCustomItemName('');
    setSelectedFile(null);
    setFeedbackMessage('');
  };

  useEffect(() => {
    // Reset input fields and file input reset trigger after state update
    resetInputFields();
    setResetFileInput(false);
  }, [isEditItemClicked, resetFileInput]); // Run this effect whenever isEditItemClicked or resetFileInput changes

  return (
    <div className="flex flex-col">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2 mt-8 ml-2">Transparency Dashboard</h1>

      {/* Main content container */}
      <div className="flex">
        {/* Item Sidebar */}
        <ItemSidebar
          items={itemSidebarItems}
          onItemSelected={handleItemSelected}
          onAddItem={handleAddItem}
          onEditItem={handleEditItem}
        />

        {/* Right side for file upload and preview */}
        <div className="w-3/4 p-4">
          <h2 className="text-2xl font-bold mb-2 mt-8">
            {selectedItem && 'Edit '} {selectedItem || 'Add Custom Item'}
          </h2>
          {/* Input field for custom item name */}
          <div className="flex">
            <input
              type="text"
              value={customItemName}
              onChange={(e) => setCustomItemName(e.target.value)}
              placeholder={`Enter ${selectedItem || 'Custom Item'} Name`}
              className="mt-2 p-3 border border-lgu-green rounded-md w-full focus:outline-none focus:border-lgu-green"
            />
          </div>

          {/* File Upload with Preview */}
          <div className="mt-4">
            <FileUpload onFileChange={handleFileChange} resetFileInput={resetFileInput} />
          </div>

          {/* Feedback message */}
          {feedbackMessage && <p className="text-sm text-lgu-green -500 mb-4">{feedbackMessage}</p>}
        </div>
      </div>
    </div>
  );
}
