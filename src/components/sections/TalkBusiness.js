import "../css/TalkBusiness.css"
import fiverr from "../../assets/fiverr.png"
import upwork from "../../assets/upwork.png"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import twitter from "../../assets/twitter.png"
import yelloLogo from "../../assets/white.svg"

import { Link } from "react-router-dom"
import transition from "../../transition"
import { FaTimes, FaFacebook,FaTwitter, FaInstagram,FaGithub} from "react-icons/fa"

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
                        <FaTwitter size={24} cursor={"pointer"}>
                           <a href="https://x.com/devdtech01?t=CcXauc5OleNv57rzlTrgw&s=35" target="_blank"/>
                        </FaTwitter>
                        <FaGithub size={24} cursor={"pointer"}>
                            <a href="https://github.com/thankgodode/" target="_blank"/>
                        </FaGithub>
                        <FaFacebook size={24} cursor={"pointer"}>
                            <a href="https://facebook.com/thankgood.danielode/" target="_blank"/>
                        </FaFacebook>
                        <FaInstagram size={24} cursor={"pointer"}>
                            <a href="https://instagram.com/danielodethankgod/" target="_blank"/>
                        </FaInstagram>
                    </div>
                </div>
                <img src={yelloLogo} alt="bg image" className="talk-business-bgLogo"/>
            </section>
        </>
    )
}

export default transition(TalkBusiness)