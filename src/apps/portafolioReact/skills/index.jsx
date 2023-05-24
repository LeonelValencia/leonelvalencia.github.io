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