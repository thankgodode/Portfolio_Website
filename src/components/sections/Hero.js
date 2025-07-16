import Navbar from "../layouts/Navbar";
import "../css/Hero.css"
import run_image from "../../assets/run_logo.png"
import transition from "../../transition";
import bgLogo from "../../assets/bglogo.svg"

function Hero() {

    return (
        <section className="home">
            <Navbar />  
            <figure>
                <div className="wrapper">
                    <div className="right-side">
                        <span className="im">I'm</span>   
                        <h1>Thankgod</h1>
                        <h1>Daniel Ode</h1>
                        <h5>I am your one-stop mobile, web <br/>and desktop app engineer.</h5>
                    </div>
                    <div className="left-side">
                        <img src={run_image} alt="Running image" />
                        {/* <span>Lets get that software up and running!</span> */}
                    </div>
                </div>
            </figure>
            <div className="bg1"></div>
            <img src={bgLogo } className="bg2" />
            <footer>© 2022 All Right Reserved.</footer>
        </section>
    )
}

export default transition(Hero);

