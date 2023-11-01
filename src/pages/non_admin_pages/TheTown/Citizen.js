import React, { useEffect, useRef } from 'react';
import Banner from '../../../components/Banner';
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';
import pdfjsLib from 'pdfjs-dist/build/pdf';


const Citizen = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const initializePdf = async () => {
      try {
        const pdfPath = 'src/res/pdf/sample.pdf';
        const loadingTask = pdfjsLib.getDocument({ url: pdfPath });
        

        const pdfDoc = await loadingTask.promise;
        let currentPage = 1;

        function renderPage(pageNum) {
          pdfDoc.getPage(pageNum).then((page) => {
            const context = canvas.getContext('2d');
            const scale = 1.5;
            const viewport = page.getViewport({ scale });

            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
              canvasContext: context,
              viewport: viewport,
            };

            page.render(renderContext).promise.then(() => {
              if (currentPage < pdfDoc.numPages) {
                renderPage(currentPage + 1);
              }
            });
          });
        }

        renderPage(currentPage);
      } catch (error) {
        console.error('Error loading PDF:', error);
      }
    };

    initializePdf();
  }, []);

  return (
    <>
      <Banner
        bannerType="common"
        searchBar={true}
        breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}
      >
        <p>Citizen's Charter</p>
      </Banner>

      <div className="w-3/4 pr-4 border border-black p-4 mt-20 ml-48 mb-20">
        <canvas ref={canvasRef} width="100%" height="600" title="PDF Viewer" />
      </div>
    </>
  );
}

export default Citizen;
