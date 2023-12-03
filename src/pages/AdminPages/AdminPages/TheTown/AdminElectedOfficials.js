import React, { useEffect, useRef, useState } from 'react'
import { API } from '../../../../Variables/GLOBAL_VARIABLE';
import axios from 'axios';
import Cookies from 'js-cookie';


// Component for Layer 1 and Layer 2 content
const Layer12Content = ({ name, position, number, file, comm, setName, setPosition, setNumber, setFile, setComm, onInputChange }) => (


    <div className='mt-10'>
        <label htmlFor="file" className="block text-sm font-medium text-lgu-green">
            Name
        </label>
        <div className="relative mb-6 mt-2 text-left" data-te-input-wrapper-init>
            <input
                required
                type="text"
                className="block h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => { setName(e.target.value); onInputChange() }}
            />
        </div>

        <label htmlFor="file" className="block text-sm font-medium text-lgu-green">
            Position
        </label>
        <div className="relative mb-6 mt-2 text-left" data-te-input-wrapper-init>
            <input
                required
                type="text"
                className="block h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                id="pos"
                placeholder="Position"
                value={position}
                onChange={(e) => { setPosition(e.target.value); onInputChange() }} />
        </div>

        <label htmlFor="file" className="block text-sm font-medium text-lgu-green">
            Commitee
        </label>
        <div>
            <textarea
                id="messageDescription"
                rows="6"
                className="block mt-1 mb-6 p-2.5 w-full text-sm text-gray-900 bg-transparent rounded border dark:placeholder-gray-400 dark:text-black"
                placeholder="Please put a comma to indicate their individuality. For example: Health Officer, Community Awareness, Sanitary, Education"
                value={comm}
                onChange={(e) => { setComm(e.target.value); onInputChange() }}
            />
        </div>

        <label htmlFor="file" className="block text-sm font-medium text-lgu-green">
            Contact Number
        </label>
        <div className="relative mb-6 mt-2 text-left" data-te-input-wrapper-init>
            <input
                required
                type="text"
                className="block h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                id="pos"
                placeholder="09123456789"
                value={number}
                onChange={(e) => { setNumber(e.target.value); onInputChange() }} />
        </div>

        <label htmlFor="file" className="block text-sm font-medium text-lgu-green mb-5">
            Upload File
        </label>

        <label className="flex items-center space-x-2">
            <div className="relative">
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="absolute left-0 opacity-0 cursor-pointer w-full h-full"
                />
                <button className="text-sm text-grey-500 bg-blue-50 text-blue-700 px-6 py-2 rounded-full hover:bg-amber-50 hover:text-amber-700">
                    Choose a file
                </button>
            </div>
            <span className="text-sm">{file.name || 'No file chosen'}</span>
        </label>
    </div>
);

function Layer34Content({ name, position, number, file, comm, setName, setPosition, setNumber, setFile, setComm, pageIndex, setPageIndex }) {

    return (
        <div className='mt-10'>
            <div className='mt-10'>
                <label htmlFor="file" className="block text-sm font-medium text-lgu-green">
                    Name
                </label>
                <div className="relative mb-6 mt-2 text-left" data-te-input-wrapper-init>
                    <input
                        required
                        type="text"
                        className="block h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                        id="name"
                        placeholder="John Doe"
                        value={name[pageIndex]}
                        onChange={(e) => {
                            var newNames = [...name]
                            newNames[pageIndex] = e.target.value;
                            setName(newNames);
                        }} />
                </div>

                <label htmlFor="file" className="block text-sm font-medium text-lgu-green">
                    Position
                </label>
                <div className="relative mb-6 mt-2 text-left" data-te-input-wrapper-init>
                    <input
                        required
                        type="text"
                        className="block h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                        id="pos"
                        placeholder="Position"
                        value={position[pageIndex]}
                        onChange={(e) => {
                            var newPosition = [...position]
                            newPosition[pageIndex] = e.target.value;
                            setPosition(newPosition);
                        }} />
                </div>

                <label htmlFor="file" className="block text-sm font-medium text-lgu-green">
                    Commitee
                </label>
                <div>
                    <textarea
                        id="messageDescription"
                        rows="6"
                        className="block mt-1 mb-6 p-2.5 w-full text-sm text-gray-900 bg-transparent rounded border dark:placeholder-gray-400 dark:text-black"
                        placeholder="Health Officer, Community Awareness, Sanitary, Education"
                        value={comm[pageIndex]}
                        onChange={(e) => {
                            var newComm = [...comm]
                            newComm[pageIndex] = e.target.value;
                            setComm(newComm);
                        }}
                    />
                </div>

                <label htmlFor="file" className="block text-sm font-medium text-lgu-green">
                    Contact Number
                </label>
                <div className="relative mb-6 mt-2 text-left" data-te-input-wrapper-init>
                    <input
                        required
                        type="text"
                        className="block h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                        id="pos"
                        placeholder="09123456789"
                        value={number[pageIndex]}
                        onChange={(e) => {
                            var newNumber = [...number]
                            newNumber[pageIndex] = e.target.value;
                            setNumber(newNumber);
                        }} />
                </div>

                <label className="flex items-center space-x-2">
                    <div className="relative">
                        <input
                            type="file"
                            onChange={(e) => {
                                const newFiles = [...file];
                                newFiles[pageIndex] = e.target.files[0];
                                setFile(newFiles);
                                console.log(file);
                            }}
                            className="absolute left-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <button className="text-sm text-grey-500 bg-blue-50 text-blue-700 px-6 py-2 rounded-full hover:bg-amber-50 hover:text-amber-700">
                            Choose a file
                        </button>
                    </div>
                    <span className="text-sm">{file[pageIndex].name || 'No file chosen'}</span>
                </label>

            </div>
            {/* Navigation for Layer 3 and Layer 4 */}
            <div className="flex justify-between mt-4">
                <button
                    onClick={() => setPageIndex((prev) => Math.max(prev - 1, 0))}
                    className="bg-lgu-green text-white px-4 py-2 rounded-md"
                >
                    Prev
                </button>
                <span>{pageIndex + 1}/3</span>
                <button
                    onClick={() => setPageIndex((prev) => Math.min(prev + 1, 2))}
                    className="bg-lgu-green text-white px-4 py-2 rounded-md"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default function AdminElectedOfficials() {
    const [selectedLayer, setSelectedLayer] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    // States for Layer 1
    const [dbId1, setdbId1] = useState(-1);
    const [name1, setName1] = useState('');
    const [position1, setPosition1] = useState('');
    const [number1, setNumber1] = useState('');
    const [file1, setFile1] = useState('');
    const [comm1, setComm1] = useState('');

    // States for Layer 2
    const [dbId2, setdbId2] = useState(-1);
    const [name2, setName2] = useState('');
    const [position2, setPosition2] = useState('');
    const [number2, setNumber2] = useState('');
    const [file2, setFile2] = useState('');
    const [comm2, setComm2] = useState('');

    // States for Layer 3
    const [dbId3, setdbId3] = useState(-1);
    const [name3, setName3] = useState(['', '', '']);
    const [position3, setPosition3] = useState(['', '', '']);
    const [number3, setNumber3] = useState(['', '', '']);
    const [file3, setFile3] = useState(['', '', '']);
    const [comm3, setComm3] = useState(['', '', '']);

    // States for Layer 4
    const [dbId4, setdbId4] = useState(-1);
    const [name4, setName4] = useState(['', '', '']);
    const [position4, setPosition4] = useState(['', '', '']);
    const [number4, setNumber4] = useState(['', '', '']);
    const [file4, setFile4] = useState(['', '', '']);
    const [comm4, setComm4] = useState(['', '', '']);

    // States for Layer 5
    const [dbId5, setdbId5] = useState(-1);
    const [name5, setName5] = useState(['', '', '']);
    const [position5, setPosition5] = useState(['', '', '']);
    const [number5, setNumber5] = useState(['', '', '']);
    const [file5, setFile5] = useState(['', '', '']);
    const [comm5, setComm5] = useState(['', '', '']);

    // States for Layer 6
    const [dbId6, setdbId6] = useState(-1);
    const [name6, setName6] = useState(['', '', '']);
    const [position6, setPosition6] = useState(['', '', '']);
    const [number6, setNumber6] = useState(['', '', '']);
    const [file6, setFile6] = useState(['', '', '']);
    const [comm6, setComm6] = useState(['', '', '']);

    // States for Layer 7
    const [dbId7, setdbId7] = useState(-1);
    const [name7, setName7] = useState(['', '', '']);
    const [position7, setPosition7] = useState(['', '', '']);
    const [number7, setNumber7] = useState(['', '', '']);
    const [file7, setFile7] = useState(['', '', '']);
    const [comm7, setComm7] = useState(['', '', '']);


    // Page index for Layer 3 and 4
    const [pageIndex, setPageIndex] = useState(0);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectLayer = (layer) => {
        setSelectedLayer(layer);
        setIsOpen(false);
        // Reset page index when a new layer is selected
        setPageIndex(0);
    };

    const binaryToFile = (bin_file, filename) => {
        const pdfName = filename;
        const byteCharacters = atob(bin_file);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/png' });

        return new File([blob], pdfName || 'default_filename.png', { type: 'application/png' });
    }

    useEffect(() => {
        axios.get(API.viewOfficials, {})
            .then((response) => response.data)
            .then((data) => {
                console.log(data);
                for (var layer of data) {
                    if (layer.layer === 1) {
                        setdbId1(layer.officialsID);
                        setName1(layer.officialsName);
                        setPosition1(layer.position);
                        setComm1(layer.committee);
                        setNumber1(layer.contactNumber);
                        setFile1(binaryToFile(layer.image, layer.imageName));
                    } else if (layer.layer === 2) {
                        setdbId2(layer.officialsID);
                        setName2(layer.officialsName);
                        setPosition2(layer.position);
                        setComm2(layer.committee);
                        setNumber2(layer.contactNumber);
                        setFile2(binaryToFile(layer.image, layer.imageName));
                    }
                }
            });
    }, [])

    const getLayers = (layer) => {
        switch (layer) {
            case "layer 1":
                return { name: name1, position: position1, number: number1, file: file1, comm: comm1, hasPages: false, layer: 1, imageName: file1.name };
            case "layer 2":
                return { name: name2, position: position2, number: number2, file: file2, comm: comm2, hasPages: false, layer: 2, imageName: file2.name };
            case "layer 3":
                return { name: name3, position: position3, number: number3, file: file3, comm: comm3, hasPages: true, layer: 3, imageName: file3.name };
            case "layer 4":
                return { name: name4, position: position4, number: number4, file: file4, comm: comm4, hasPages: true, layer: 4, imageName: file4.name };
            case "layer 5":
                return { name: name5, position: position5, number: number5, file: file5, comm: comm5, hasPages: true, layer: 5, imageName: file5.name };
            case "layer 6":
                return { name: name6, position: position6, number: number6, file: file6, comm: comm6, hasPages: true, layer: 6, imageName: file6.name };
            case "layer 7":
                return { name: name7, position: position7, number: number7, file: file7, comm: comm7, hasPages: true, layer: 7, imageName: file7.name };
            default:
                return {};
        }
    }

    const handleSaveClick = () => {
        const { name, position, number, file, comm, hasPages, layer, imageName } = getLayers(selectedLayer);
        if (hasPages) {
            axios.post(API.addOfficials, {
                "layer": layer,
                "officialsName": name[pageIndex],
                "position": position[pageIndex],
                "committee": comm[pageIndex],
                "contactNumber": number[pageIndex],
                "image": file[pageIndex],
                "imageName": imageName[pageIndex],
                "page": pageIndex
            }, {
                headers: {
                    'Authorization': `Bearer ${Cookies.get("token")}`,
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            })
        } else {
            axios.post(API.addOfficials, {
                "layer": layer,
                "officialsName": name,
                "position": position,
                "committee": comm,
                "contactNumber": number,
                "image": file,
                "imageName": imageName
            }, {
                headers: {
                    'Authorization': `Bearer ${Cookies.get("token")}`,
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true
            })
        }
        console.log("Already saved")
    };

    // State to track whether any input has been entered
    const [isDirty, setIsDirty] = useState(false);

    // Function to handle input change and set isDirty to true
    const handleInputChange = () => {
        setIsDirty(true);
    };

    const layers = ["layer 1", "layer 2", "layer 3", "layer 4", "layer 5", "layer 6", "layer 7"];

    return (
        <div className='ml-2'>
            <h1 className="text-4xl font-bold mb-2 mt-8">Elected Officials</h1>

            <div className='mt-10'>
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400 flex justify-between items-center"
                >
                    <span>{selectedLayer || 'Select a layer'}</span>
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

                {isOpen && (
                    <ul className="absolute mt-2 w-80 bg-white border rounded shadow-lg z-10">
                        {layers.map((layer, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelectLayer(layer)}
                                className="cursor-pointer py-2 px-4 hover:bg-gray-200"
                            >
                                {layer}
                            </li>
                        ))}
                    </ul>
                )}

                {selectedLayer && (
                    <>
                        {isDirty && (
                            <button
                                className="bg-lgu-green text-white px-4 py-2 rounded-md mt-4"
                                onClick={handleSaveClick}
                            >
                                Save
                            </button>
                        )}
                        {selectedLayer === "layer 1" && (
                            <Layer12Content
                                name={name1}
                                position={position1}
                                number={number1}
                                file={file1}
                                comm={comm1}
                                setName={setName1}
                                setPosition={setPosition1}
                                onInputChange={handleInputChange}
                                setNumber={setNumber1}
                                setFile={setFile1}
                                setComm={setComm1}

                            />
                        )}

                        {selectedLayer === "layer 2" && (
                            <Layer12Content
                                name={name2}
                                position={position2}
                                number={number2}
                                file={file2}
                                comm={comm2}
                                setName={setName2}
                                setPosition={setPosition2}
                                onInputChange={handleInputChange}
                                setNumber={setNumber2}
                                setFile={setFile2}
                                setComm={setComm2}
                            />
                        )}

                        {(selectedLayer === "layer 3") && (
                            <Layer34Content
                                name={name3}
                                position={position3}
                                number={number3}
                                file={file3}
                                comm={comm3}
                                setName={setName3}
                                setPosition={setPosition3}
                                onInputChange={handleInputChange}
                                setNumber={setNumber3}
                                setFile={setFile3}
                                pageIndex={pageIndex}
                                setPageIndex={setPageIndex}
                                setComm={setComm3}
                            />
                        )}

                        {(selectedLayer === "layer 4") && (
                            <Layer34Content
                                name={name4}
                                position={position4}
                                number={number4}
                                file={file4}
                                comm={comm4}
                                setName={setName4}
                                setPosition={setPosition4}
                                setNumber={setNumber4}
                                setFile={setFile4}
                                pageIndex={pageIndex}
                                setPageIndex={setPageIndex}
                                setComm={setComm4}
                                onInputChange={handleInputChange}
                            />
                        )}

                        {(selectedLayer === "layer 5") && (
                            <Layer34Content
                                name={name5}
                                position={position5}
                                number={number5}
                                file={file5}
                                comm={comm5}
                                setName={setName5}
                                onInputChange={handleInputChange}
                                setPosition={setPosition5}
                                setNumber={setNumber5}
                                setFile={setFile5}
                                pageIndex={pageIndex}
                                setPageIndex={setPageIndex}
                                setComm={setComm5}
                            />
                        )}

                        {(selectedLayer === "layer 6") && (
                            <Layer34Content
                                name={name6}
                                position={position6}
                                number={number6}
                                file={file6}
                                comm={comm6}
                                setName={setName6}
                                onInputChange={handleInputChange}
                                setPosition={setPosition6}
                                setNumber={setNumber6}
                                setFile={setFile6}
                                pageIndex={pageIndex}
                                setPageIndex={setPageIndex}
                                setComm={setComm6}
                            />
                        )}

                        {(selectedLayer === "layer 7") && (
                            <Layer34Content
                                name={name7}
                                position={position7}
                                number={number7}
                                file={file7}
                                comm={comm7}
                                setName={setName7}
                                setPosition={setPosition7}
                                setNumber={setNumber7}
                                setFile={setFile7}
                                pageIndex={pageIndex}
                                setPageIndex={setPageIndex}
                                setComm={setComm7}
                                onInputChange={handleInputChange}
                            />
                        )}
                    </>

                )}

            </div>
        </div>


    );
}
