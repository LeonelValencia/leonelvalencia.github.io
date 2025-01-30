/* version template_componentHeader_v.0.5
# Component (user guide)

# ContactForm
	
## Description  
	
The ContactForm component provides a contact form for users to send messages. 
It uses the emailjs library to send form submissions via email.

## Category   
	
[ Functional ]  

## Live demo 
	
[GithubPage](https://leonelvalencia.github.io/portafolio)

## Usage 

```javascript
<ContactForm />
```

## Props 

| Attribute | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
|           |      |         |             |

## Exception

__Category: [Error]__

## License

MIT License

## Author 
	
RegulonDB Team: 
[Leonel Valencia Estudillo <valenciaestudillo@gmail.com>]
[Gabriel Alarcon carranza <galarcon@ccg.unam.mx>]

# Component (technical guide)

## Component Type 

[ Driver ]
// Driver: It is a Component that controls interactions with users, browser, API requests, manage status or processes as well as logic related to data.

## Dependencies
[Dependencie name] - [ Dependencie details ]
[@emailjs/browser](https://www.emailjs.com/docs/sdk/installation/)	Library for sending emails via the browser using email templates
[./contactForm.css]	CSS file for styling the ContactForm component

## States
	
| Property | Value | Description |
| -------- | ----- | ----------- |
|          |       |             |

## Hooks
|  Name  | Description                                       |  Syntax  | Additional Notes or References              | 
| ------ | ------------------------------------------------- | -------- | ------------------------------------------- |
|  form	 | Reference to the HTML form element for submission |	useRef  | https://es.react.dev/reference/react/useRef |

# Functions description

## sendEmail

__Description:__  

This function is responsible for sending the form submission via email using the emailjs library. 
It retrieves the form data, sends it using the specified service ID, template ID,
and public key, and handles the success or error response.

__Usage:__

```javascript
&sendEmail(event);
```

__Scope: __

Local to the ContactForm component.

__Input Parameter:__  
​__event:__ The form submission event.

__Return:__  
​__None__

​[Description (if necessary)]

*/
import React, { useRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './contactForm.css'

export default function ContactForm() {
    const form = useRef();
    const SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID
    const TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID
    const PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY

    /**
     * Send the form submission via email using the emailjs library.
     * @param {Event} e - The form submission event.
     * @throws {Error} If there is an error sending the email.
     * @returns {void}
     */
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            form.current.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <Container className="contactForm" id='contact'>
            <h2>Contactate conmigo</h2>
            <h3>¡Hablemos, estoy abierto a trabajar! 👋</h3>
            <form ref={form} onSubmit={sendEmail}>
                <Row xs={12} md={12} lg={12}>
                    <input type="text" name="user_name" placeholder="¿Cómo te llamas?" className='txtPersonal' required/>
                    <input type="email" name="user_email" placeholder="¿Cuál es tu correo electrónico?" className='txtPersonal' required/>
                </Row>
                <Row>
                    <textarea name="message" id="mensaje" rows="10" placeholder="Escribe tu mensaje..." required></textarea>
                </Row>
                <input type="submit" value="Enviar mensaje" className='btnEnviar'/>
            </form>
        </Container>
    )
}