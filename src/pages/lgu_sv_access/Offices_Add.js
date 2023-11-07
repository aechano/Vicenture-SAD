import React, { useState } from "react";
import { BsImage } from 'react-icons/bs'
import { ImEye } from 'react-icons/im'

export default function Offices_Add() {

    const [Department, setDepartment] = useState('');
    const [Hotline, setHotline] = useState('');
    const [phoneNum, setphoneNum] = useState('');
    const [email, setEmail] = useState('');
    const [chart, setChart] = useState('');

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


    return (
        <>
            <div className="flex flex-col items-center justify-center p-20 min-h-screen">
                <div className="mx-auto flex flex-col items-center w-full max-w-7xl mb-10 border-2 border-lgu-green rounded-2xl">
                    <div className="text-2xl font-bold bg-lgu-green text-white p-4 w-full rounded-tl-xl rounded-tr-xl">Add Offices</div>
                    <form>
                        <div className="grid grid-cols-2 gap-x-36 m-5 pt-10">
                            <div>
                                <h1 className='text-sm pb-1'>Department/Office</h1>
                                <div className="relative mb-6 mt-1 text-left" data-te-input-wrapper-init>
                                    <input
                                        required
                                        type="text"
                                        className="block h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                                        id="dep"
                                        placeholder="Municipal Treasury Office"
                                        value={Department}
                                        onChange={(e) => setDepartment(e.target.value)} />
                                </div>
                                <h1 className='text-sm pb-1'>Contacts</h1>
                                <div className="relative mb-2 mt-1 text-left" data-te-input-wrapper-init>
                                    <input
                                        required
                                        type="text"
                                        className="block h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                                        id="hotline"
                                        placeholder="0998-577-3706"
                                        value={Hotline}
                                        onChange={(e) => setHotline(e.target.value)} />
                                </div>
                                <div className="relative mb-2 mt-1 text-left" data-te-input-wrapper-init>
                                    <input
                                        required
                                        type="text"
                                        className="block h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                                        id="phone"
                                        placeholder="0910-727-9853"
                                        value={phoneNum}
                                        onChange={(e) => setphoneNum(e.target.value)} />
                                </div>
                                <div className="relative mb-6 mt-1 text-left" data-te-input-wrapper-init>
                                    <input
                                        required
                                        type="email"
                                        className="block h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                                        id="email"
                                        placeholder="san_vicente@gmail.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <h1 className='text-sm pb-1'>Vision</h1>
                                <textarea id="message" rows="4" className="block mt-1 p-2.5 w-full text-sm text-gray-900 bg-transparent rounded border dark:placeholder-gray-400 dark:text-black" placeholder="Write your vision here..."></textarea>
                            </div>
                            <div>
                                <h1 className='text-sm pb-1'>Organizational Chart</h1>
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
                                            <BsImage className='text-2xl text-gray-400' />
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
                                <h1 className='text-sm pb-1'>Mandate</h1>
                                <textarea id="message" rows="4" className="block mt-1 mb-6 p-2.5 w-full text-sm text-gray-900 bg-transparent rounded border dark:placeholder-gray-400 dark:text-black" placeholder="Write your mandate here..."></textarea>
                                <h1 className='text-sm pb-1'>Mission</h1>
                                <textarea id="message" rows="4" className="block mt-1 p-2.5 w-full text-sm text-gray-900 bg-transparent rounded border dark:placeholder-gray-400 dark:text-black" placeholder="Write your mission here..."></textarea>
                            </div>
                        </div>
                        <div className='flex justify-between pb-5 pt-5'>
                            <div className='flex items-center px-5'>
                                <ImEye />
                                <p className='p-2 text-sm font-semibold'>Preview</p>
                            </div>
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