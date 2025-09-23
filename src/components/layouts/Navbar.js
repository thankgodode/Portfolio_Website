import { FaBars,FaTimes } from "react-icons/fa"
import {RiCloseLine} from "react-icons/ri"
import logo from "../../assets/logo.png"
import "../css/Navbar.css"
import "@fontsource/poppins"

import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar() {
    const [show,setShow] = useState(false)


    const showNavbar = () => {
        const nav = document.querySelector("ul")
        setShow(!show)
        
        nav.classList.toggle("show-nav")
        console.log(nav)
        
    }

    return (
        <>
            <header>
                <img src={logo} alt="logo" />
                <ul onClick={showNavbar}>
                    <Link style={{ textDecoration: 'none'}} to="/"><li>Home</li></Link>
                    <Link style={{ textDecoration: 'none'}} to="/about"><li>About Me</li></Link>
                    <Link style={{ textDecoration: 'none'}} to="/projects"><li>Projects</li></Link>
                </ul>
                <Link style={{ textDecoration: 'none' }} to="/drop-mail"><h4>Drop a Mail</h4></Link>
                {/* <div className="hamburger" onClick={showNavbar}></div> */}
                {!show && <FaBars size={24} onClick={showNavbar} style={{ zIndex: 10 }}/>}
                {show && <FaTimes size={24} onClick={showNavbar} style={{ zIndex: 10 }} color="red"/>}
                
            </header>
        </>
    )
}



export default Navbar;