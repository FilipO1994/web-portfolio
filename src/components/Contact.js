import { useRef, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import contactheroimg from '../assets/img/contactheroimg.jpg'

export const Contact = () => {
	const form = useRef()
	const [isFormValid, setIsFormValid] = useState(false)

	const sendEmail = e => {
		e.preventDefault()

		const inputs = form.current.querySelectorAll('input, textarea')
		const areInputsEmpty = Array.from(inputs).some(input => input.value.trim() === '')

		if (!isFormValid || areInputsEmpty) {
			
			notifyError('Please fill all fields.') 
			return
		}

		emailjs.sendForm('service_3ctfzzq', 'template_3hmfvdf', form.current, 'FkI8R38aoqg5pkrtS').then(
			result => {
				form.current.reset()
				console.log(result.text)
				notifySuccess('Message sent successfully!')
			},
			error => {
				console.log(error.text)
			}
		)
	}

	const notifyError = message => toast.error(message)
	const handleInputChange = () => {
		const inputs = form.current.querySelectorAll('input, textarea')
		const isAnyInputEmpty = Array.from(inputs).some(input => input.value.trim() === '')
		setIsFormValid(!isAnyInputEmpty)
	}

	const notifySuccess = message => toast.success(message)

	const backgroundStyles = {
		backgroundImage: `url(${contactheroimg})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		opacity: '0.8',
		width: '100%',
		height: '700px', // Ustaw wysokość, aby dopasować do potrzeb
		// Inne stylizacje, jeśli są potrzebne
	}

	return (
		<section className="contact" id="connect" style={backgroundStyles}>
			<Container>
				<Row className="align-items-center">
					<Col size={12} md={6}>
						{/* <TrackVisibility>
							{({ isVisible }) => (
								<img
									className={isVisible ? 'animate__animated animate__zoomIn' : ''}
									src={contactImg}
									alt="Contact Us"
									// style={{ borderRadius: '50%' }}
								/>
							)}
						</TrackVisibility> */}
					</Col>
					<Col size={12} md={6}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
									<h2>Get In Touch</h2>
									<form ref={form} onSubmit={sendEmail}>
										<Row>
											<Col size={12} sm={6} className="px-1">
												<input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
											</Col>

											<Col size={12} sm={6} className="px-1">
												<input type="email" name="email" placeholder="Email Address" onChange={handleInputChange} />
											</Col>

											<Col size={12} className="px-1">
												<textarea rows="6" name="message" placeholder="Message" onChange={handleInputChange}></textarea>
												<button type="submit" value="Send" disabled={!isFormValid}>
													<span>SEND</span>
												</button>
											</Col>
										</Row>
									</form>

									<ToastContainer position="bottom-right" />
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	)
}
