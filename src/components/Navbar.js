import { Link } from "react-scroll"

export default function Navbar() {
    return (
        <nav className="nav">
        <a href="/" className="site-title">
        Annual Research Review 2022
        </a>
        <ul>
            <li className="active"> 
                <Link to="home" spy={true} smooth={true} offset={50} duration={500} >Welcome</Link>
            </li>
            <li className="active">
                <Link to="flip" spy={true} smooth={true} offset={50} duration={500}>Read Online</Link>
            </li>
            <li className="active"> 
                <Link to="down" spy={true} smooth={true} offset={50} duration={500} >Downloads</Link>
            </li>
            {/* <li className="active">
                <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact Us</Link>
            </li> */}
        </ul>

        </nav>
    )
}