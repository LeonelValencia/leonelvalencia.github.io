import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactForm.css'

export default function ContactForm() {
    const form = useRef();
    const SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID
    const TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID
    const PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            form.current.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className="contactForm" id='contact'>
            <h2>Contactate conmigo</h2>
            <h3>¡Hablemos, estoy abierto a trabajar! 👋</h3>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="¿Cómo te llamas?" className='txtPersonal' required/>
                <input type="email" name="user_email" placeholder="¿Cuál es tu correo electrónico?" className='txtPersonal' required/>
                <textarea name="message" id="mensaje" cols="30" rows="10" placeholder="Escribe tu mensaje..." required></textarea>
                <input type="submit" value="Enviar mensaje" className='btnEnviar'/>
            </form>
        </div>
    )
}