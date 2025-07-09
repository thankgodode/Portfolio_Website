import skill_icon from "../../assets/skill.png"
import man from "../../assets/man.png"
import { Link } from "react-router-dom";


function Skills() {
    return (
        <>
            <div className="skill-wrapper">
                
                <wrapper>

                    <figcaption>
                        <img src={skill_icon} alt="skill icon" />
                        <h3>SKILLS</h3>
                    </figcaption>
                    <div>
                    <strong style={{color:"#0047FF"}}>Web Dev</strong>
                        <label>HTML, CSS, Javascript, electron, ReactNative...</label>
                    </div>
                    <div>
                        <strong style={{color:"#0047FF"}}>UI/UX Dev</strong>
                        <label>Figma, Adobe XD, CorelDraw...</label>
                    </div>
                    <div>
                        <strong style={{color:"#0047FF"}}>Graphic Design</strong>
                        <label>CorelDraw, Photoshop, <br/> Illustrator</label>
                        </div>
                    <span>Have a job for me? </span><Link to="/talk"><button className="reach-me">Reach me out</button></Link>
                        
                </wrapper>
                <img src={man} alt="Man" className="man"/>

            </div>
        </>
    )
}

export default Skills;