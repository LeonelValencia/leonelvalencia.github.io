import Project from "./project";
import './projects.css'

export default function Projects({projectsList = []}) {
    const listProjects = projectsList.map((project) =>
        <Project key={project.id} projectObject={project}/>
    )
    return(
        <div className="projects" id="projects">
            <h2>Proyectos</h2>
            <div className="infoProject">
                {listProjects}
            </div>
        </div>
    )
}