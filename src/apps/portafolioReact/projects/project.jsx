/* version template_componentHeader_v.0.5
# Component (user guide)

# Project
	
## Description  
	
The Project component displays information about a single project. 
It receives a projectObject prop, which contains details of the project such as name, 
organization, description, technologies used, and links.

## Category   
	
[Visual]  

## Live demo 
	
[GithubPage](https://leonelvalencia.github.io/portafolio)

## Usage 
```javascript	
<Project projectObject={projectData} />
```

## Props 

|   Attribute   |  Type  | Default |                        Description                           |
| ------------- | ------ | ------- | ------------------------------------------------------------ |
| projectObject | Object |    {}   | An object containing details of the project to be displayed. |

## Exception

__Category: [Message]__
[Description of the exception (if necessary)]
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

[react-icons/ai](https://react-icons.github.io/react-icons/) It is imported to use the AiFillGithub icon for the GitHub link.
[react-icons/tb](https://react-icons.github.io/react-icons/) It is imported to use the TbWorldWww icon for the web link.
[./project.css] It is imported to apply styling to the Project component.

## States
	
| Property | Value | Description |
| -------- | ----- | ----------- |
|          |       |             |

## Hooks
|  Name  | Description |  Syntax  | Additional Notes or References | 
| ------ | ----------- | -------- | ------------------------------ |
|        |             |          |                                |

*/
import { useState, useRef, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { AiFillGithub } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import './project.css'

export default function Project({projectObject = {}}) {
    const [expanded, setExpanded] = useState(false);
    const [overflow, setOverflow] = useState(false);
    const contentRef = useRef(null);
    
    // Check if content overflows
    useEffect(() => {
        if (contentRef.current) {
            const isOverflowing = contentRef.current.scrollHeight > contentRef.current.clientHeight;
            setOverflow(isOverflowing);
        }
    }, [projectObject]);
    /**
     * List of technologies used in the proyecto.
     * @type {Array.<string>}
     * @name listTechnologies
     */
    let listTechnologies = projectObject.technologies.map((tech) =>
        <li key={tech}>{tech}</li>
    );
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className="project">
            <div className="image-container">
                <Card.Img src={projectObject.images[0].url} alt={projectObject.images[0].alt} />
            </div>
            <Row className={`infoProject ${expanded ? 'expanded' : ''}`}>
                <div className="info-content" ref={contentRef}>
                    <h3>{projectObject.name}</h3>
                    <h4>{projectObject.organization}</h4>
                    <span>{projectObject.description}</span>
                    <div className="technologies">
                        <span>Skills:</span>
                        <ul>{listTechnologies}</ul>
                    </div>
                    {projectObject.urls &&
                        <div className="links">
                            <span>Links:</span>
                            {projectObject.urls.github && <a href={projectObject.urls.github}><AiFillGithub/></a>}
                            {projectObject.urls.web && <a href={projectObject.urls.web}><TbWorldWww/></a>}
                        </div>
                    }
                </div>
                {overflow && (
                    <Button 
                        className="read-more-btn" 
                        variant="link" 
                        onClick={toggleExpanded}
                    >
                        {expanded ? 'Show less' : 'Read more'}
                    </Button>
                )}
            </Row>
        </Card>
    )
}