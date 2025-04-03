import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

function Certifications({certifications}) {
    const listCertification = certifications.map((certification) =>
        <Col key={certification.name} xs={12} md={6} lg={4}>
            <FontAwesomeIcon className='icons' icon={faGraduationCap} />
            <div className="info">
                <h4>{certification.date}</h4>
                <h3>{certification.name}</h3>
                <span>{certification.institution}</span>
                {certification.extra && (
                    <a href={certification.extra}>Ver certificado</a>
                )}
            </div>
        </Col>
    )
    return ( 
        <Container className="certifications" id="certifications">
            <h2>Certificaciones</h2>
            <Row className="infoCertifications">
                {listCertification}
            </Row>
        </Container>
    );
}

export default Certifications;