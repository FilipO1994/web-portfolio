import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import TrackVisibility from 'react-on-screen'

import colorSharp from '../assets/img/color-sharp.png'
import colorSharp2 from '../assets/img/color-sharp2.png'

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
	}

	const frontendSkills = [
		'HTML5',
		'CSS3',
		'JavaScript (ES6+)',
		'React',
		'Redux',
		'Magento',
		'Axios',
		'jQuery',
		'Typescript (in progress)',
		'Bootstrap',
		'SASS/SCSS',
		'Tailwind CSS',
		'Styled Components',
		'CSS Modules',
		'AJAX',
		'Npm',
		'GIT',
		'RESTful APIs',
		'Context API',
		'Unit Testing (React Testing Library)',
		'Debugging and DevTools',
		'Basic Graphic Design Skills (for UI/UX collaboration)',
		'Gulp',
	]

	const skillProgress = {
		HTML5: 99,
		CSS3: 99,
		'JavaScript (ES6+)': 95,
		React: 90,
		Redux: 80,
		Magento: 45,
		Axios: 90,
		jQuery: 90,
		'Typescript (in progress)': 20,
		Bootstrap: 90,
		'SASS/SCSS': 80,
		'Tailwind CSS': 99,
		'Styled Components': 99,
		'CSS Modules': 99,
		AJAX: 60,
		Npm: 50,
		GIT: 50,
		'RESTful APIs': 99,
		'Context API': 99,
		'Unit Testing (React Testing Library)': 30,
		'Debugging and DevTools': 60,
		'Basic Graphic Design Skills (for UI/UX collaboration)': 80,
		Gulp: 20,
	}

	const [hasScrolled, setHasScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setHasScrolled(true)
			} else {
				setHasScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<section className={`skills`} id="skills">
			<Container>
				<Row className="skills-scale">
					<Col>
						<div className={`skill-bx animate__animated ${hasScrolled ? 'animate__slideInUp' : ''}`}>
							<h2>Tech Stack</h2>
							<p>During my journey with frontend, I developed the following tech stack.</p>
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
	)
}
