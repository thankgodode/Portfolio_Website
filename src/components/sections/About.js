import "../css/About.css"
import Skills from "../layouts/Skills"
import whiteLogo from "../../assets/yellow.svg"
import man from "../../assets/man.png"

import closeBtn from "../../assets/close.png"
import { Link } from "react-router-dom"

function About() {
    return (
        <>
            <section className="about">
                <Link to="/"><img src={closeBtn} alt="close" className="closeBtn"/></Link>
                <div className="yellow">
                    <img src={whiteLogo} alt="logoBg" className="logoBg" />
                </div>
                <h1 className="title"><span style={{color:"#FFCB12"}}>ABOU</span><span style={{color:"white"}}>T ME</span></h1>
                <div className="white">
                    <article>
                        As you already know,<br />
                        my name is <strong style={{color:"#0047FF"}}>Thankgod Daniel Ode.</strong><br/>
                        I am a <strong  style={{color:"#0047FF"}}>software developer</strong> from <strong style={{color:"#0047FF"}}>Nigeria</strong><br/>
                        I like to create web applications that <br/> solves real world problems.
                    </article>
                </div>
                <Skills />
            </section>
        </>
    )
}

export default (About)