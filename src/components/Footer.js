import { Container, Row, Col } from 'react-bootstrap'

import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon4 from '../assets/img/nav-icon4.svg'

export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center">
					<Col  className="text-center text-sm-end footer-location">
						<div className="social-icon">
							<a href="https://www.linkedin.com/in/filip-osi%C5%84ski-928b05222/" target="_blank">
								<img src={navIcon1} alt="Linkedin icon" />
							</a>
							<a href="https://www.facebook.com/filip.osinski.3/" target="_blank">
								<img src={navIcon2} alt="Facebook icon" />
							</a>
							<a href="https://github.com/FilipO1994/" target="_blank">
								<img src={navIcon4} alt="Github icon" />
							</a>
						</div>
						<p>Copyright 2023. All Rights Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}
