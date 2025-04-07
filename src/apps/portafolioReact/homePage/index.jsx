/* version template_componentHeader_v.0.5
# Component (user guide)

# HomePage
	
## Description  
	
The HomePage component is responsible for rendering the home page section of the application. 
It displays the user's avatar, name, a brief description, social network icons,
and a contact button.

## Category   
	
[ Visual ]  

## Live demo 
	
[GithubPage](https://leonelvalencia.github.io/portafolio)

## Usage 
	
<HomePage aboutMeObject={} contactList={} linkFormContact='' />

## Props 

|    Attribute    |  Type  | Default | Description                                        |
| --------------- | ------ | ------- | -------------------------------------------------- |
|  aboutMeObject  | Object |   {}	 | An object containing information about the user    |
|   contactList	  | Array  |   [] 	 | An array of objects containing contact information |
| linkFormContact |	string |   '' 	 | The URL of the contact form or contact page        |

## Exception

__Category: [Error, Warning or Message]__
No exceptions.

## License

MIT License

## Author 
	
RegulonDB Team: 
[Leonel Valencia Estudillo <valenciaestudillo@gmail.com>]
[Gabriel Alarcon carranza <galarcon@ccg.unam.mx>]

# Component (technical guide)

## Component Type 

[ Visual ]
// Visual: This component will take care of the structure and styles of our application.

## Dependencies
[Dependencie name] - [ Dependencie details ]
[@fortawesome/react-fontawesome](https://fontawesome.com/docs/web/use-with/react/)	Library for using FontAwesome icons in React
[@fortawesome/free-brands-svg-icons](https://fontawesome.com/docs/web/use-with/react/)	Free FontAwesome icons for social media platforms
['./HomePage.css']	CSS file for styling the HomePage component

## States
	
| Property | Value | Description |
| -------- | ----- | ----------- |
|          |       |             |

## Hooks
|  Name  | Description |  Syntax  | Additional Notes or References | 
| ------ | ----------- | -------- | ------------------------------ |
|        |             |          |                                |

*/
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './HomePage.css'

export default function HomePage ({aboutMeObject={},contacts={},linkFormContact=''}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                (prevIndex + 1) % aboutMeObject.roles.length
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [aboutMeObject.roles.length]);
    
    return ( 
        <Container className='homePage' id='home'>
            <div className="avatarName">
                <img src={aboutMeObject.url_avatar} alt="avatar" />
                <h2>{aboutMeObject.nombre}</h2>
            </div>
            <h3>{aboutMeObject.roles[currentIndex]}</h3>
            <p>{aboutMeObject.about}</p>
            <div className="socialNetwork">
                <a href={contacts.linkedin.url}>
                    <FontAwesomeIcon className='icons' icon={faLinkedin} id='linkedinIcon'/>
                </a>
                <a href={contacts.github.url}>
                    <FontAwesomeIcon className='icons' icon={faGithub} id='githubIcon'/>
                </a>
                {contacts.tableau &&
                    <a href={contacts.tableau.url}>
                        <img src={contacts.tableau.icon} alt="tableau" />
                    </a>
                }
                {contacts.huggingface &&
                    <a href={contacts.huggingface.url}>
                        <img src={contacts.huggingface.icon} alt="huggingface" />
                    </a>
                }
            </div>
            <a className='btnContact' href={linkFormContact}>Contactame</a>
        </Container>
    );
}