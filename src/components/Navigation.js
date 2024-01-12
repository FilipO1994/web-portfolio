import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-scroll'

import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon4 from '../assets/img/nav-icon4.svg'
export const Navigation = () => {
	const [activeLink, setActiveLink] = useState('home')
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener('scroll', onScroll)

		return () => {
			window.removeEventListener('scroll', onScroll)
		}
	}, [])
	const onUpdateActiveLink = value => {
		setActiveLink(value)
	}
	return (
		<Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
			<Container>
				<Navbar.Brand href="#home">
					<img src={logo} alt="logo" />
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link
							href="#home"
							className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
							onClick={() => onUpdateActiveLink('home')}>
							Home
						</Nav.Link>
						<Nav.Link
							href="#skills"
							className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
							onClick={() => onUpdateActiveLink('skills')}>
							Skills
						</Nav.Link>
						<Nav.Link
							href="#projects"
							className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
							onClick={() => onUpdateActiveLink('projects')}>
							Projects
						</Nav.Link>
					</Nav>
					<span className="navbar-text">
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
						<Link to="connect" duration={500}>
							<button className="vvd">
								<span>Let's connect</span>
							</button>
						</Link>
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
