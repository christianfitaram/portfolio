import React from "react";
import Card from 'react-bootstrap/Card';
import mongodblogo from "../assets/img/mongodbinc_logo.jpeg";
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";
export const Education = () => {
    return (
        <section className="education" id="education">
            <Container>
                <Row>
                    <Col>
                        <Card data-bs-theme="dark">
                            <Card.Header><h2><strong>Education</strong></h2></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        {' '}
                                        Degree in Development of Multiplatform Applications.{' '}
                                    </p>
                                    <div className="blockquote-footer">
                                        Institut Nicolau Copèrnic <cite title="Source Title">(09/2023 - currently enrolled)</cite>
                                    </div>
                                    <p>
                                        {' '}
                                        .NET Framework & C#{' '}
                                    </p>
                                    <div className="blockquote-footer">
                                        EnfocaT Bootcamp <cite title="Source Title">(05/2024 - currently enrolled)</cite>
                                    </div>
                                    <p>
                                        {' '}
                                        Fullstack web developer{' '}
                                    </p>
                                    <div className="blockquote-footer">
                                        Codeable <cite title="Source Title">(Graduated in 08/2023)</cite>
                                    </div>
                                </blockquote>
                            </Card.Body>
                        </Card>
                        <Card data-bs-theme="dark">
                            <Card.Header><h2><strong>Certifications</strong></h2></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <div className="wrapper" >
                                        <div className="img-col">
                                            <img src={mongodblogo} alt='java' />
                                        </div>
                                        <div className="info-col">
                                            <p>
                                                {''}
                                                MongoDB C# Developer Path
                                                {''}
                                            </p>
                                            <div className="blockquote-footer">
                                                MongoDB <cite title="Source Title">(Issue Date: 2024-06-11)</cite>
                                            </div>
                                            <div className="blockquote-footer">
                                                Certification ID: <cite title="Source Title">MDBs334b1eoxu</cite>
                                            </div>
                                            <Button variant="outline-light"  onClick={() => window.open(
                                            "https://learn.mongodb.com/c/ZNlzvcCPT4qUCbzxJzYkzA", "_blank")}>See Certification</Button>
                                        </div>
                                    </div>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Education;