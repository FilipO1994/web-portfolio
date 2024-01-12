import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'

import profurnitureWebMini from '../assets/img/minifurniture.png'
import cryptoTrackerWebMini from '../assets/img/minitracker.png'
import colorSharp2 from '../assets/img/color-sharp2.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Projects = () => {
	const projects = [
		{
			title: 'Pro Furniture',
			description: 'Online furniture shop',
			imgUrl: profurnitureWebMini,
			link: 'https://pro-furniture-shop.netlify.app/',
		},
		{
			title: 'CryptoTracker',
			description: 'Personal cryptocurrency portfolio tracker',
			imgUrl: cryptoTrackerWebMini,
			link: 'https://crypto-tracker-page.netlify.app/',
		},
		// 	{
		// 		title: 'Pro Furniture',
		// 		description: 'Online furniture shop',
		// 		imgUrl: profurnitureWebMini,
		// 		link: 'https://pro-furniture-shop.netlify.app/',
		// 	},
	]

	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col md={12}>
						<h2>Projects</h2>
						<p>
							Explore a showcase of my creative endeavors in the "Projects" section. Here, you'll find a curated
							collection of my work, reflecting my passion, dedication, and diverse skill set. Dive into the world of my
							creations and witness the blend of artistry and functionality. Join me on a journey of creativity and
							innovation.
						</p>
						<Tab.Container id="projects-tabs" defaultActiveKey="first">
							<Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
								<Nav.Item>
									<Nav.Link eventKey="first">E-commerce</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Vanilla js</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">cos nowego</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content id="slideInUp">
								<Tab.Pane eventKey="first">
									<Row>
										{projects.slice(0, 1).map((project, index) => (
											<ProjectCard key={index} {...project} />
										))}
									</Row>
									<p>
										Pro Furniture is a dynamic e-commerce platform crafted with React. This seamless shopping experience
										is powered by my custom API, efficiently fetched using Axios. The integration of Auth0 ensures
										secure and convenient login procedures for users. Leveraging React Router, navigation through the
										website is smooth and intuitive. To enhance the visual appeal and maintain a consistent design
										system, Styled Components are employed as a CSS framework. User data is stored seamlessly using
										local storage, providing a personalized experience. Experience the synergy of modern web
										technologies coming together in Pro Furniture, a testament to seamless functionality, security, and
										captivating design. This project is proudly deployed on Netlify, ensuring optimal performance and
										accessibility.{' '}
									</p>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<Row>
										{projects.slice(1, 2).map((project, index) => (
											<ProjectCard key={index} {...project} />
										))}
									</Row>
									<p>
										"Crypto Tracker" stands as a testament to streamlined cryptocurrency portfolio management. Crafted
										using Vanilla JavaScript, this project was born out of a personal need for a more efficient and
										organized approach to monitoring cryptocurrency investments. The application simplifies the often
										cumbersome task of tracking cryptocurrency prices. Gone are the days of juggling multiple tabs or
										applications. With "Crypto Tracker," users can effortlessly keep an eye on selected
										cryptocurrencies, neatly presented in dedicated cards. This design allows for quick and easy access
										to crucial information, eliminating the need to sift through complex interfaces. The user interface is
										intentionally designed for simplicity and intuition. A single click unveils the latest price data
										for any chosen cryptocurrency, offering a time-saving and efficient method for portfolio management.
										Regular data updates ensure that users have access to the most current and accurate information. "Crypto Tracker" is more than a tool; it's a solution for individuals seeking a
										convenient and effective way to monitor and manage their cryptocurrency investments.
									</p>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit,
										rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus
										quasi inventore debitis quo.
									</p>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
			<img className="background-image-right" src={colorSharp2}></img>
		</section>
	)
}
