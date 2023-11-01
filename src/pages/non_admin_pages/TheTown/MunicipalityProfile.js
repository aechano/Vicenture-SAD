import React, { useRef, useState, useEffect } from 'react';
import Banner from '../../../components/Banner';
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';
import { Document, Page, pdfjs } from 'react-pdf';
import {RiArrowLeftCircleFill, RiArrowRightCircleFill} from 'react-icons/ri';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function MunicipalityProfile() {

  var view = [
    {
      head: "Municipality Profile",
      pdfView: require("../../../res/pdf/MC.pdf"),
    },
    {
      head: "Sample PDF",
      pdfView: require("../../../res/pdf/sample.pdf"),
    }
  ];

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

  return (
    <>
      <style>
        {`
          .react-pdf__Page__annotations.annotationLayer {
            display: none;
          }
        `}
      </style>
      <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
        <p>Municipality Profile</p>
      </Banner>

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
        <div className='block md:flex space-x-5'>
          <div className="w-full bg-lgu-yellow p-4">
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
          <div className='block'>
            {selectedContent && (
              <>
                <h1 className='text-left pb-5 text-2xl font-bold'>{selectedContent.head}</h1>
                <div className='flex justify-end'>
                  <Document file={selectedContent.pdfView} onLoadSuccess={onDocumentLoadSuccess} className="max-w-full max-h-[1000px] w-auto h-full">
                    <Page pageNumber={pageNumber} renderTextLayer={false} />
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
                    <span className='text-2xl'><RiArrowLeftCircleFill/></span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      changePageNext();
                    }}
                    disabled={pageNumber === numPages}
                    className={`cursor-pointer ${pageNumber === numPages ? 'text-gray-400' : ''}`}
                  >
                    <span className='text-2xl'><RiArrowRightCircleFill/></span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
