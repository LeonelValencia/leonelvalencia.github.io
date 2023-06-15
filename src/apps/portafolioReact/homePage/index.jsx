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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './HomePage.css'

export default function HomePage ({aboutMeObject={},contactList=[],linkFormContact=''}) {
    return ( 
        <div className='homePage' id='home'>
            <div className="avatarName">
                <img src={aboutMeObject.url_avatar} alt="avatar" />
                <h2>Hola soy {aboutMeObject.nombre}</h2>
            </div>
            <h3>{aboutMeObject.acercaDe}</h3>
            <div className="socialNetwork">
                <a href={contactList[0].url}>
                    <FontAwesomeIcon className='icons' icon={faFacebook} id='facebookIcon'/>
                </a>
                <a href={contactList[1].url}>
                    <FontAwesomeIcon className='icons' icon={faGithub} id='githubIcon'/>
                </a>
                <a href={contactList[2].url}>
                    <FontAwesomeIcon className='icons' icon={faLinkedin} id='linkedinIcon'/>
                </a>
            </div>
            <a className='btnContact' href={linkFormContact}>Contactame</a>
        </div>
    );
}