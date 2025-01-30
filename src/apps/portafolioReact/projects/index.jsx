/* version template_componentHeader_v.0.5
# Component (user guide)

# Projects
	
## Description  
	
The Projects component displays a list of projects. It receives a projectsList prop, 
which is an array of project objects containing information about each project.

## Category   
	
[Structural]  

## Live demo 
	
[GithubPage](https://leonelvalencia.github.io/portafolio)

## Usage 
```javascript	
<Projects projectsList={projectsData} />
```

## Props 

|   Attribute  | Type  | Default |                    Description                          |
| ------------ | ----- | ------- | ------------------------------------------------------- |
| projectsList | Array |   []    | An array of project objects containing project details. |

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

"./project": It is imported to use the Project component for rendering each project item.
"./projects.css": It is imported to apply styling to the Projects component.

## States
	
| Property | Value | Description |
| -------- | ----- | ----------- |
|          |       |             |

## Hooks
|  Name  | Description |  Syntax  | Additional Notes or References | 
| ------ | ----------- | -------- | ------------------------------ |
|        |             |          |                                |

*/
import { Container, Row, Col } from 'react-bootstrap';
import Project from "./project";

export default function Projects({projectsList = []}) {
    /**
     * List of components Project
     * @type {Array<Project>} listEducations
     * @constant
     */
    const listProjects = projectsList.map((project) =>
        <Col key={project.id} xs={12} md={12} lg={6}>
            <Project key={project.id} projectObject={project}/>
        </Col>
    )
    return(
        <Container className="projects" id="projects">
            <h2>Proyectos</h2>
            <Row className="infoProject">
                {listProjects}
            </Row>
        </Container>
    )
}