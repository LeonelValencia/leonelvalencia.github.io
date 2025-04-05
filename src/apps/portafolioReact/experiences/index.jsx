import { Container, Row } from 'react-bootstrap';
import './index.css';

function Experiences({experiences}) {
    return (  
        <Container id="experiences">
            <h2>Experiencia profesional</h2>
            {experiences.map((experience) => (
                <Row className="experience" key={experience.id}>
                    <h3>{experience.position}</h3>
                    <h4 id="organization">{experience.organization}</h4>
                    <h5>{experience.date}</h5>
                    <div>
                        <ul>
                            {experience.responsabilities.map((responsability) => (
                                <li key={responsability}>{responsability}</li>
                            ))}
                        </ul>
                    </div>
                </Row>
                ))   
            }
        </Container>
    );
}

export default Experiences;