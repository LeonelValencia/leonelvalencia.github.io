import { Achievement } from "./achievement"
import './educationBackground.css'

export default function EducationBackground({educations}){
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