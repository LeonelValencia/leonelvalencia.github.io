/* version template_componentHeader_v.0.5
# Component (user guide)

# EducationBackground
	
## Description  
	
The EducationBackground component displays a list of educational achievements. 
It receives an array of educations as a prop, which contains information about 
each education item.

## Category   
	
[Structural]  

## Live demo 
	
[GithubPage](https://leonelvalencia.github.io/portafolio)

## Usage 
```javascript	
<EducationBackground educations={educationsArray} />
```

## Props 

| Attribute  | Type  | Default |                     Description                            |
| ---------- | ----- | ------- | ---------------------------------------------------------- |
| educations | Array |   []    | An array of objects representing educational achievements. |

## Exception

__Category: [Error, Warning or Message]__
[Description of the exception (if necessary)]

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

Achievement component: It is imported from "./achievement" and is used to render individual educational achievements.
"./educationBackground.css": It is imported to apply styling to the EducationBackground component.

## States
	
| Property | Value | Description |
| -------- | ----- | ----------- |
|          |       |             |

## Hooks
|  Name  | Description |  Syntax  | Additional Notes or References | 
| ------ | ----------- | -------- | ------------------------------ |
|        |             |          |                                |

*/

import { Achievement } from "./achievement"
import './educationBackground.css'

export default function EducationBackground({educations}){
    /**
     * List of components Achievements used in the EducationBackground's component.
     * @type {Array.<Achievement>}
     * @name listEducations
     * @constant
     */
    const listEducations = educations.map((education) =>
        <Achievement key={education.name} educationObject={education}/>
    )
    return(
        <div className="educationBackground" id="education">
            <h2>Educación</h2>
            <div className="infoEducation">
                {listEducations}
            </div>
        </div>
    )
}