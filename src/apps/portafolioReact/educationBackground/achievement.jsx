/* version template_componentHeader_v.0.5
# Component (user guide)

# Achievement
	
## Description  
	
The Achievement component represents an educational achievement item. 
It receives an educationObject as a prop, which contains information about the 
achievement.

## Category   
	
[Visual]  

## Live demo 
	
[GithubPage](https://leonelvalencia.github.io/portafolio)

## Usage 
```javascript	
<Achievement educationObject={educationData} />
```

## Props 

|    Attribute    |  Type  | Default |                            Description                              |
| --------------- | ------ | ------- | ------------------------------------------------------------------- |
| educationObject | Object |    {}   | An object containing information about the educational achievement. |

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

[@fortawesome/react-fontawesome](https://fontawesome.com/docs/web/use-with/react/) It is imported to use the FontAwesomeIcon component for rendering the graduation cap icon.
[@fortawesome/free-solid-svg-icons](https://fontawesome.com/icons/graduation-cap?f=classic&s=solid) It is imported to use the faGraduationCap icon.
"./achievement.css" It is imported to apply styling to the Achievement component.

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
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import './achievement.css'

export function Achievement({educationObject}) {
    console.log(educationObject);
    return (
        <div className="achievement">
            <FontAwesomeIcon className='icons' icon={faGraduationCap} />
            <div className="info">
                <h4>{educationObject.date}</h4>
                <h3>{educationObject.name}</h3>
                <span>{educationObject.institution}</span>
                {educationObject.extra && (
                    <a href={educationObject.extra}>Ver certificado</a>
                )}
            </div>
        </div>
    )
}