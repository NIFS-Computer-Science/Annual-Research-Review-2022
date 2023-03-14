import React from "react";
import ReactDOM from "react-dom";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import "../styles.css";
import samplePDF from "../sample.pdf";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const width = 500;
const height = 624;

const Page = React.forwardRef(({ pageNumber }, ref) => {
  return (
    <div ref={ref}>
      <ReactPdfPage pageNumber={pageNumber} width={width} />
    </div>
  );
});

export default function Flipbook() {
  return (
    <div className="flipbookstyle" id="flip">
    <Document file={samplePDF}>
      <HTMLFlipBook width={width} height={height}>
        <Page pageNumber={1} />
        <Page pageNumber={2} />
        <Page pageNumber={3} />
        <Page pageNumber={4} />
      </HTMLFlipBook>
    </Document>
    </div>
  );
}

//ReactDOM.render(<Flipbook />, document.getElementById("app"));
