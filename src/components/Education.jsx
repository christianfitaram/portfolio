import React from "react";
import Card from 'react-bootstrap/Card';
import mongodblogo from "../assets/img/mongodbinc_logo.jpeg";
import azurebadge from "../assets/img/azure_badge.png";
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
                                        Institut Nicolau Copèrnic <cite title="">(09/2023 - currently enrolled)</cite>
                                    </div>
                                    <p>
                                        {' '}
                                        .NET Framework & C#{' '}
                                    </p>
                                    <div className="blockquote-footer">
                                        EnfocaT Bootcamp <cite title="">(05/2024 - currently enrolled)</cite>
                                    </div>
                                    <p>
                                        {' '}
                                        Fullstack web developer{' '}
                                    </p>
                                    <div className="blockquote-footer">
                                        Codeable <cite title="">(Graduated in 08/2023)</cite>
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
                                            <img src={mongodblogo} alt='mongodb logo' />
                                        </div>
                                        <div className="info-col">
                                            <p>
                                                {''}
                                                MongoDB C# Developer Path
                                                {''}
                                            </p>
                                            <div className="blockquote-footer">
                                                MongoDB <cite title="">(Issue Date: 2024-06-11)</cite>
                                            </div>
                                            <div className="blockquote-footer">
                                                Certification ID: <cite title="Source Title">MDBs334b1eoxu</cite>
                                            </div>
                                            <Button variant="outline-light"  onClick={() => window.open(
                                            "https://learn.mongodb.com/c/ZNlzvcCPT4qUCbzxJzYkzA", "_blank")}>See Certification</Button>
                                        </div>
                                    </div>
                                </blockquote>
                                <blockquote className="blockquote mb-0">
                                    <div className="wrapper" >
                                        <div className="img-col">
                                            <img src={mongodblogo} alt='mongodb logo' />
                                        </div>
                                        <div className="info-col">
                                            <p>
                                                {''}
                                                MongoDB Data Modeling Path
                                                {''}
                                            </p>
                                            <div className="blockquote-footer">
                                                MongoDB <cite title="">(Issue Date: 2024-06-11)</cite>
                                            </div>
                                            <div className="blockquote-footer">
                                                Certification ID: <cite title="">MDBy0i72vcmkp</cite>
                                            </div>
                                            <Button variant="outline-light"  onClick={() => window.open(
                                            "https://learn.mongodb.com/c/wwFMePmATf64iftNY1FoqA", "_blank")}>See Certification</Button>
                                        </div>
                                    </div>
                                </blockquote>
                                <blockquote className="blockquote mb-0">
                                    <div className="wrapper" >
                                        <div className="img-col">
                                            <img src={azurebadge} className="img-col" alt='microsoft azure insignia' width={200} height={200}/>
                                        </div>
                                        <div className="info-col">
                                            <p>
                                                {''}
                                                Microsoft Certified: Azure Fundamentals
                                                {''}
                                            </p>
                                            <div className="blockquote-footer">
                                            Microsoft using Credly <cite title="">(Issue Date: 2024-07-11)</cite>
                                            </div>
                                            <Button variant="outline-light"  onClick={() => window.open(
                                            "https://www.credly.com/badges/c14c74d9-eefe-4a79-93b9-118ccf813147/linked_in_profile", "_blank")}>See Certification</Button>
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