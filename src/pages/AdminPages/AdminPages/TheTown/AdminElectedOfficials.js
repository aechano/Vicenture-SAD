import React, { useState } from 'react'


// Component for Layer 1 and Layer 2 content
const Layer12Content = ({ name, position, number, file, setName, setPosition, setNumber, setFile }) => (
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
                onChange={(e) => setName(e.target.value)} />
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
                onChange={(e) => setPosition(e.target.value)} />
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
                onChange={(e) => setNumber(e.target.value)} />
        </div>

        <label htmlFor="file" className="block text-sm font-medium text-lgu-green">
            Upload File
        </label>
        <input
            type="file"
            id="file"
            accept='image/png, image/jpeg'
            name="file"
            value={file}
            onChange={(e) => setFile(e.target.value)}
            className="mt-1 p-2 h-14 w-80 border border-lgu-green rounded-md w-l focus:outline-none focus:border-lgu-green"
        />
    </div>
);

const Layer34Content = ({ name, position, number, file, setName, setPosition, setNumber, setFile, pageIndex, setPageIndex }) => (
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
                    onChange={(e) => {
                        var newComm = [...comm]
                        newNames[pageIndex] = e.target.value;
                        setName(newNames);
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
                    onChange={(e) => setNumber(e.target.value)} />
            </div>

            <label htmlFor="file" className="block text-sm font-medium text-lgu-green">
                Upload File
            </label>
            <input
                type="file"
                id="file"
                accept='image/png, image/jpeg'
                name="file"
                value={file[pageIndex]}
                onChange={(e) => setFile(e.target.value)}
                className="mt-1 p-2 h-14 w-80 border border-lgu-green rounded-md w-l focus:outline-none focus:border-lgu-green"
            />
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

export default function AdminElectedOfficials() {
    const [selectedLayer, setSelectedLayer] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    // States for Layer 1
    const [name1, setName1] = useState('');
    const [position1, setPosition1] = useState('');
    const [number1, setNumber1] = useState('');
    const [file1, setFile1] = useState('');

    // States for Layer 2
    const [name2, setName2] = useState('');
    const [position2, setPosition2] = useState('');
    const [number2, setNumber2] = useState('');
    const [file2, setFile2] = useState('');

    // States for Layer 3
    const [name3, setName3] = useState(['', '', '']);
    const [position3, setPosition3] = useState(['', '', '']);
    const [number3, setNumber3] = useState(['', '', '']);
    const [file3, setFile3] = useState(['', '', '']);

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

    const layers = ["layer 1", "layer 2", "layer 3", "layer 4"];

    return (
        <div className='ml-2'>
            <h1 className="text-4xl font-bold mb-2 mt-8">Municipality Profile</h1>

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

                {selectedLayer === "layer 1" && (
                    <Layer12Content
                        name={name1}
                        position={position1}
                        number={number1}
                        file={file1}
                        setName={setName1}
                        setPosition={setPosition1}
                        setNumber={setNumber1}
                        setFile={setFile1}
                    />
                )}

                {selectedLayer === "layer 2" && (
                    <Layer12Content
                        name={name2}
                        position={position2}
                        number={number2}
                        file={file2}
                        setName={setName2}
                        setPosition={setPosition2}
                        setNumber={setNumber2}
                        setFile={setFile2}
                    />
                )}

                {(selectedLayer === "layer 3" || selectedLayer === "layer 4") && (
                    <Layer34Content
                        name={name3}
                        position={position3}
                        number={number3}
                        file={file3}
                        setName={setName3}
                        setPosition={setPosition3}
                        setNumber={setNumber3}
                        setFile={setFile3}
                        pageIndex={pageIndex}
                        setPageIndex={setPageIndex}
                    />
                )}
            </div>



        </div>
    );
}
