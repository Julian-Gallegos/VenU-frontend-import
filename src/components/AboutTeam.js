import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import '../App.css';

class AboutTeam extends React.Component {
	render() {
		return (
			<>
				<Container>
					<Row>
						<Col sm={6}> 
							<Card style={{ width: '18rem' }} className='aboutteam-card'>
								<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
								<Card.Body>
									<Card.Title>Cianenry Danan</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</Card.Text>
								</Card.Body>
								<ListGroup className="list-group-flush" >

									<ListGroup.Item>Favorite Artists:  </ListGroup.Item>
									<ListGroup.Item>Favorite Venue: </ListGroup.Item>
								</ListGroup>
								<Card.Body>
									<Card.Link href="https://github.com/cianedanan">GitHub</Card.Link>
									<Card.Link href="https://www.linkedin.com/in/cianenry-danan/">LinkedIn</Card.Link>
								</Card.Body>
							</Card>
						</Col>
						<Col sm={6}>
							<Card style={{ width: '18rem' }} className='aboutteam-card'>
								<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
								<Card.Body>
									<Card.Title>Chris Hollis</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</Card.Text>
								</Card.Body>
								<ListGroup className="list-group-flush">

									<ListGroup.Item>Favorite Artists:  </ListGroup.Item>
									<ListGroup.Item>Favorite Venue: </ListGroup.Item>
								</ListGroup>
								<Card.Body>
									<Card.Link href="https://github.com/Hollistr">GitHub</Card.Link>
									<Card.Link href="https://www.linkedin.com/in/christopher-hollis-1ba7871a8/">LinkedIn</Card.Link>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col sm={6}>
							<Card style={{ width: '18rem' }} className='aboutteam-card'>
								<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
								<Card.Body>
									<Card.Title>Erik Dodd</Card.Title>
									<Card.Text>
										Erik is a Software Developer with a background in Sales, Marketing, and Customer Service.
										He is passionate about Technology and building websites and applications that users find aesthetically pleasing and interactive.
										His core competencies include Leadership, Results, Communication, and Emotional Intelligence.
										He has experience working in businesses of all sizes including start-ups, enterprise-level Tech Companies, small businesses, and even in the non-profit sector.
										He is a strong individual performer with a history of consistently high KPI performance.
										He values the importance of teamwork and building quality relationships with my colleagues and clients.
									</Card.Text>
								</Card.Body>
								<ListGroup className="list-group-flush">

									<ListGroup.Item>Favorite Artists: Frank Ocean, Outkast, and Lil Wayne  </ListGroup.Item>
									<ListGroup.Item>Favorite Venue: Showbox Market </ListGroup.Item>
								</ListGroup>
								<Card.Body>
									<Card.Link href="https://github.com/ErikDodd">GitHub</Card.Link>
									<Card.Link href="https://www.linkedin.com/in/erik-m-dodd/">LinkedIn</Card.Link>
								</Card.Body>
							</Card>
						</Col>
						<Col sm={6}>
							<Card style={{ width: '18rem' }} className='aboutteam-card'>
								<Card.Img variant="top" src="./src/images/julian.jpg" />
								<Card.Body>
									<Card.Title>Julian Gallegos</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</Card.Text>
								</Card.Body>
								<ListGroup className="list-group-flush">

									<ListGroup.Item>Favorite Artists:  </ListGroup.Item>
									<ListGroup.Item>Favorite Venue: </ListGroup.Item>
								</ListGroup>
								<Card.Body>
									<Card.Link href="https://github.com/Julian-Gallegos">GitHub</Card.Link>
									<Card.Link href="https://www.linkedin.com/in/julian-gallegos/">LinkedIn</Card.Link>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</>
		)
	}
}

export default AboutTeam;