import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import TrackVisibility from 'react-on-screen';

import colorSharp from '../assets/img/color-sharp.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const frontendSkills = [
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'React.js',
    'React Router',
    'React Portals',
    'Responsive Web Design',
    'Gulp',
    'CSS Frameworks (e.g., Bootstrap, Tailwind CSS, Styled Components, CSS Modules)',
    'Version Control/Git',
    'Web Performance Optimization',
    'AJAX and Asynchronous Programming',
    'RESTful APIs',
    'Redux Toolkit (State Management)',
    'typescript',
    'Context API',
    'Unit Testing (Jest, React Testing Library)',
    'Package Managers (npm, Yarn)',
    'Debugging and DevTools',
    'Code Quality and Linting (ESLint, Prettier)',
    'Basic Graphic Design Skills (for UI/UX collaboration)',
  ];

  const skillProgress = {
    HTML5: 95,
    CSS3: 92,
    'JavaScript (ES6+)': 88,
    'React.js': 90,
    'React Router': 90,
    'React Portals': 90,
    'Responsive Web Design': 98,
    'typescript': 50,
    Gulp: 50,
    'CSS Frameworks (e.g., Bootstrap, Tailwind CSS, Styled Components, CSS Modules)': 95,
    'Version Control/Git': 80,
    'Web Performance Optimization': 88,
    'AJAX and Asynchronous Programming': 80,
    'RESTful APIs': 87,
    'Redux Toolkit (State Management)': 85,
    'Context API': 90,
    'Unit Testing (Jest, React Testing Library)': 60,
    'Package Managers (npm, Yarn)': 30,
    'Debugging and DevTools': 90,
    'Code Quality and Linting (ESLint, Prettier)': 90,
    'Basic Graphic Design Skills (for UI/UX collaboration)': 90,
  };

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`skills`} id="skills">
      <Container>
        <Row>
          <Col>
            <div
              className={`skill-bx animate__animated ${
                hasScrolled ? 'animate__slideInUp' : ''
              }`}
            >
              <h2>Skills</h2>
              <p>During my journey with frontend, I developed the following skills.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="item">
                    <div className="progress-circle">
                      <CircularProgressbar
                        value={skillProgress[skill]}
                        text={`${skillProgress[skill]}%`}
                        styles={buildStyles({
                          textSize: '16px',
                          pathTransitionDuration: 0.5,
                          pathColor: `purple`,
                          textColor: '#f88',
                          trailColor: '#000',
                          spacing: '10px',
                        })}
                      />
                    </div>
                    <h5>{skill}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="background" />
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
