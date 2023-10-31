import React, { useState } from 'react';
import Banner from '../../../components/Banner';
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function MunicipalityProfile() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
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
        <Document file={require("../../../res/pdf/MC.pdf")} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} renderTextLayer={false} />
        </Document>
      </div>
    </>
  );
}
