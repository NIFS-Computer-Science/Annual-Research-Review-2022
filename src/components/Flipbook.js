import React from "react";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import "../styles.css";
import samplePDF from "../Annual Research Review 2021 EN.pdf";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const width = 600;
const height = 850;

const Page = React.forwardRef(({ pageNumber }, ref) => {
  return (
    <div ref={ref}>
      <ReactPdfPage pageNumber={pageNumber} width={width} renderTextLayer={false} />
    </div>
  );
});

export default function Flipbook() {
  return (
    <div className="flipbookstyle" id="flip">
        <Document file={'../Annual Research Review 2021 EN.pdf'}>
          <HTMLFlipBook width={width} height={height}>
            <Page pageNumber={1} />
            <Page pageNumber={2} />
            <Page pageNumber={3} />
            <Page pageNumber={4} />
            <Page pageNumber={5} />
            <Page pageNumber={6} />
            <Page pageNumber={7} />
            <Page pageNumber={8} />
            <Page pageNumber={9} />
            <Page pageNumber={10} />
            <Page pageNumber={11} />
            <Page pageNumber={12} />
            <Page pageNumber={13} />
            <Page pageNumber={14} />
            <Page pageNumber={15} />
            <Page pageNumber={16} />
            <Page pageNumber={17} />
            <Page pageNumber={18} />
            <Page pageNumber={19} />
            <Page pageNumber={20} />
            <Page pageNumber={21} />
            <Page pageNumber={22} />
            <Page pageNumber={23} />
            <Page pageNumber={24} />
            <Page pageNumber={25} />
            <Page pageNumber={26} />
            <Page pageNumber={27} />
            <Page pageNumber={28} />
            <Page pageNumber={29} />
            <Page pageNumber={30} />
            <Page pageNumber={31} />
            <Page pageNumber={32} />
            <Page pageNumber={33} />
            <Page pageNumber={34} />
            <Page pageNumber={35} />
            <Page pageNumber={36} />
            <Page pageNumber={37} />
            <Page pageNumber={38} />
            <Page pageNumber={39} />
            <Page pageNumber={40} />
            <Page pageNumber={41} />
            <Page pageNumber={42} />
            <Page pageNumber={43} />
            <Page pageNumber={44} />
            <Page pageNumber={45} />
            <Page pageNumber={46} />
            <Page pageNumber={47} />
            <Page pageNumber={48} />
            <Page pageNumber={49} />
            <Page pageNumber={50} />
            <Page pageNumber={51} />
            <Page pageNumber={52} />
            <Page pageNumber={53} />
            <Page pageNumber={54} />
            <Page pageNumber={55} />
            <Page pageNumber={56} />
            <Page pageNumber={57} />
            <Page pageNumber={58} />
            <Page pageNumber={59} />
            <Page pageNumber={60} />
            <Page pageNumber={61} />
            <Page pageNumber={62} />
            <Page pageNumber={63} />
            <Page pageNumber={64} />
            <Page pageNumber={65} />
            <Page pageNumber={66} />
            <Page pageNumber={67} />
            <Page pageNumber={68} />
            <Page pageNumber={69} />
            <Page pageNumber={70} />
            <Page pageNumber={71} />
            <Page pageNumber={72} />
            <Page pageNumber={73} />
            <Page pageNumber={74} />
            <Page pageNumber={75} />
            <Page pageNumber={76} />
            <Page pageNumber={77} />
            <Page pageNumber={78} />
            <Page pageNumber={79} />
            <Page pageNumber={80} />
            <Page pageNumber={81} />
            <Page pageNumber={82} />
            <Page pageNumber={83} />
            <Page pageNumber={84} />
            <Page pageNumber={85} />
            <Page pageNumber={86} />
            <Page pageNumber={87} />
            <Page pageNumber={88} />
            <Page pageNumber={89} />
            <Page pageNumber={90} />
            <Page pageNumber={91} />
            <Page pageNumber={92} />
            <Page pageNumber={93} />
            <Page pageNumber={94} />
            <Page pageNumber={95} />
            <Page pageNumber={96} />
            <Page pageNumber={97} />
            <Page pageNumber={98} />
            <Page pageNumber={99} />
            <Page pageNumber={100} />
            <Page pageNumber={101} />
            <Page pageNumber={102} />
            <Page pageNumber={103} />
            <Page pageNumber={104} />
            <Page pageNumber={105} />
            <Page pageNumber={106} />
            <Page pageNumber={107} />
            <Page pageNumber={108} />
            <Page pageNumber={109} />
            <Page pageNumber={110} />
            <Page pageNumber={111} />
            <Page pageNumber={112} />
            <Page pageNumber={113} />
            <Page pageNumber={114} />
            <Page pageNumber={115} />
            <Page pageNumber={116} />
            <Page pageNumber={117} />
            <Page pageNumber={118} />
            <Page pageNumber={119} />
            <Page pageNumber={120} />
            <Page pageNumber={121} />
            <Page pageNumber={122} />
            <Page pageNumber={123} />
            <Page pageNumber={124} />
            <Page pageNumber={125} />
            <Page pageNumber={126} />
            <Page pageNumber={127} />
            <Page pageNumber={128} />
            <Page pageNumber={129} />
            <Page pageNumber={130} />
            <Page pageNumber={131} />
            <Page pageNumber={132} />
            <Page pageNumber={133} />
            <Page pageNumber={134} />
            <Page pageNumber={135} />
            <Page pageNumber={136} />
            <Page pageNumber={137} />
            <Page pageNumber={138} />
            <Page pageNumber={139} />
            <Page pageNumber={140} />
            <Page pageNumber={141} />
            <Page pageNumber={142} />
            <Page pageNumber={143} />
            <Page pageNumber={144} />
            <Page pageNumber={145} />
            <Page pageNumber={146} />
            <Page pageNumber={147} />
            <Page pageNumber={148} />
            <Page pageNumber={149} />
            <Page pageNumber={150} />
            <Page pageNumber={151} />
            <Page pageNumber={152} />
            <Page pageNumber={153} />
            <Page pageNumber={154} />
            <Page pageNumber={155} />
            <Page pageNumber={156} />
            <Page pageNumber={157} />
            <Page pageNumber={158} />
            <Page pageNumber={159} />
            <Page pageNumber={160} />
            <Page pageNumber={161} />
            <Page pageNumber={162} />
            <Page pageNumber={163} />
            <Page pageNumber={164} />
            <Page pageNumber={165} />
            <Page pageNumber={166} />
            <Page pageNumber={167} />
            <Page pageNumber={168} />
            <Page pageNumber={169} />
            <Page pageNumber={170} />
            <Page pageNumber={171} />
            <Page pageNumber={172} />
            <Page pageNumber={173} />
            <Page pageNumber={174} />
            <Page pageNumber={175} />
            <Page pageNumber={176} />
            <Page pageNumber={177} />
            <Page pageNumber={178} />
            <Page pageNumber={179} />
            <Page pageNumber={180} />
            <Page pageNumber={181} />
            <Page pageNumber={182} />
            <Page pageNumber={183} />
            <Page pageNumber={184} />
            <Page pageNumber={185} />
            <Page pageNumber={186} />
            <Page pageNumber={187} />
            <Page pageNumber={188} />
            <Page pageNumber={189} />
            <Page pageNumber={190} />
            <Page pageNumber={191} />
            <Page pageNumber={192} />
            <Page pageNumber={193} />
            <Page pageNumber={194} />
            <Page pageNumber={195} />
            <Page pageNumber={196} />
            <Page pageNumber={197} />
            <Page pageNumber={198} />
            <Page pageNumber={199} />
            <Page pageNumber={200} />
            <Page pageNumber={201} />
            <Page pageNumber={202} />
            <Page pageNumber={203} />
            <Page pageNumber={204} />
            <Page pageNumber={205} />
            <Page pageNumber={206} />
            <Page pageNumber={207} />
            <Page pageNumber={208} />
            <Page pageNumber={209} />
            <Page pageNumber={210} />
            <Page pageNumber={211} />
            <Page pageNumber={212} />
            <Page pageNumber={213} />
            <Page pageNumber={214} />
            <Page pageNumber={215} />
            <Page pageNumber={216} />
            <Page pageNumber={217} />
            <Page pageNumber={218} />
            <Page pageNumber={219} />
            <Page pageNumber={220} />
            <Page pageNumber={221} />


          </HTMLFlipBook>
        </Document>
        {/* <div className="flipbook">
          <p>hello</p>
          </div> */}
    </div>
  );
}


