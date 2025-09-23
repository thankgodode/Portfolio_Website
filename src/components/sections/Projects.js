import "../css/Project.css"
import closeBtn from "../../assets/close.png"
import yelloLogo from "../../assets/white.svg"
import data from "../../data/projects_info"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaTimes } from "react-icons/fa"


function Projects() {
    const [category, setCategory] = useState("all")
    const [projectInfo, setProjectInfo] = useState(data)

    function previewProjects(e) {
        const categories = document.querySelectorAll("li");

        categories.forEach((el, i) => {
            el.classList.remove("show")
            if (e.target.textContent == el.textContent) {
                el.classList.add("show")
            }
        })
        setCategory(e.target.textContent.toLowerCase())
    }

    return (
        <>  
            <section className="projects-section">
                <Link to="/"><FaTimes size={24} className="closeBtn" color="red"/></Link>
                <h1 className="title">Projects Done</h1>
                <p>Checkout some projects I've worked on!</p>
                <div className="projects">
                    <ul>
                        <li className="show" onClick={previewProjects}><strong>All</strong></li>
                        <li className="" onClick={previewProjects}><strong>App</strong></li>
                        <li className="" onClick={previewProjects}><strong>Graphics</strong></li>
                        <li onClick={previewProjects}><strong>UI/UX</strong></li>
                    </ul>
                    <div className="preview">
                        {
                            projectInfo.filter((el, i) => el.category == category).map((el, i) => {
                                return  (
                                    <div className="item" key={i}>
                                        <div className="project-image" alt="Project Image"
                                            style={{
                                                backgroundImage: `url(${el.image})`,
                                                backgroundSize: 'contain',
                                                backgroundPosition: 'center',
                                                height: '200px',
                                                width: '200px',
                                                marginBottom: '1rem',
                                                color: 'white',
                                                
                                                backgroundRepeat: "no-repeat",
                                                // position:'absolute'
                                            }}>
                                        </div>
                                        <div className="text">
                                           <h3>{el.info}</h3>
                                            <label><a href={el.link} className="link" target="_blank">Link</a></label>
                                        </div>
                                   </div>
                                )
                            })
                        }
                        {category == "all" && 
                            data.map((el, i) => {
                                return  (
                                    <div className="item" key={i}>
                                        <div className="project-image"
                                            style={{
                                                backgroundImage: `url(${el.image})`,
                                                backgroundSize: 'contain',
                                                backgroundPosition: 'center',
                                                height: '200px',
                                                width: '200px',
                                                marginBottom: '1rem',
                                                color: 'white',
                                                
                                                backgroundRepeat: "no-repeat",
                                                // position:'absolute'
                                            }}>
                                        </div>
                                        <div className="text">
                                           <h3>{el.info}</h3>
                                            <label><a href={el.link} className="link">Link</a></label>
                                        </div>
                                   </div>
                                )
                            })
                        }
                    </div>
                </div>
                <img src={yelloLogo} alt="Bg logo" className="projects-bgLogo" style={{zIndex:-1}} />
                <div className="yellow"></div>
            </section>
        </>
    )    
}

export default Projects