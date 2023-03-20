import {pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Downloads() {


    return (
    <div className='download' id='down'> 
    <h3> Download Previous Annual Research Reviews</h3>
  

        <div className='downpdf'>
            <a className='pdfs' href="Annual Research Review 2021 EN.pdf" download="Annual Research Review 2021 EN.pdf">
                <h3 className='down_title'>2021</h3>
                <img className='pdf-thumbnail' src='2021.jpg'/>
                <button className='down_btn'>Download</button>
            </a>
            <a className='pdfs' href="Annual Research Review 2020 EN.pdf" download="Annual Research Review 2020 EN.pdf">
                <h3 className='down_title'>2020</h3>
                <img className='pdf-thumbnail' src='2020.jpg'/>
                <button className='down_btn'>Download</button>
            </a>
            <a className='pdfs' href="Annual Research Review 2019 EN.pdf" download="Annual Research Review 2019 EN.pdf">
                <h3 className='down_title'>2019</h3>
                <img className='pdf-thumbnail' src='2019.jpg'/>
                <button className='down_btn'>Download</button>
            </a>
            <a className='pdfs' href="Annual Research Review 2018 EN.pdf" download="Annual Research Review 2018 EN.pdf">
                <h3 className='down_title'>2018</h3>
                <img className='pdf-thumbnail' src='2018.jpg'/>
                <button className='down_btn'>Download</button>
            </a>
            <a className='pdfs' href="Annual Research Review 2017 EN.pdf" download="Annual Research Review 2017 EN.pdf">
                <h3 className='down_title'>2017</h3>
                <img className='pdf-thumbnail' src='2017.jpg'/>
                <button className='down_btn'>Download</button>
            </a>

        </div>

    </div>
    )
}
