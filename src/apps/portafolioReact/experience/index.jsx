import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { AiFillGithub } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";

function Experiences({ experiencesList = [] }) {
    const listExperiences = experiencesList.map((experience) => {
        // Mapeo de las tecnologías
        const listTechnologies = experience.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
        ));

        return (
            <Col key={experience.id} xs={12} md={12} lg={6}>
                <Card className="project">
                    <Card.Img src={experience.images[0].url} alt={experience.images[0].alt} />
                    <Row className='infoProject'>
                        <h3>{experience.name}</h3>
                        <h4>{experience.organization}</h4>
                        <span><b>Descripción: </b>{experience.description}</span>
                        <span>Tecnologías usadas:</span>
                        <ul>{listTechnologies}</ul>
                        <div className="links">
                            <span>Links:</span>
                            <a href={experience.urls.github}><AiFillGithub /></a>
                            {experience.urls.web && <a href={experience.urls.web}><TbWorldWww /></a>}
                        </div>
                    </Row>
                </Card>
            </Col>
        );
    });

    return (
        <Container className="experiences" id="experiences">
            <h2>Experiences</h2>
            <Row className="infoExperiences">
                {listExperiences}
            </Row>
        </Container>
    );
}

export default Experiences;