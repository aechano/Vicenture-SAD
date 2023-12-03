import React, { useRef, useState, useEffect } from 'react';
import Banner from '../../../components/Banner';
import { PATH_NAME, API } from '../../../Variables/GLOBAL_VARIABLE';
import { Document, Page, pdfjs } from 'react-pdf';
import BackToTop from '../../../components/BackToTop';
import axios from 'axios';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function CitizensCharter() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pdfDimensions, setPdfDimensions] = useState({ width: 0, height: 0 });
    const [inputPage, setInputPage] = useState(''); // Store the user input page number
    const [invalidInput, setInvalidInput] = useState(false); // Track invalid input
    const [pageExceedsTotal, setPageExceedsTotal] = useState(false); // Track input exceeding total pages
    const [pdfWidth, setPdfWidth] = useState(800);
    const pdfRef = useRef(null);
    const [view, setView] = useState([])

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    // useEffect(() => {
    //     const fetchPdfDimensions = async () => {
    //         try {
    //             const pdfPath = require("../../../res/pdf/citizenscharterfile.pdf");
    //             const loadingTask = pdfjs.getDocument({ url: pdfPath });

    //             const pdfDoc = await loadingTask.promise;
    //             const firstPage = await pdfDoc.getPage(1);
    //             const { width, height } = firstPage.getViewport({ scale: 1 });

    //             setPdfDimensions({ width, height });
    //         } catch (error) {
    //             console.error('Error loading PDF:', error);
    //         }
    //     };

    //     fetchPdfDimensions();
    // }, []);

    useEffect(() => {
        axios.get(API.viewCharter, {})
            .then((response) => response.data)
            .then((data) => {
                var newItems = [];
                console.log(data)
                for (var item of data) {
                    const pdfName = item.pdfName;
                    const byteCharacters = atob(item.pdf);
                    const byteNumbers = new Array(byteCharacters.length);
                    for (let i = 0; i < byteCharacters.length; i++) {
                        byteNumbers[i] = byteCharacters.charCodeAt(i);
                    }
                    const byteArray = new Uint8Array(byteNumbers);
                    const blob = new Blob([byteArray], { type: 'application/pdf' });

                    const file = new File([blob], pdfName || 'default_filename.pdf', { type: 'application/pdf' });
                    newItems.push({ head: item.charterName, pdfView: file });
                }
                setView(newItems);
            });
    }, []);

    const handlePreviousPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    const handleNextPage = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    const handleGoToPage = () => {
        const parsedPage = parseInt(inputPage, 10);
        if (isNaN(parsedPage) || parsedPage < 1) {
            setInvalidInput(true); // Set the invalid input flag for negative or non-numeric input
            setPageExceedsTotal(false); // Reset the exceeding pages flag
        } else if (parsedPage > numPages) {
            setPageExceedsTotal(true); // Set the exceeding pages flag
            setInvalidInput(false); // Reset the invalid input flag
        } else {
            setPageNumber(parsedPage);
            setInputPage(''); // Clear the input field
            setInvalidInput(false); // Reset the invalid input flag
            setPageExceedsTotal(false); // Reset the exceeding pages flag]
        }
    };

    const downloadPdf = () => {
        const link = document.createElement('a');
        link.href = (require("../../../res/pdf/citizenscharterfile.pdf"));
        link.download = 'SanVicente-CitizensCharter.pdf';
        link.click();
    };

    useEffect(() => {
        function handleResize() {
            if (pdfRef.current) {
                setPdfWidth(pdfRef.current.offsetWidth);
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <>
            <style>
                {`
          .react-pdf__Page__annotations.annotationLayer {
            display: none;
          }
          .pdf-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 4px solid #ccc;
            padding: 0; /* Remove padding to match PDF size */
          }
          .pdf-container > div {
            overflow: auto; /* Make the content inside the PDF scrollable */
          }
          .pdf-buttons {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
          }
          .pdf-button {
            background-color: #2D5F2E;
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 5px 15px;
            margin: 0 5px;
            cursor: pointer;
          }
          .page-navigation {
            display: flex;
            align-items: center;
          }
          .page-input {
            width: 50px;
            margin: 0 10px;
            padding: 4px;
          }
        `}
            </style>
            <Banner
                bannerType="common"
                searchBar={true}
                breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}
            >
                <p>Citizen's Charter</p>
            </Banner>
            <div className="mx-auto max-w-4xl px-2 sm:px-6 lg:px-8 m-5 block grow">
                <div className="pdf-container w-full" ref={pdfRef}>

                    <Document file={view[pageNumber - 1]?.pdfView} onLoadSuccess={onDocumentLoadSuccess} className={'border-4'}>
                        <Page pageNumber={pageNumber} renderTextLayer={false} width={pdfWidth} />
                    </Document>
                </div>
                <div className="pdf-buttons">
                    <button onClick={handlePreviousPage} disabled={pageNumber === 1} className="pdf-button">
                        Previous
                    </button>
                    <span className="mx-2">
                        Page {pageNumber} of {numPages}
                    </span>
                    <button onClick={handleNextPage} disabled={pageNumber === numPages} className="pdf-button">
                        Next
                    </button>
                </div>

                <div className='flex justify-between mt-20' >
                    <div className='page-navigation'>
                        <span>Go to Page: </span>
                        <input
                            type="text"
                            className="page-input"
                            placeholder="Page"
                            value={inputPage}
                            onChange={(e) => {

                                const numericInput = e.target.value.replace(/[^0-9]/g, '');
                                setInputPage(numericInput);
                            }}
                        />
                        <button onClick={handleGoToPage} className="pdf-button">
                            Go
                        </button>

                        {invalidInput && <span style={{ color: 'red' }}>Invalid input</span>}
                        {pageExceedsTotal && <span style={{ color: 'red' }}>Page exceeded</span>}

                    </div>
                    <div>
                        <button onClick={downloadPdf} className="cursor-pointer ml-3 bg-lgu-green text-lgu-lime hover:bg-lime-900 font-bold py-2 px-4 rounded">
                            Download
                        </button>
                    </div>

                </div>
            </div>
            <BackToTop />
        </>
    );
}
