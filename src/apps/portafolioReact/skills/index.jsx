/* version template_componentHeader_v.0.5
# Component (user guide)

# Skills
	
## Description  
	
The Skills component represents a section that displays technical skills. 
It receives a knowledgeList prop, which is an array containing information about 
different technologies.

## Category   
	
[Structural]  

## Live demo 
	
[GithubPage](https://leonelvalencia.github.io/portafolio)

## Usage 
```javascript	
<Skills knowledgeList={skillsData} />
```

## Props 

|   Attribute   | Type  | Default |                   Description                       |
| ------------- | ----- | ------- | --------------------------------------------------- |
| knowledgeList | Array |   []    | An array containing information about technologies. |

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

"./Technology": It is imported to use the Technology component for rendering individual technologies.
"./skills.css": It is imported to apply styling to the Skills component.

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
import Technology from "./Technology";

export default function Skills({knowledgeList=[]}) {
    /**
     * List of components Technology
     * @type {Array.<Achievement>} listtechnologies
     * @constant
     */
    const listtechnologies = knowledgeList.map((technology) =>
        <Col key={technology.technology} xs={6} md={4} lg={2}>
            <Technology key={technology.technology} technologyObject={technology}/>
        </Col>
    )
    return(
        <Container className="tecnicalSkills" id="tecnicalSkills">
            <h2>Habilidades Tecnicas</h2>
            <Row className="infoSkills">
                {listtechnologies}
            </Row>
        </Container>
    )
}