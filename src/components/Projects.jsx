import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import javaicon from "../assets/img/javaicon.svg";
import rubyicon from "../assets/img/ruby.svg";
import jsicon from "../assets/img/javascript.svg";
import reacticon from "../assets/img/react.svg";
import csicon from "../assets/img/csharp.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";
export const Projects = () => {
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>These are some projects that I have been working on my way to get a development degree.</p>
                        <Row>
                            <Col xs={12} md={6} className='margin-bottom-20px'>
                                <Card data-bs-theme="dark">
                                    <Card.Header as="h5">Project #1
                                        <div className='social-icon iconSmall'><img src={javaicon} alt='java' /></div>
                                        <div className='social-icon iconSmall'>   <img src={csicon} alt='csharp' /></div>
                                    </Card.Header>
                                    <Card.Body className='regularText'>
                                        <Card.Title>Hangman</Card.Title>
                                        <Card.Text className='width100 text-align-left'>
                                            The famous "hangman" game developed in Java, designed to be executed on the console.
                                            This was part of an assignment in the first months of school, so the structure and designs are basic. There is also a modularized version in C#.
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => window.open(
                                            "https://github.com/christianfitaram?tab=repositories", "_blank")}>Go to repository</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={12} md={6} className='margin-bottom-20px'>
                                <Card data-bs-theme="dark">
                                    <Card.Header as="h5">Project #2<div className='social-icon iconSmall'><img src={javaicon} alt='java' /></div></Card.Header>
                                    <Card.Body className='regularText'>
                                        <Card.Title>Car shop</Card.Title>
                                        <Card.Text className='width100 text-align-left'>
                                            Also an assignment in the first months of school to use classes, objects, and arrays.
                                            The task was to develop a console-running application for a car shop, on which it is possible to store data on cars, issues, sells, etc.
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => window.open(
                                            "https://github.com/christianfitaram?tab=repositories", "_blank")}>Go to repository</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6} className='margin-bottom-20px'>
                                <Card data-bs-theme="dark">
                                    <Card.Header as="h5">Project #3<div className='social-icon iconSmall'><img src={rubyicon} alt='ruby' /></div></Card.Header>
                                    <Card.Body className='regularText'>
                                        <Card.Title>Trivia game</Card.Title>
                                        <Card.Text className='width100 text-align-left'>
                                            A trivia game designed in Ruby to be run on the console.
                                            It was made using an online API to fetch the trivia questions and possible answers.
                                            It stores in memory the name and score of a participant if they want it to.
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => window.open(
                                            "https://github.com/christianfitaram?tab=repositories", "_blank")}>Go to repository</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={6} className='margin-bottom-20px'>
                                <Card data-bs-theme="dark">
                                    <Card.Header as="h5">Project #4
                                        <div className='social-icon iconSmall'><img src={jsicon} alt='javascript' /></div>
                                        <div className='social-icon iconSmall'><img src={reacticon} alt='javascript' /></div>
                                    </Card.Header>
                                    <Card.Body className='regularText'>
                                        <Card.Title>Portfolio</Card.Title>
                                        <Card.Text className='width100 text-align-left'>
                                            My portfolio was made in react, react-bootstrap, animate.css, nodemailer, and express.
                                            I got inspiration from the philosophy of "less design is the better design" and the said components' official websites.
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => window.open(
                                            "https://github.com/christianfitaram?tab=repositories", "_blank")}>Go to repository</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt=' ' />
        </section>
    )
}

export default Projects;
