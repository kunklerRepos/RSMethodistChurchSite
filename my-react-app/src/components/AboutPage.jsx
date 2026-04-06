import React from "react";
import { useState } from "react";
import { Document, Page } from 'react-pdf';
import churchHistoryPDF from '../assets/HistoryOfTheChurch.pdf';
import { pdfjs } from 'react-pdf';
import { StyleSheet} from '@react-pdf/renderer';


//import "react-pdf/dist/esm/Page/AnnotationLayer.css";
//import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function AboutPage() {


  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(numPages) {
    setNumPages(numPages);
  }

  const styleSheet = StyleSheet.create({
    page: {
      width : '1200px', 
    },
  document:{
    overflow: 'scroll',
  }})

  return (
    <div>
      <h4>History of the Church</h4>
      <Document style={styleSheet.document} file={churchHistoryPDF} onLoadSuccess={onDocumentLoadSuccess}>
        <Page style={styleSheet.page} pageNumber={pageNumber} />
      </Document> 
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber <= 1}>
          &larr;
        </button>
        <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber >= numPages} style={{marginLeft: '10px'}}>
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default AboutPage;