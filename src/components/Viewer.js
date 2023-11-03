import React, { useRef, useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { RiArrowLeftCircleFill, RiArrowRightCircleFill } from 'react-icons/ri';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Viewer({view}) {
    const [selectedContent, setSelectedContent] = useState(view[0]);
    const [selectedContentIndex, setSelectedContentIndex] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        // Set the initial selected content when the component mounts
        setSelectedContent(view[0]);
    }, []);

    const handleContentClick = (content, index) => {
        setSelectedContent(content);
        setSelectedContentIndex(index);

        // Scroll the content back to the top
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    };

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pdfWidth, setPdfWidth] = useState(800); // used to set the width of the canvas (pdf file) within the <Page/>
    const pdfRef = useRef(null); // used to keep track of the outer div of pdf's width (used for setting pdfWidth)

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offSet) {
        setPageNumber(prevPageNumber => prevPageNumber + offSet);
    }

    function changePageBack() {
        changePage(-1)
    }

    function changePageNext() {
        changePage(+1)
    }

    useEffect(() => {
        function handleResize() {
            if (pdfRef.current) {
                setPdfWidth(pdfRef.current.offsetWidth);
            }
        }

        handleResize(); // Initial setup
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // set width attribute to target its inner canvas's width

    return (
        <>
            <style>
                {`
            .react-pdf__Page__annotations.annotationLayer {
                display: none;
            }
            `}
            </style>

            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
                <div className='block md:flex space-x-5'>
                    <div className="w-full bg-lgu-yellow p-4 md:w-1/3"> {/** added `md:w-1/3` to maintain its width for medium screens and up */}
                        <ul>
                            {view.map((data, index) => (
                                <li
                                    key={index}
                                    style={{
                                        marginBottom: '1.5vw',
                                        cursor: 'pointer',
                                        textDecoration: selectedContentIndex === index ? 'underline' : 'none',
                                    }}
                                    onClick={() => handleContentClick(data, index)}
                                >
                                    {data.head}
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className='block grow'> {/** dunno if this `grow` className that I put actually does something. ehe~ */}
                        {selectedContent && (
                            <div>
                                <h1 className='pt-5 md:pt-0 text-left pb-5 text-2xl font-bold'>{selectedContent.head}</h1>
                                <div className='flex justify-end w-full' ref={pdfRef}> {/** added pdfRef for keeping track of outer div's width */}
                                    <Document file={selectedContent.pdfView} onLoadSuccess={onDocumentLoadSuccess} className="max-w-full h-auto"> {/** simplified this className to what's (I think) necessary */}
                                        <Page pageNumber={pageNumber} renderTextLayer={false} width={pdfWidth} /> {/** set width attribute to target its inner canvas's width (which was the problem) */}
                                    </Document>
                                </div>
                                <div className='flex justify-end border w-full mt-5 p-2'>
                                    <p className='pr-3'>Page {pageNumber} of {numPages}</p>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            changePageBack();
                                        }}
                                        disabled={pageNumber === 1}
                                        className={`cursor-pointer pr-3 ${pageNumber === 1 ? 'text-gray-400' : ''}`}
                                    >
                                        <span className='text-2xl'><RiArrowLeftCircleFill /></span>
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            changePageNext();
                                        }}
                                        disabled={pageNumber === numPages}
                                        className={`cursor-pointer ${pageNumber === numPages ? 'text-gray-400' : ''}`}
                                    >
                                        <span className='text-2xl'><RiArrowRightCircleFill /></span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
