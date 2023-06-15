/* version template_componentHeader_v.0.5
# Component (user guide)

# Technology
	
## Description  
	
The Technology component displays information about a specific technology. 
It receives a technologyObject as a prop, which contains details such as the 
technology's icon URL, name, and score.

## Category   
	
[Visual]  

## Live demo 
	
[GithubPage](https://leonelvalencia.github.io/portafolio)

## Usage 
```javascript	
<Technology technologyObject={technologyObject} />
```

## Props 

|    Attribute     |  Type  | Default |                     Description                        |
| ---------------- | ------ | ------- | ------------------------------------------------------ |
| technologyObject | Object |    {}   | An object containing information about the technology. |

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

[AiFillStar and AiOutlineStar components](https://react-icons.github.io/react-icons/) 
        These components are imported from the "react-icons/ai" package and are used to display star icons.
[./technology.css] It is imported to apply styling to the Technology component.

## States
	
| Property | Value | Description |
| -------- | ----- | ----------- |
|          |       |             |

## Hooks
|  Name  | Description |  Syntax  | Additional Notes or References | 
| ------ | ----------- | -------- | ------------------------------ |
|        |             |          |                                |

*/

import {AiFillStar,AiOutlineStar} from "react-icons/ai";
import './technology.css'

export default function Technology({technologyObject={}}) {
    return (
        <div className='tech'>
            <img src={technologyObject.urlIcon} alt={"logo "+technologyObject.technology} />
            <h3>{technologyObject.technology}</h3>
            {
                [...new Array(5)].map((start,index)=>{
                    return index<technologyObject.score ? <AiFillStar className="icons" key={index.toString()}/> : <AiOutlineStar className="icons" key={(index+5).toString()}/>
                })
            }
        </div>
    )
}