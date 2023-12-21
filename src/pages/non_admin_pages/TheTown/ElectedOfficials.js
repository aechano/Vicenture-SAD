import React, { useState, useEffect } from 'react';
import Banner from '../../../components/Banner';
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';
import BackToTop from '../../../components/BackToTop';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Collapse } from 'react-collapse';
import axios from 'axios';
import { API } from '../../../Variables/GLOBAL_VARIABLE';


export default function ElectedOfficials() {
    // Step 1: Add state
    const [open, setOpen] = useState(null);
    const [directoriesData, setdirectoriesData] = useState([]);

    const toggle = (index) => {
        // Step 2: Set state
        if (open === index) {
            setOpen(null);
        } else {
            setOpen(index);
        }
    };

    useEffect(() => {
        axios.get(API.viewOfficials, {})
            .then((response) => response.data)
            .then((data) => {
                var newItems = [];
                for (var item of data) {
                    const imageName = item.imageName; // Assuming there's a property like 'imageName' in your data
                    const byteCharacters = atob(item.image); // Assuming there's a property like 'image' in your data

                    // Convert base64 string to ArrayBuffer
                    const byteNumbers = new Array(byteCharacters.length);
                    for (let i = 0; i < byteCharacters.length; i++) {
                        byteNumbers[i] = byteCharacters.charCodeAt(i);
                    }
                    const byteArray = new Uint8Array(byteNumbers);

                    // Create a Blob from the ArrayBuffer
                    const blob = new Blob([byteArray], { type: 'image/*' }); // Change the type according to your image format

                    // Create a File from the Blob
                    const file = new File([blob], imageName || 'Image', { type: 'image/*' }); // Change the type accordingly

                    const imageUrl = URL.createObjectURL(blob);

                    newItems.push({ id: item.officialsID, pic: imageUrl, name: item.officialsName, pos: item.position, com: item.committee, num: item.contactNumber, layer: item.layer });
                }
                setdirectoriesData(newItems);
            });
    }, []);


    return (
        <>
            <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
                <p>Elected Officials</p>
            </Banner>

            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5'>

                <div className="flex flex-col my-4 items-center pb-5">

                    <div className='md:flex md:flex-row md:space-x-5 lg:space-x-0 space-y-2 md:space-y-0 lg:space-y-2 lg:block pb-5'>

                        {/* Container 1 */}

                        <div className="block w-[18rem] rounded-lg bg-white mb-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-2">
                            {directoriesData.map((directory, index) => {
                                // Check if the layer is "Layer 1"
                                if (directory.layer === "Layer 1") {
                                    return (
                                        <div key={index}>
                                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                                <img
                                                    className="rounded-t-lg object-cover w-96 h-52"
                                                    src={directory.pic}
                                                    alt={directory.name}
                                                />
                                            </div>
                                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                                <p className="text-lg text-black text-center font-bold">
                                                    {directory.name}
                                                </p>
                                                <p className="text-sm text-black text-center font-bold">
                                                    {directory.pos}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                }
                                return null; // Skip rendering for other layers
                            })}
                        </div>

                        {/* Container 3 */}
                        <div className="block w-[18rem] rounded-lg bg-white mb-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-2">
                            {directoriesData.map((directory, index) => {
                                // Check if the layer is "Layer 1"
                                if (directory.layer === "Layer 2") {
                                    return (
                                        <div key={index}>
                                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                                <img
                                                    className="rounded-t-lg object-cover w-96 h-52"
                                                    src={directory.pic}
                                                    alt={directory.name}
                                                />
                                            </div>
                                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                                <p className="text-lg text-black text-center font-bold">
                                                    {directory.name}
                                                </p>
                                                <p className="text-sm text-black text-center font-bold">
                                                    {directory.pos}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                }
                                return null; // Skip rendering for other layers
                            })}
                        </div>

                    </div>


                    {/* Containers 4, 5, and 6 (Horizontally aligned) */}
                    <div className="block md:flex md:flex-row md:flex-wrap md:justify-center lg:flex -m-2 mb-5">
                        {directoriesData.map((directory, index) => {
                            // Check if the layer is "Layer 3"
                            if (directory.layer === "Layer 3") {
                                return (
                                    <div key={index} className="m-2">
                                        <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-2">
                                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                                <img
                                                    className="rounded-t-lg object-cover w-96 h-52"
                                                    src={directory.pic}
                                                    alt={directory.name}
                                                />
                                            </div>
                                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                                <p className="text-lg text-black text-center font-bold">
                                                    {directory.name}
                                                </p>
                                                <p className="text-sm text-black text-center font-bold">
                                                    {directory.pos}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            return null; // Skip rendering for other layers
                        })}
                    </div>


                    {/* Layer 4 */}
                    <div className="block md:flex md:flex-row md:flex-wrap md:justify-center lg:flex -m-2 mb-5">
                        {directoriesData.map((directory, index) => {
                            // Check if the layer is "Layer 3"
                            if (directory.layer === "Layer 4") {
                                return (
                                    <div key={index} className="m-2">
                                        <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-2">
                                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                                <img
                                                    className="rounded-t-lg object-cover w-96 h-52"
                                                    src={directory.pic}
                                                    alt={directory.name}
                                                />
                                            </div>
                                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                                <p className="text-lg text-black text-center font-bold">
                                                    {directory.name}
                                                </p>
                                                <p className="text-sm text-black text-center font-bold">
                                                    {directory.pos}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            return null; // Skip rendering for other layers
                        })}
                    </div>

                    {/* Layer 5 */}
                    <div className="block md:flex md:flex-row md:flex-wrap md:justify-center lg:flex -m-2 mb-5">
                        {directoriesData.map((directory, index) => {
                            // Check if the layer is "Layer 3"
                            if (directory.layer === "Layer 5") {
                                return (
                                    <div key={index} className="m-2">
                                        <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-2">
                                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                                <img
                                                    className="rounded-t-lg object-cover w-96 h-52"
                                                    src={directory.pic}
                                                    alt={directory.name}
                                                />
                                            </div>
                                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                                <p className="text-lg text-black text-center font-bold">
                                                    {directory.name}
                                                </p>
                                                <p className="text-sm text-black text-center font-bold">
                                                    {directory.pos}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            return null; // Skip rendering for other layers
                        })}
                    </div>

                    {/* Layer 6 */}
                    <div className="block md:flex md:flex-row md:flex-wrap md:justify-center lg:flex -m-2 mb-5">
                        {directoriesData.map((directory, index) => {
                            // Check if the layer is "Layer 3"
                            if (directory.layer === "Layer 6") {
                                return (
                                    <div key={index} className="m-2">
                                        <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-2">
                                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                                <img
                                                    className="rounded-t-lg object-cover w-96 h-52"
                                                    src={directory.pic}
                                                    alt={directory.name}
                                                />
                                            </div>
                                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                                <p className="text-lg text-black text-center font-bold">
                                                    {directory.name}
                                                </p>
                                                <p className="text-sm text-black text-center font-bold">
                                                    {directory.pos}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            return null; // Skip rendering for other layers
                        })}
                    </div>

                </div>


                {/*put the directories here */}
                <div className='pt-5 mb-3 m-5 space-y-6'>
                    <h1 className='font-bold text-center text-4xl'>Directories</h1>
                </div>
                <div className="pt-3 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
                    {/* {directoriesData.map((directory, index) => (
                        <div key={index} className="pt-3">
                            <div
                                className="bg-lgu-green py-2 p-4 sm:px-16 flex justify-between item-center cursor-pointer rounded-xl"
                                onClick={() => toggle(index)}
                            >
                                <p className="text-2xl mt-2 text-white font-semibold">{directory.directoryName}</p>
                                <div className="text-5xl text-white">
                                    {open === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>
                            </div>

                            <Collapse isOpened={open === index}>
                                <div className="bg-lgu-lime px-16 pb-10 pt-5 rounded-tr-xl rounded-tl-xl rounded-br-xl rounded-bl-xl">
                                    <p className="text-2xl font-bold">{directory.charpersonCommitteeOn}</p>

                                    <ul className="text-lg ml-4">
                                        {directory.list.map((item, idx) => (
                                            <li key={idx} className='list-disc ml-6'>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="text-2xl font-bold mt-6">
                                        {directory.contactNo}
                                    </p>
                                    <p className="text-lg ml-4">
                                        {directory.num}
                                    </p>
                                </div>
                            </Collapse>
                        </div>
                    ))} */}
                </div>

            </div>


            <BackToTop />
        </>
    );
}
