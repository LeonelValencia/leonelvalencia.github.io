/* version template_componentHeader_v.0.5
# Component (user guide)

# PortafolioReact
	
## Description  
	
The PortafolioReact component is the main component of the application. 
It renders a portfolio page with a header, home page section, 
education background section, skills section, projects section, and a contact form.

## Category   
	
[ Structural ]  

## Live demo 
	
[GithubPage](https://leonelvalencia.github.io/portafolio)

## Usage 
	
<PortafolioReact />

## Props 

| Attribute | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| none      |      |         |             |

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

[ Aplication ]

// Aplication: Application: is the main component of a web application or library.

## Dependencies
[Dependencie name] - [ Dependencie details ]
Header - Component for rendering the header section
EducationBackground	- Component for rendering the education background section
data.json - JSON file containing data for rendering various sections
HomePage - Component for rendering the home page section
Skills - Component for rendering the skills section
Projects - Component for rendering the projects section
ContactForm	- Component for rendering the contact form section
index.css - CSS file for styling the PortafolioReact component

## States
	
| Property | Value | Description |
| -------- | ----- | ----------- |
|          |       |             |

## Hooks
|  Name  | Description |  Syntax  | Additional Notes or References | 
| ------ | ----------- | -------- | ------------------------------ |
|        |             |          |                                |

*/

import { Header } from "./components";
import Certifications from "./certifications";
import EducationBackground from "./educationBackground";
import data from "./data.json"
import HomePage from "./homePage";
import Skills from "./skills";
import Projects from "./projects";
import ContactForm from "./ContactForm";
import './index.css'

export default function PortafolioReact(){
    return (
        <div className="portafolio">
            <Header links={data.header.links} logo={data.header.logoURl}/>
            <HomePage aboutMeObject={data.homePage} contactList={data.contact} linkFormContact={data.header.links[4].link}/>
            <EducationBackground educations={data.education}/>
            <Skills knowledgeList={data.skills.conocimientos}/>
            <Projects projectsList={data.projects}/>
            <Certifications certifications={data.certifications}/>
            <ContactForm />
        </div>
    )
}