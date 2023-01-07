import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import csa from "../../statics/images/certs/csa.pdf";
import "../../statics/css/certificate/certificate.scss";

// pdfjs.GlobalWorkerOptions.workerSrc = 'cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js';

const Certificate = () => {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  React.useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  });
  return (
    <div className="pdf-doc-wrapper">
      <Document file={csa} onLoadSuccess={onDocumentLoadSuccess} id="doc">
        <Page pageNumber={pageNumber} />
      </Document>
      {/* <p>
        Page {pageNumber} of {numPages}
      </p> */}
    </div>
  );
};
export default Certificate;
