"use client";
import { useState } from "react";
import Image from "next/image";
import sudeep from './Images/sudeep.jpg';
import sudeep1 from "./Images/sudeep1.jpg";
import aws from "./Images/skills/aws.png";
import angular from "./Images/skills/angular.png";
import anisbile from "./Images/skills/anisbile.png";
import docker from "./Images/skills/docker.png";
import kubernetes from "./Images/skills/kuberneties.png";
import ml from "./Images/skills/ml.png";
import Prometheus from "./Images/skills/Prometheus.png";
import git from "./Images/skills/git.png";
import edureka from "./Images/experience/edureka.png";
import soliton from "./Images/experience/soliton.jpeg";
import vtps from "./Images/experience/vtps.jpg";
import rover from "./Images/Projects/rover.jpg";
import drone from "./Images/Projects/Quadcopter.jpeg";
import scart from "./Images/Project Images/S cart.png";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ messageInput, setMessageInput ] = useState('');

  const [messages, setMessages] = useState([
		{
			role: 'assistant',
			content: 'How can i help you?'
		}
  ]);

  const submitForm = async (e) => {
    e.preventDefault();
    let newMessages = [...messages, { role: 'user', content: messageInput }]
    setMessages(newMessages);
    setMessageInput('');
    const apiMessage = await fetch(
      '/api',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages })
      }
    ).then(res => res.json());
    setMessages([...newMessages, { role: 'assistant', content: apiMessage.message }]);
  }
  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMobileMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  return (
    <div className="main-body">      
      <nav className="navbar navbar-fixed-top" style={{ backgroundColor: "rgb(0, 153, 153)" }}>
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#" style={{ fontFamily: "Georgia", color: "black" }}>
                    <div className="div-block-4" style={{ marginTop: "-8px" }}></div>
                </a>
                <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/>
                    </svg>
                </a>
            </div>
            <ul id="menu" className={`nav navbar-nav navbar-right ${isMenuActive ? 'active' : ''}`}>
                <li><a href="#aboutme" style={{ color: "black", fontFamily: "Georgia" }}>About</a></li>
                <li><a href="#Experience" style={{ color: "black", fontFamily: "Georgia" }}>Experience</a></li>
                <li><a href="#skills" style={{ color: "black", fontFamily: "Georgia" }}>Skills</a></li>
                <li><a href="#education" style={{ color: "black", fontFamily: "Georgia" }}>Education</a></li>
                <li><a href="#projects" style={{ color: "black", fontFamily: "Georgia" }}>Projects</a></li>
                <li><a href="#certifications" style={{ color: "black", fontFamily: "Georgia" }}>Certifications</a></li>
                <li><a href="#contact" style={{ color: "black", fontFamily: "Georgia" }}>Contact</a></li>
                <li><a href="#chatBot" style={{ color: "black", fontFamily: "Georgia" }}>Chat Bot</a></li>
            </ul>
        </div>
      </nav>


      <div id="intro">
        <div className="container">
          <div className="row jumbotron" style={{ marginTop: "140px" }}>
            <div className="col-md-6 bar">
            <Image
              src={sudeep1}
              alt="Myphoto"
              className="img-rounded"
              id="Myphoto" // Ensure aspect ratio
            />
            </div>

            <div className="col-md-5 bar">
              <span style={{ fontSize: "60px", fontFamily: "Papyrus" }}>
                Hello, I am <span style={{ color: "red" }}>Sudeep Aryan </span>
                Welcome to my World.
              </span>

              <p style={{ fontSize: "22px", fontFamily: "Lucida Console" }}></p>
            </div>
          </div>
        </div>
      </div>

      <div id="aboutme">
        <div className="container" >
          <div className="row jumbotron" style={{ marginTop: "140px" }}>
            {/* <div className="col-md-6 bar" ><img src="https://i.postimg.cc/K85vVP8R/My-Photo.jpg" className="img-rounded" id="Myphoto" alt="Myphoto" border="0" style={{ height: '400px' }} /></div> */}
            <div className="col-md-6 bar">
              <span style={{ fontSize: "60px", fontFamily: "Papyrus" }}>
                About me !
              </span>
              <p style={{ fontSize: "18px", fontFamily: "Lucida Console" }}>
                With overall experience of 2 years spanning Machine Learning,
                Generative AI, DevOps, and full stack development. I am a tech
                enthusiast who enjoys tackling diverse challenges. My journey
                involves building Machine Learning models, and optimizing
                processes through DevOps. My reputation lies in adaptability,
                creative problem-solving, and an unwavering commitment to
                staying at the forefront of these ever-evolving domains. I am
                poised to contribute effectively to dynamic teams and
                organizations, driven by a passion for continuous innovation.
              </p>
            </div>
            <div className="col-md-6 bar">
              <Image
                src={sudeep}
                className="img-rounded"
                id="Myphoto"
                alt="Myphoto"
                border="0"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="Experience">
      <section class="work-experience container">
            <h2 className="headline">
                Work Experience
            </h2>
            <div class="jobs">
                <article>
                    <figure>
                        <div>
                            {/* <img src="./imgs/workplace-1.jpg" alt="Workplace 1 - Soliton Technologies" width="100%" /> */}
                            <Image src={soliton} alt="Workplace 1 - Soliton Technologies" width="100%" />
                            <figcaption>
                                Workplace - Soliton Technologies
                            </figcaption>
                        </div>
                    </figure>
                    <h3 className="work-expreinece-subheading">Project Engineer (Full-Time Employee)</h3>
                    <div>Jun 2023 - Present</div>
                    <p className="work-expreinece-innercontent">Working as Project Engineer in Soliton Technology.Trained on
                    Generative AI ,Machine Learning</p>
                </article>
                <article>
                    <figure>
                        <div>
                        <Image src={soliton} alt="Workplace 1 - Soliton Technologies" width="100%" />
                            {/* <img src="./imgs/workplace-2.jpg" alt="Workplace 2 - Soliton Technologies" width="100%" /> */}
                            <figcaption>
                                Workplace - Soliton Technologies
                            </figcaption>
                        </div>
                    </figure>
                    <h3 className="work-expreinece-subheading">Internship</h3>
                    <div>Jun 2022 - May 2023</div>
                    <p className="work-expreinece-innercontent">Worked as Intern in Soliton Technology. Trained on
                    DevOps,Full-Stack Web Developement</p>
                </article>
                <article>
                    <figure>
                        <div>
                          <Image src={edureka} alt="Workplace 3 - Edureka" width="100%"  />
                            <figcaption>
                                Workplace - Edureka
                            </figcaption>
                        </div>
                    </figure>
                    <h3 className="work-expreinece-subheading">Full Stack Web Developer (Internship)</h3>
                    <div>Jul 2021 - Feb 2022</div>
                    <p className="work-expreinece-innercontent">Eight months Internship on Full-Stack Web Development with React
                    Front-end and NodeJs Backend.</p>
                </article>
                <article>
                    <figure>
                        <div>
                          <Image src={vtps} alt="Workplace 3 - VTPS" width="100%" />
                            <figcaption>
                            Dr. Narla Tatarao Thermal Power Station
                            </figcaption>
                        </div>
                    </figure>
                    <h3 className="work-expreinece-subheading">Implant Training</h3>
                    <div>May 2021 - Jul 2021</div>
                    <p className="work-expreinece-innercontent">Industrial Visits and Familiarization in working of thermal
                    power plant.</p>
                </article>
            </div>
        </section>
      </div>
      
      {/* Skills */}
      <div id="skills">
        <h1 className="headline">Skills</h1>
        <div className="row marquee">
            <div className="track">
                {/* Your skill logos */}
                <img src="https://i.ibb.co/wN8GgQ2/ml.jpg"className="skillimage" title="Machine Learning" alt="C++" height={100} width={100} border="0" />
                <img src="https://i.ibb.co/RhBG12S/python.png" className="skillimage" alt="python" title="Python" border="0" height={100} width={100} />
                <img src="https://i.ibb.co/KrwRwFg/html.png" className="skillimage" alt="html" border="0" title="HTML" height={100} width={100} />
                <img src="https://i.ibb.co/f16bwzq/css.png" className="skillimage" alt="css" border="0" title="CSS" height={100} width={100} />
                <img src="https://i.ibb.co/sPYRrrM/react.png" className="skillimage" alt="react" border="0" title="React" height={100} width={100} />
                <img src="https://i.postimg.cc/mrvWcZsr/Java-Script.png" className="skillimage" alt="javascript" height={100} width={100} border="0" title="Java Script" />
                <img src="https://i.ibb.co/vBDRGjK/node.png" className="skillimage" alt="node" border="0" height={100} width={100} title="Node JS" />
                <img src="https://i.ibb.co/Sf2yRn8/mongo.png" className="skillimage" alt="mongo" border="0" height={100} width={100} title="Mongo DB" />
                <img src="https://i.ibb.co/HzJ62HH/angular.png" className="skillimage" alt="C" height={100} width={100} border="0" title="Angular" />
                <img src="https://i.ibb.co/cXNZ7Zj/aws.png" className="skillimage" alt="C" height={100} width={100} border="0" title="AWS" />
                <img src="https://i.ibb.co/MRvxzP5/docker.png" className="skillimage" alt="C" height={100} width={100} border="0" title="Docker" />
                <img src="https://i.ibb.co/nDDxcsH/kuberneties.png" className="skillimage" alt="C" height={100} width={100} title="Kubernetes" border="0" />
                <img src={git} className="skillimage" alt="C" height={100} width={100} border="0" title="Git Hub" />
                <img src="https://i.ibb.co/vY99LTC/polymer.png" className="skillimage" alt="Polymer" height={100} width={100} border="0" title="Polymer" />
                <img src={ml} className="skillimage" title="Machine Learning" alt="C++" height={100} width={100} border="0" />
                <img src="https://i.ibb.co/RhBG12S/python.png" className="skillimage" alt="python" title="Python" border="0" height={100} width={100} />
                <img src="https://i.ibb.co/KrwRwFg/html.png" className="skillimage" alt="html" border="0" title="HTML" height={100} width={100} />
                <img src="https://i.ibb.co/f16bwzq/css.png" className="skillimage" alt="css" border="0" title="CSS" height={100} width={100} />
                <img src="https://i.ibb.co/sPYRrrM/react.png" className="skillimage" alt="react" border="0" title="React" height={100} width={100} />
                <img src="https://i.postimg.cc/mrvWcZsr/Java-Script.png" className="skillimage" alt="javascript" height={100} width={100} border="0" title="Java Script" />
                <img src="https://i.ibb.co/vBDRGjK/node.png" className="skillimage" alt="node" border="0" height={100} width={100} title="Node JS" />
                <img src="https://i.ibb.co/Sf2yRn8/mongo.png" className="skillimage" alt="mongo" border="0" height={100} width={100} title="Mongo DB" />
                <img src="https://i.ibb.co/vY99LTC/polymer.png" className="skillimage" alt="Polymer" height={100} width={100} border="0" title="Polymer" />
            </div>
        </div>
        <div className="skills-content">
            <section id="skills-innercontent" className="skills container">
                <div className="holder-blue">
                    <div className="left-column">
                        <h3><u>Programming Languages</u></h3>
                        <ul>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>C</li>
                            <li>C++</li>
                            <li>C#</li>
                        </ul>
                        <h3><u>Data Engineering</u></h3>
                        <ul>
                            <li>Data Modeling</li>
                            <li>Database Design</li>
                            <li>Data Visualization (Power BI)</li>
                        </ul>
                        <h3><u>Database Management</u></h3>
                        <ul>
                            <li>MongoDB</li>
                            <li>SQL Databases</li>
                        </ul>
                        <h3><u>Web Technologies</u></h3>
                        <ul>
                            <li>React</li>
                            <li>Redux Toolkit</li>
                            <li>VueJS</li>
                            <li>RTKQuery</li>
                            <li>Polymer</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>NodeJS</li>
                            <li>.NET</li>
                        </ul>
                    </div>
                    <div className="right-column">
                        <h3><u>Artificial Intelligence</u></h3>
                        <ul>
                            <li>Prompt Engineering</li>
                            <li>Lang Chain</li>
                            <li>Fine Tuning</li>
                            <li>NLP</li>
                            <li>Deep Learning Architectures</li>
                        </ul>
                        <h3><u>Cloud Platforms</u></h3>
                        <ul>
                            <li>Microsoft Azure (Azure Databricks, ADLS Gen2, Azure Data Factory)</li>
                            <li>AWS (EC2, EKS, S3, etc.)</li>
                        </ul>
                        <h3><u>DevOps Tools</u></h3>
                        <ul>
                            <li>Docker</li>
                            <li>Kubernetes</li>
                            <li>Git</li>
                            <li>Prometheus</li>
                            <li>Jenkins</li>
                            <li>Ansible</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
      </div>
      {/* education */}
      <div id="education">
        <h1 className="headline">Education</h1>
        <div className="container">
          <div className="row work-info">
            <div className="col-md-6 work-left" id="work-left">
              <h4>2019 - 2023</h4>
            </div>
            <div className="col-md-6 work-right" id="work-right">
              <span className="glyphicon glyphicon-education"></span>
              <h5>Bachelor of Technology</h5>
              <p>Institute : Amrita Vishwa Vidyapeetham, Coimbatore</p>
              <p>CGPA : 7.9/10</p>
            </div>
          </div>
          <div className="row work-info">
            <div className="col-md-6 work-left" id="work-left">
              <h4>2017 - 2019</h4>
            </div>
            <div className="col-md-6 work-right" id="work-right">
              <span className="glyphicon glyphicon-education"></span>
              <h5>Higher Secondary Education</h5>
              <p>Institute : Sri Chaitanya Institutions, Vijayawada</p>
              <p>Percentage : 9.44/10</p>
            </div>
          </div>
          <div className="row work-info">
            <div className="col-md-6 work-left" id="work-left">
              <h4>2016 - 2017</h4>
            </div>
            <div className="col-md-6 work-right" id="work-right">
              <span className="glyphicon glyphicon-education"></span>
              <h5>Secondary Education</h5>
              <p>Institute : Sri Chaitanya High School, Vijayawada</p>
              <p>CGPA : 9.3/10</p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}

      <div id="projects">
        <h1 className="headline">ProJects</h1>
        {/* slidebar */}
        <div
          id="myCarousel"
          className="carousel slide"
          data-ride="carousel"
          data-interval="500000"
        >
          <ol className="carousel-indicators" style={{ display: "none" }}>
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="0"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
            <li data-target="#myCarousel" data-slide-to="4"></li>
          </ol>

          <div className="carousel-inner projectmain" id="carousel-project-content-text">
            {/* main slide and first slide,dont remove item active */}

            <div className="item" data-interval="false">
              <div>
                <p className="projectname">
                  S-Cart (A Prototype of E commerce website)
                </p>
                {/* <p className='projectobjective'>• </p> */}
                <iframe
                  title="project"
                  className="scart"
                  src="https://sudeeparyan.github.io/SudeepCart/"
                  width="1000px"
                  height="370px"
                  allowfullscreen
                ></iframe>
                <h4>
                  HTML, CSS, Bootstrap, JavaScript, React, Nodejs, MongoDB,
                  Express, Heroku, Docker, Kubernites, Prometheus are the tools
                  used in the project
                </h4>
                <h4>
                  Created an e-commerce web page that incorporates all the
                  concepts and skills I acquired during my internship.
                </h4>
                {/* <p className='projectoutcome'>• Outcome: Designed a E-commerce web page.</p> */}

                <h3>
                  <a
                    href="https://sudeeparyan.github.io/SudeepCart/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to go to Scart
                  </a>
                </h3>
                {/* <img alt="scart" src={scart} /> */}
                {/* <iframe id="Scart" width="1000px" height="370px"  src="https://sudeeparyan.github.io/SudeepCart/" title="SudeepCart" frameborder="0" allow="accelerometer;autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  */}
              </div>
            </div>

            <div className="item" data-interval="false">
              <div>
                <p className="projectname">
                  Device Vision (Soliton) (Jan 2023 - Nov 2023)
                </p>
                <p className="projectobjective">
                  Customer asked to develop Data analyzing and Visualization
                  tool for Validation Enginners.
                </p>
                <p className="projecttools">
                  Front-End: React(Advanced Redux Tool kit-RTKQuery),
                  Back-End: Python, Machine Learning: Regression, MLOPS and
                  DevOps Tools.
                </p>
                <p className="projectoutcome">
                  Tool that Visualization and Analyzing data which is given by
                  Validation Engineer so that they can easily train any data and
                  Predict the values which is beyond the range of his collected
                  data.
                </p>
                <p>
                  (Due to the confidentiality of company operations, further
                  details cannot be disclosed.)
                </p>
              </div>
            </div>

            <div className="item" data-interval="false">
              <div>
                <p className="projectname">
                  Texas Instruments - Battery Management System (Soliton) (Nov
                  2023 - Present)
                </p>
                <p className="projectobjective">
                  Working on Agile Methodology : Connecting with customer &
                  getting the requirements, Backlog refinement, Development,
                  Testing & Release.
                </p>
                <p className="projecttools">
                  Completed the mandatory Training that should be done before
                  joining the project. Worked on Polymer JS and completed SDLC
                  project
                </p>
                <p className="projectoutcome">
                  Currently Developing a graphical user interface (GUI) and
                  working on Hardware Validation and chips testing given by
                  Texas Instruments
                </p>
                <p>
                  And also working on Generative AI chat bot assistant.(Due to
                  the confidentiality of company operations, further details
                  cannot be disclosed.)
                </p>
              </div>
            </div>

            <div className="item active" data-interval="false">
              <div>
                <p className="projectname">
                  Self-Driving Rover Amrita(Aug 2022-Jun 223){" "}
                </p>
                {/* <iframe id="youtubeVideo" width="200px" height="300px" src="https://youtube.com/embed/4L4pG72sfLM" title="YouTube video player" frameborder="0" allow="accelerometer;autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                <p className="projectobjective">
                  Implementation of self driving rover using ML(Reinforcement
                  learning) with Raspberry pi,which is able to detect and avoid
                  obstacles in its path and also able to move in the given lane.
                </p>
                <p className="projecttools">
                  Raspberry Pi 3b+,NVIDIAs CNN model, Ultra-sonic sensor,Pi
                  camera,Servo motor,DC motors.
                </p>
                <div className="projectImg" >
                  <Image alt="Rover" src={rover} className="RoverImg" />
                </div>
              </div>
            </div>

            <div className="item" data-interval="false">
              <div>
                <p className="projectname">Quadcopter Amrita (May 2019 Jan 2020) </p>
                <p className="projectobjective">
                  To build a drone with four wings and complete the
                  given task.
                </p>
                <p className="projecttools">
                  Arduino UNO,ESC,Bluetooth
                  Module,PDB.
                </p>
                <p className="projectoutcome">
                  Quad copter is capable to fly in air and flips,
                  rotates in its same position.
                </p>
                <div className="projectImg" >
                <Image alt="drone" src={drone} className="droneImg" />
                </div>
                
              </div>
            </div>

            {/* <div className="item" data-interval="false">
              <div>
                <p className="projectname">Sudoku Solver May </p>
                <p className="projectobjective">
                  • Objective: 9*9 Sudoku Solver using Back Tracking Algorithm.
                </p>
                <p className="projecttools">
                  • Tools or techniques used: HTML, CSS, JavaScript, Back
                  Tracking Algorithm.
                </p>
                <p className="projectoutcome">
                  • Outcome:- Solves partial 9*9 sudoku using back tracking
                  algoritham .
                </p>
              </div>
            </div> */}

            {/* <div className="item" data-interval="false">
                            <div>
                                <p className="projectname" >Real-Time Fast Fourier Transform (FFT) Analysis Mar ’23 - Apr ’23</p>
                                <p className='projectobjective'>• Objective: Obtaining amplitude vs frequency graph of any audio signal
                                    using real time Fast Fourier Transform (FFT).</p>
                                <p className='projecttools'>• Tools or techniques used: Arduino UNO, Sound Sensor, Arduino IDE,
                                    MATLAB.</p>
                                <iframe className="projectdoc" src="https://drive.google.com/file/d/1WkMPUVcaB30_-6SQAfOxwMXrmQtvmT4f/preview?usp=embed_googleplus" width="300px" height="300px" allowfullscreen></iframe>
                            </div>
                        </div> */}
            {/* <div className="item" data-interval="false">
                            <div>
                                <p className="projectname" >Self-Driving Rover Jul ’22 - Nov ’22</p>
                                <iframe id="youtubeVideo" width="200px" height="300px" src="https://youtube.com/embed/4L4pG72sfLM" title="YouTube video player" frameborder="0" allow="accelerometer;autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <p className='projectobjective'>• Objective: Implementation of self driving rover with Raspberry pi,which is
                                    able to detect its path and also able to move in the given lane.</p>
                                <p className='projecttools'>• Tools or techniques used : Raspberry Pi 3b+,NVIDIA’s CNN model, Ultrasonic
                                    sensor,Pi camera,DC motors.</p>
                            </div>
                        </div> */}
          </div>

          <a
            className="left carousel-control"
            href="#myCarousel"
            data-slide="prev"
          >
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div id="certifications">
        <h1 className="headline">Certifications</h1>
        <div className="row" style={{ lineHeight: "150px" }}>
          <h3>
            <a
              href="https://coursera.org/share/7c18ea3335bf72b4c18c9c3d4f738ce8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Machine Learning
            </a>
          </h3>
          <h3>
            <a
              href="https://coursera.org/share/fcb4031aa63c0af7e4b748f3048b5cc6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Neural Networks and Deep Learning
            </a>
          </h3>
          <h3>
            <a
              href="https://www.edureka.co/certificates/mycertificate/3a96f454fcc70b6179e000e39acb12db"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full Stack Web Development
            </a>
          </h3>
          <h3>
            <a
              href="https://coursera.org/share/7c18ea3335bf72b4c18c9c3d4f738ce8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Data structures and Algorithms
            </a>
          </h3>
          <h3>
            <a
              href="https://coursera.org/share/6df1859e3ed67b74db0b2fcd49b0e245"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Professional Workspace Administrator
            </a>
          </h3>
          <h3>
            <a
              href="https://ieeexplore.ieee.org/document/10404782"
              target="_blank"
              rel="noopener noreferrer"
            >
              International IEEE Conference Paper
            </a>
          </h3>
          {/* 1: \href{https://coursera.org/share/7c18ea3335bf72b4c18c9c3d4f738ce8}{Machine Learning }\\
        2: \href{https://coursera.org/share/fcb4031aa63c0af7e4b748f3048b5cc6}{Neural Networks and Deep Learning}  \\        
        3: \href{https://www.edureka.co/certificates/mycertificate/3a96f454fcc70b6179e000e39acb12db}{Full Stack Web Development}\\
        4: Data structures and Algorithms\\
        5: \href{https://coursera.org/share/6df1859e3ed67b74db0b2fcd49b0e245}{Google Professional Workspace Administrator} */}
        </div>
      </div>
      <div id="contact">
        <h1 className="headline ">Contact</h1>

        <div className="container">
          <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.96565998386!2d78.45949881466605!3d14.714533589730038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb389efd41ca6ad%3A0xd21e447105818ff3!2sAF%20APARTMENT!5e0!3m2!1sen!2sin!4v1660049458028!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-md-6">
              <div>
                <p style={{ fontSize: "20px", color: "white" }}>
                  AF-107, R.T.P.P, V.V.Reddy Nagar, Yerraguntla(MDL),
                  Kadapa(district) AndhraPradesh(St), India. PIN CODE : 516312
                </p>
                <p>
                  <span style={{ fontSize: "20px", color: "white" }}>
                    Mobile : +91 8309135484
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <span style={{ fontSize: "20px", color: "white" }}>
                    E-mail :{" "}
                    <a
                      href="sudeeparyang@gmail.com"
                      target="_blank"
                      style={{
                        fontFamily: "Roboto Condensed",
                        fontSize: "20px",
                        color: "white",
                      }}
                    >
                      sudeeparyang@gmail.com
                    </a>
                  </span>
                </p>
              </div>
              <div id="socialnetwork" style={{ marginTop: "-6px" }}>
                <a href="https://github.com/Sudeeparyan" target="_blank">
                  <img
                    src="https://i.postimg.cc/D0jsHk21/Github.png"
                    height="30px"
                    width="30px"
                    alt="Github"
                  />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <a href="https://www.linkedin.com/feed/" target="_blank"><img src="https://i.postimg.cc/L6vrbqkP/Linkdin-Icon.png" heigth="30px" width="30px" alt="Linkedin" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="https://twitter.com/home" target="_blank"><img src="https://i.postimg.cc/PqDVTND2/Twitter-Icon.png" height="30px" width="34" alt="Twitter" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="https://www.facebook.com/" target="_blank"><img src="https://i.postimg.cc/mDZYqq2T/Facebook-icon.png" height="30px" width="30px" alt="Facebook" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="https://www.instagram.com/" target="_blank"><img src="https://i.postimg.cc/4yPzXRw8/Instagram-Icon.png" heigth="30px" width="30px" alt="Instagram" /></a>&nbsp;&nbsp;&nbsp;&nbsp; */}
              </div>
              <div className="contactform" style={{ marginTop: "12px" }}>
                <form>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    required
                  ></input>
                  <input
                    className="email"
                    name="Email"
                    placeholder="Email"
                    required
                  ></input>
                  <input
                    className="phone"
                    name="Phone"
                    placeholder="Phone"
                    required
                  ></input>
                  <textarea
                    className="messages"
                    name="Message"
                    placeholder="Message"
                    required
                  ></textarea>
                  <input type="submit" value="SUBMIT"></input>
                </form>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div id="chatBot">
        <section className="chatbot container">
            <h2 className="headline ">
              Chatbot
            </h2>
            <div className="chatbot-blue">
            <div className="chat-info">
              <h3>Azure AI Chatbot</h3>
              <p>I have put together a chatbot here which knows all my skills, work experience and has a copy of my CV/Resume. You can use it to ask questions about me to get a better idea of who I am and what I have done.</p>
              <p>You can also download my resume here if you want to take a look at it. I am currently looking for new opportunities so if you have a project you think I did be a good fit for, please get in touch!</p>
              <a href="/Sudeep_Aryan_Resume.pdf" className="button black" download>Download Resume</a>
            </div>
              <div className="chat-box">
                <div className="scroll-area">
                  <ul id="chat-log">
                    {messages.map((message, index) => (
                      <li key={index} className={`${message.role}`}>
                        <span className={`avatar`}>{message.role === 'user' ? 'You' : 'AI'}</span>
                        <div className="message">{message.content}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <form onSubmit={submitForm} className="chat-message">
                  <input type="text" placeholder="Hey Sudeep , what skills are you best at?" value={messageInput} onChange={e => setMessageInput(e.target.value)} />
                  <button className="button black">Send</button>
                </form>
              </div>
            </div>
        </section>
      </div>
      <div className="bottom">
            <h2>&copy; Sudeep Aryan Website</h2>
      </div>
      
    </div>
  );
}
