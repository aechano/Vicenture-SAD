import React, { useState } from "react";
import { BsImage } from 'react-icons/bs'
import { ImEye } from 'react-icons/im'
import { IoClose } from "react-icons/io5";

export default function Offices_Add() {

    const [Department, setDepartment] = useState('');
    const [Head, setHead] = useState('');
    const [Hotline, setHotline] = useState('');
    const [phoneNum, setphoneNum] = useState('');
    const [email, setEmail] = useState('');
    const [fbPage, setFBPage] = useState('');
    const [chart, setChart] = useState('');
    const [street, setStreet] = useState('');

    const [isOpen, setIsOpen] = useState(false);
    const [services, setServices] = useState([]);
    const [newService, setNewService] = useState('');
    const [selectedService, setSelectedService] = useState('')
    const [serviceTextDescription, setServiceTextDescription] = useState({});
    const [serviceTextRequirements, setServiceTextRequirements] = useState({});

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const addService = () => {
        if (newService.trim() !== '') {
            setServices([...services, newService]);
            setNewService('');
        }
    };

    const selectService = (service) => {
        setSelectedService(service);
        setIsOpen(false);
    };

    const handleTextChangeDescription = (e) => {
        const updatedServiceText = { ...serviceTextDescription, [selectedService]: e.target.value };
        setServiceTextDescription(updatedServiceText);
    };

    const handleTextChangeRequirements = (e) => {
        const updatedServiceText = { ...serviceTextRequirements, [selectedService]: e.target.value };
        setServiceTextRequirements(updatedServiceText);
    };

    // Function to handle file input change
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setChart(selectedFile.name);
        }
    }

    // Function to trigger file input when image icon is clicked
    const triggerFileInput = () => {
        document.getElementById('fileInput').click();
    }

    const deleteService = (e, service) => {
        e.stopPropagation(); // Prevent the click event from reaching the div (selectService)
        const updatedServices = services.filter((s) => s !== service);
        setServices(updatedServices);
        if (selectedService === service) {
            // Clear selectedService if it is the one being deleted
            setSelectedService('');
        }
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center p-20 min-h-screen">
                <div className="mx-auto flex flex-col items-center w-full max-w-7xl mb-10 border-2 border-lgu-green rounded-2xl">
                    <div className="text-2xl font-bold bg-lgu-green text-white p-4 w-full rounded-tl-xl rounded-tr-xl">Add Offices</div>
                    <form>
                        <div className="grid grid-cols-2 gap-x-36 m-5 pt-10">
                            <div>
                                <h1 className='text-md font-bold pb-1'>Department/Office</h1>
                                <div className="relative mb-6 mt-1 text-left" data-te-input-wrapper-init>
                                    <input
                                        required
                                        type="text"
                                        className="block h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                                        id="dep"
                                        placeholder="Office"
                                        value={Department}
                                        onChange={(e) => setDepartment(e.target.value)} />
                                </div>
                                <h1 className='text-md font-bold pb-1'>Head</h1>
                                <div className="relative mb-6 mt-1 text-left" data-te-input-wrapper-init>
                                    <input
                                        required
                                        type="text"
                                        className="block h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                                        id="dep"
                                        placeholder="Head"
                                        value={Head}
                                        onChange={(e) => setHead(e.target.value)} />
                                </div>
                                <h1 className='text-md font-bold pb-1'>Contacts</h1>
                                <div className="relative mb-2 mt-1 text-left" data-te-input-wrapper-init>
                                    <input
                                        required
                                        type="text"
                                        className="block h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                                        id="hotline"
                                        placeholder="Hotline Number"
                                        value={Hotline}
                                        onChange={(e) => setHotline(e.target.value)} />
                                </div>
                                <div className="relative mb-2 mt-1 text-left" data-te-input-wrapper-init>
                                    <input
                                        required
                                        type="text"
                                        className="block h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                                        id="phone"
                                        placeholder="Phone Number"
                                        value={phoneNum}
                                        onChange={(e) => setphoneNum(e.target.value)} />
                                </div>
                                <div className="relative mb-2 mt-1 text-left" data-te-input-wrapper-init>
                                    <input
                                        required
                                        type="email"
                                        className="block h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                                        id="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="relative mb-6 mt-1 text-left" data-te-input-wrapper-init>
                                    <input
                                        required
                                        type="text"
                                        className="block h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                                        id="fbPage"
                                        placeholder="Facebook Page"
                                        value={fbPage}
                                        onChange={(e) => setFBPage(e.target.value)} />
                                </div>
                                <h1 className='text-md font-bold pb-1'>Vision</h1>
                                <textarea id="message" rows="4" className="block mt-1 p-2.5 w-full text-sm text-gray-900 bg-transparent rounded border dark:placeholder-gray-400 dark:text-black" placeholder="Write your vision here..."></textarea>
                            </div>
                            <div>
                                <h1 className='text-md font-bold pb-1'>Organizational Chart</h1>
                                <div className="relative mb-6 mt-1 text-left" data-te-input-wrapper-init>
                                    <div className="flex items-center h-14 rounded border border-1 w-80 bg-transparent">
                                        <input
                                            required
                                            type="text"
                                            className=" w-72 px-3 py-[0.32rem] leading-normal dark:text-black dark:placeholder-text-gray-400 truncate placeholder-gray-400 focus:outline-none focus:border-transparent"
                                            id="chart"
                                            placeholder="Upload image here..."
                                            value={chart}
                                            onChange={(e) => setChart(e.target.value)}
                                            readOnly // Make the input read-only to prevent manual input
                                        />
                                        <div
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                            onClick={triggerFileInput}
                                        >
                                            <BsImage className='text-2xl text-lgu-green' />
                                        </div>
                                        <input
                                            type="file"
                                            accept='image/png, image/jpeg'
                                            id="fileInput"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div>
                                <h1 className='text-md font-bold pb-1'>Mandate</h1>
                                <textarea id="message" rows="4" className="block mt-1 mb-6 p-2.5 w-full text-sm text-gray-900 bg-transparent rounded border dark:placeholder-gray-400 dark:text-black" placeholder="Write your mandate here..."></textarea>
                                <h1 className='text-md font-bold pb-1'>Mission</h1>
                                <textarea id="message" rows="4" className="block mt-1 mb-6 p-2.5 w-full text-sm text-gray-900 bg-transparent rounded border dark:placeholder-gray-400 dark:text-black" placeholder="Write your mission here..."></textarea>
                                <div className="relative mb-2 mt-1 text-left" data-te-input-wrapper-init>
                                    <h1 className='text-md font-bold pb-1'>Location</h1>
                                    <textarea id="message" rows="4" className="block mt-1 mb-6 p-2.5 w-full text-sm text-gray-900 bg-transparent rounded border dark:placeholder-gray-400 dark:text-black" placeholder="Write the office location here..."></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="m-5">
                            <div className="relative inline-block text-left">
                                <div>
                                    <button
                                        type="button"
                                        onClick={toggleDropdown}
                                        className="h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400 flex justify-between items-center"
                                    >
                                        <span>{selectedService || 'Select a service'}</span>
                                        <svg
                                            className={`h-5 w-5 transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {isOpen && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1">
                                            {services.map((service, index) => (
                                                <div key={index} className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100">
                                                    <div onClick={() => selectService(service)}>{service}</div>
                                                    <button
                                                        onClick={(e) => deleteService(e, service)}
                                                        className="text-red-500 hover:text-red-700 focus:outline-none"
                                                    >
                                                        <IoClose />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="px-4 py-2">
                                            <input
                                                type="text"
                                                value={newService}
                                                onChange={(e) => setNewService(e.target.value)}
                                                placeholder="Enter a new service"
                                                className="border border-gray-300 px-2 py-1 w-full"
                                            />
                                        </div>

                                        <div className="px-4 py-2">
                                            <button
                                                type="button"
                                                onClick={addService}
                                                className="bg-lgu-green text-white px-4 py-2 rounded"
                                            >
                                                Add Service
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div>
                                <textarea
                                    id="messageDescription"
                                    rows="6"
                                    className="block mt-1 mb-6 p-2.5 w-full text-sm text-gray-900 bg-transparent rounded border dark:placeholder-gray-400 dark:text-black"
                                    placeholder="Service Description"
                                    value={serviceTextDescription[selectedService] || ''}
                                    onChange={handleTextChangeDescription}
                                />
                            </div>

                            <div>
                                <textarea
                                    id="messageRequirements"
                                    rows="6"
                                    className="block mt-1 mb-2 p-2.5 w-full text-sm text-gray-900 bg-transparent rounded border dark:placeholder-gray-400 dark:text-black"
                                    placeholder="Service Requirements and Procedures"
                                    value={serviceTextRequirements[selectedService] || ''}
                                    onChange={handleTextChangeRequirements}
                                />
                            </div>
                        </div>

                        <div className='flex justify-between pb-5 pt-5'>
                            <div className='flex'>
                                <div className="pr-2">
                                    <button type="submit"
                                        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                                        className="text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300">
                                        Cancel
                                    </button>
                                </div>
                                <div>
                                    <button type="submit" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })} className="text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}