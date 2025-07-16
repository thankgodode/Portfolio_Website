import  "../css/DropMail.css"
import closeBtn from "../../assets/close.png"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import whatsapp from "../../assets/whatsapp.png"
import twitter from "../../assets/twitter.png"
import yelloLogo from "../../assets/white.svg"

import { Link } from "react-router-dom"
import transition from "../../transition"

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
    
function DropMail() {
    const [sendValue, setSendvalue] = useState("Send")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    

    const form = useRef()

    const sendEmail = async (e) => {
        e.preventDefault()

        try {
            setSendvalue("Sending...")
            const request = await emailjs.sendForm("service_0nxx29b", "template_t04xojm", form.current, {
                publicKey:"e-k4uNfxxW5oi5yKS"
            })

            setTimeout(() => {
                setSendvalue("Send")
            }, 1000)
            
            setSendvalue("Sent!")
            setName("")
            setEmail("")
            setMessage("")

            console.log(request)
            console.log("Success!")
        } catch (error) {
            console.log("Failed", error)
            setTimeout(() => {
                setSendvalue("Send")
            }, 1000);

            setSendvalue("Error...")
        }
        // emailjs.sendForm("service_0nxx29b", "template_t04xojm", form.current, {
        //     publicKey:"e-k4uNfxxW5oi5yKS"
        // }).then(() => {
        //     console.log("Success!")
        // }, (error) => {
        //     console.log("Failed...", error)
        // })
    }

    return (
        <>
            <section className="drop-mail">
                <Link to="/"><img src={closeBtn} alt="close" className="closeBtn"/></Link>
                <h1 className="title">DROP A MAIL</h1>
                <div className="form-wrapper">
                    <form ref={form} onSubmit={sendEmail}>
                        <div>
                            <label for="name">Name</label><br/>
                            <input onChange={(e) => setName(e.target.value)}type="text" id="name" name="from_name" value={name} required/>
                        </div><br/>
                        <div>
                            <label for="email">Email</label><br/>
                            <input onChange={(e) => setEmail(e.target.email)}type="email" id="email" name="from_email" value={email} required/>
                        </div><br/>
                        <div>
                            <label for="message">Message</label><br/>
                            <textarea onChange={(e) => setMessage(e.target.value)} id="message" name="message" message={message} value={message} required/>
                        </div><br/>
                        <button className="submit-form" type="submit">{sendValue}</button>
                    </form>
                    <div className="contact">
                        <a href="https://facebook.com/thankgood.danielode/" target="_blank"><img src={facebook} alt="Facebook"/></a>
                        <a href="https://instagram.com/danielodethankgod/" target="_blank"><img src={instagram} alt="Instagram"/></a>
                        <a href="https://x.com/devdtech01?t=CcXauc5OleNv57rzlTrgw&s=35" target="_blank"><img src={twitter} alt="X"/></a>
                    </div>
                </div>
                <img src={yelloLogo} className="drop-mail-bgLogo"/>
            </section>
        </>
    )
}

export default (DropMail);