import { Header } from "./components";
import EducationBackground from "./educationBackground";
import data from "./data.json"
import HomePage from "./homePage";
import Skills from "./skills";
import Projects from "./projects";
import ContactForm from "./ContactForm";
import '../index.css'

export default function PortafolioReact(){
    return (
        <div className="portafolio">
            <Header links={data.header.links} logo={data.header.logoURl}/>
            <HomePage aboutMeObject={data.homePage} contactList={data.contact} linkFormContact={data.header.links[4].link}/>
            <EducationBackground educations={data.education}/>
            <Skills knowledgeList={data.skills.conocimientos}/>
            <Projects projectsList={data.projects}/>
            <ContactForm />
        </div>
    )
}