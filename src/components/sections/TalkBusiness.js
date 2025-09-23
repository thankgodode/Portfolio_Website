import "../css/TalkBusiness.css"
import fiverr from "../../assets/fiverr.png"
import upwork from "../../assets/upwork.png"
import closeBtn from "../../assets/close.png"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import whatsapp from "../../assets/whatsapp.png"
import twitter from "../../assets/twitter.png"
import yelloLogo from "../../assets/white.svg"

import { Link } from "react-router-dom"
import transition from "../../transition"
import { FaTimes } from "react-icons/fa"

function TalkBusiness() {
    return (
        <>
            <section className="talk-business">
                <Link to="/"><FaTimes size={24} className="closeBtn" color="red"/></Link>
                <div className="freelance">
                    <h1>Lets talk Business</h1><br/>
                    <a href="https://fiverr.com/s/Gza8XIL" target="_blank"><img src={fiverr} className="fiverr"/></a><br/>
                    <a href="https://upwork.com/freelancers/~01715a0f407718ac4a?mp_source=share" target="_blank"><img src={upwork} className="upwork" /></a><br />
                    <hr/>
                    <div className="contact">
                        <a href="https://facebook.com/thankgood.danielode/" target="_blank"><img src={facebook} alt="Facebook"/></a>
                        <a href="https://instagram.com/danielodethankgod/" target="_blank"><img src={instagram} alt="Instagram"/></a>
                        <a href="https://x.com/devdtech01?t=CcXauc5OleNv57rzlTrgw&s=35" target="_blank"><img src={twitter} alt="X"/></a>
                    </div>
                </div>
                <img src={yelloLogo} alt="bg image" className="talk-business-bgLogo"/>
            </section>
        </>
    )
}

export default transition(TalkBusiness)