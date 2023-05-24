import { AiFillGithub } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import './project.css'

export default function Project({projectObject = {}}) {
    let listTechnologies = projectObject.technologies.map((tech) =>
        <li key={tech}>{tech}</li>
    )
    return (
        <div className="project">
            <img src={projectObject.images[0].url} alt={projectObject.images[0].alt} />
            <div className='infoProject'>
                <h3>{projectObject.name}</h3>
                <h4>{projectObject.organization}</h4>
                <span><b>Descripción: </b>{projectObject.description}</span>
                <span>Tecnologias usadas:</span>
                <ul>{listTechnologies}</ul>
                <div className="links">
                    <span>Links:</span>
                    <a href={projectObject.urls.github}><AiFillGithub/></a>
                    {projectObject.urls.web && <a href={projectObject.urls.web}><TbWorldWww/></a>}
                </div>
            </div>
        </div>
    )
}