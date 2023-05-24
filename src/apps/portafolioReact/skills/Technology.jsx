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