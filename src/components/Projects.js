import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Moon and Tides",
      description: "How does moon affect tidal waves",
      imgUrl: projImg1,
    },
    {
      title: "Mars",
      description: "The Second Earth",
      imgUrl: projImg2,
    },
    {
      title: "Milkyway",
      description: "The only discovered galaxy by the Human Beings",
      imgUrl: projImg3,
    },
    {
      title: "Black Hole",
      description: "",
      imgUrl: projImg6,
    },
    {
      title: "Do Aliens Exist?",
      description: "",
      imgUrl: projImg5,
    },
    {
      title: "Space and Time continuum",
      description: "",
      imgUrl: projImg4,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About Our Project</h2>
                <p>Inspiration - Our team always had a passion for space exploration, so when we were thinking of cool hackathon ideas to implement, we tried to think of ideas related to outer space and came up with Astra.ai.  .

                <br></br> <br></br> 
What it does -
Our app creates an outer space simulation where users can interact with different celestial objects, drag them around, and see how they affect other celestial objects. Each celestial body is also an AI Chatbot which can answer any information the user has about it. 
<br></br> 
<br></br> 
How we built it -
We used different technologies like React.js, Three.js, Unreal Engine, HTML, CSS, and JavaScript to build our project. 
<br></br> 
<br></br> 
Challenges we ran into -
Originally we planned to use React, HTML, CSS, and JavaScript to implement our project, however we were not able to accurately accomplish the tasks using these technologies only. So we had to learn how to use Three.js and Unreal Engine to implement these tasks. 
<br></br> 
<br></br> 
Accomplishments that we're proud of -
We are proud of the fact that we were able to learned new technologies and also implement our ideas through the new software within the time constraints. 
<br></br> 
<br></br> 
What we learned -
We learned new technologies that we were unfamiliar with before, like Three.js and Unreal Engine. 

</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Blogs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Video Resources</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Demo</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
