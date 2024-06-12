import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import javaicon from "../assets/img/javaicon.svg";
import rubyicon from "../assets/img/ruby.svg";
import csharpicon from "../assets/img/csharp.svg";
import phpincon from "../assets/img/php.svg";
import jsicon from "../assets/img/javascript.svg";
import sqlicon from "../assets/img/sql.svg";
import postgresql from "../assets/img/postgresql-icon.svg";
import { Col, Container, Row } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Skills = () => {
    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="card-pro example-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="inner skill-bx wow zoomIn">
                                <h2>Skills</h2>
                                <p>This is a list of the main programming languages and technologies that I use for application development.<br></br>
                                    You can find the documentation for each one by clicking on them.</p>
                                <Container className='margin-bottom-20px'>
                                    <TrackVisibility>
                                        {({ isVisible }) =>
                                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                                <div className="items">
                                                    <div className='grid-6 item'>
                                                        <div className='VPFeature' onClick={() => window.open(
                                                            "https://docs.oracle.com/en/java/", "_blank")}>
                                                        <article className="box" data-v-12ebaba5="">
                                                            <div className="icon" data-v-12ebaba5="">
                                                                <img src={javaicon} alt='java' />
                                                            </div>
                                                            <h2 className="title" data-v-12ebaba5="">Java</h2>
                                                        </article>
                                                    </div>
                                                </div>
                                                <div className='grid-6 item'>
                                                    <div className='VPFeature' onClick={() => window.open(
                                                            "https://www.ruby-lang.org/en/documentation/", "_blank")} >
                                                        <article className="box" data-v-12ebaba5="">
                                                            <div className="icon" data-v-12ebaba5="">
                                                                <img src={rubyicon} alt='ruby' />
                                                            </div>
                                                            <h2 className="title" data-v-12ebaba5="">Ruby</h2>
                                                        </article>
                                                    </div>
                                                </div>
                                                <div className='grid-6 item'>
                                                    <div className='VPFeature' onClick={() => window.open(
                                                            "https://learn.microsoft.com/en-us/dotnet/csharp/", "_blank")}  >
                                                        <article className="box" data-v-12ebaba5="">
                                                            <div className="icon" data-v-12ebaba5="">
                                                                <img src={csharpicon} alt='csharp' />
                                                            </div>
                                                            <h2 className="title" data-v-12ebaba5="">C#</h2>
                                                        </article>
                                                    </div>
                                                </div>
                                                
                                                <div className='grid-6 item'>
                                                    <div className='VPFeature' onClick={() => window.open(
                                                            "https://www.php.net/docs.php", "_blank")}  >
                                                        <article className="box" data-v-12ebaba5="">
                                                            <div className="icon" data-v-12ebaba5="">
                                                                <img src={phpincon} alt='java' />
                                                            </div>
                                                            <h2 className="title" data-v-12ebaba5="">PHP</h2>
                                                        </article>
                                                    </div>
                                                </div>
                                                
                                                <div className='grid-6 item'>
                                                    <div className='VPFeature' onClick={() => window.open(
                                                            "https://devdocs.io/javascript/", "_blank")}  >
                                                        <article className="box" data-v-12ebaba5="">
                                                            <div className="icon" data-v-12ebaba5="">
                                                                <img src={jsicon} alt='java' />
                                                            </div>
                                                            <h2 className="title" data-v-12ebaba5="">JavaScript</h2>
                                                        </article>
                                                    </div>
                                                </div>
                                                <div className='grid-6 item'>
                                                    <div className='VPFeature'onClick={() => window.open(
                                                            "https://www.postgresql.org/docs/", "_blank")}>
                                                        <article className="box" data-v-12ebaba5="">
                                                            <div className="icon" data-v-12ebaba5="">
                                                                <img src={postgresql} alt='java' />
                                                            </div>
                                                            <h2 className="title" data-v-12ebaba5="">PostgreSQL</h2>
                                                        </article>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>}
                                </TrackVisibility>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section >

    );
};
export default Skills;  