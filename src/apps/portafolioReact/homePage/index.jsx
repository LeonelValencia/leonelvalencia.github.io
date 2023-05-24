import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './HomePage.css'

export default function HomePage ({aboutMeObject={},contactList=[],linkFormContact=''}) {
    return ( 
        <div className='homePage' id='home'>
            <div className="avatarName">
                <img src={aboutMeObject.url_avatar} alt="avatar" />
                <h2>Hola soy {aboutMeObject.nombre}</h2>
            </div>
            <h3>{aboutMeObject.acercaDe}</h3>
            <div className="socialNetwork">
                <a href={contactList[0].url}>
                    <FontAwesomeIcon className='icons' icon={faFacebook} id='facebookIcon'/>
                </a>
                <a href={contactList[1].url}>
                    <FontAwesomeIcon className='icons' icon={faGithub} id='githubIcon'/>
                </a>
                <a href={contactList[2].url}>
                    <FontAwesomeIcon className='icons' icon={faLinkedin} id='linkedinIcon'/>
                </a>
            </div>
            <a className='btnContact' href={linkFormContact}>Contactame</a>
        </div>
    );
}