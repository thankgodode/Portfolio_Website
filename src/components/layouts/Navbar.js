import logo from "../../assets/logo.png"
import "../css/Navbar.css"
import "@fontsource/poppins"

import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <header>
                <img src={logo} alt="logo"/>
                <ul>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/"><li>Home</li></Link>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/about"><li>About Me</li></Link>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/projects"><li>Projects</li></Link>
                </ul>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/drop-mail"><h4>Drop a Mail</h4></Link>
            </header>
        </>
    )
}



export default Navbar;