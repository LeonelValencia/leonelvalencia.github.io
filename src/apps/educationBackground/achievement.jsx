import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import './achievement.css'

export function Achievement({educationObject}){
    
    return (
        <div className="achievement">
            <FontAwesomeIcon className='icons' icon={faGraduationCap} />
            <div className="info">
                <h4>{educationObject.date}</h4>
                <h3>{educationObject.name}</h3>
                <span>{educationObject.institution}</span>
                <span>{educationObject.extra}</span>
            </div>
        </div>
    )
}