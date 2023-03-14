import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Downloads() {


    return (
    <div className='download' id='down'> 
    <h3> Annual Research Review PDFs</h3>
  

        <div className='downpdf'>
            <a className='pdfs' href="Annual Research Review 2021 EN.pdf" download="Annual Research Review 2021 EN.pdf">
                <button className='down_btn'>2021</button>
            </a>
            <a className='pdfs' href="Annual Research Review 2020 EN.pdf" download="Annual Research Review 2020 EN.pdf">
                <button className='down_btn'>2020</button>
            </a>
            <a className='pdfs' href="Annual Research Review 2019 EN.pdf" download="Annual Research Review 2019 EN.pdf">
                <button className='down_btn'>2019</button>
            </a>
            <a className='pdfs' href="Annual Research Review 2018 EN.pdf" download="Annual Research Review 2018 EN.pdf">
                <button className='down_btn'>2018</button>
            </a>
            <a className='pdfs' href="Annual Research Review 2017 EN.pdf" download="Annual Research Review 2017 EN.pdf">
                <button className='down_btn'>2017</button>
            </a>

        </div>

    </div>
    )
}
