import React from "react";
import riverBoatPic from '../assets/BoatsRisingSun.jpg';
import { useState } from "react";
import {Document, Page, pdfjs} from 'react-pdf';
import churchHistoryPDF from '../assets/HistoryOfTheChurch.pdf';
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();




function AboutPage()
{

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages})
    {
        setNumPages(numPages);
        console.log(numPages);
    }
  const goToNextPage = () => {
        setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, numPages));
      };

      // Function to navigate to the previous page
      const goToPreviousPage = () => {
        setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
      };



    return(
        <div>
            <Document file={churchHistoryPDF} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber}/>
            </Document>
            <p>Page {pageNumber} of {numPages}</p>  
                 <div>
            <button onClick={goToPreviousPage} disabled={pageNumber <= 1}>
              Previous
            </button>
            <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
              Next
            </button>
          </div>
        </div>
    )

}

export default AboutPage;