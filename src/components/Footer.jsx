import { Container, Col, Row } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return(
        <footer>
            <Container>
                <Row className="align-item-center">
                    <Col sm={12} className="text-center">
                        <p>Made with ❤️ by me in Barcelona</p>
                        <p>There is no CopyRight. Do as you please.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;