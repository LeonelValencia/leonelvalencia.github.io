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

import Technology from "./Technology";
import './skills.css'

export default function Skills({knowledgeList=[]}) {
    const listtechnologies = knowledgeList.map((technology) =>
        <Technology key={technology.technology} technologyObject={technology}/>
    )
    return(
        <div className="tecnicalSkills" id="tecnicalSkills">
            <h2>Habilidades Tecnicas</h2>
            <div className="infoSkills">
                {listtechnologies}
            </div>
        </div>
    )
}