import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


class AboutTeam extends React.Component {
	render() {
		return (
			<>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
					<Card.Body>
						<Card.Title>Cianenry Danan</Card.Title>
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
						<Card.Link href="#">GitHub</Card.Link>
						<Card.Link href="#">LinkedIn</Card.Link>
					</Card.Body>
				</Card>

				<Card style={{ width: '18rem' }}>
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
						<Card.Link href="#">GitHub</Card.Link>
						<Card.Link href="#">LinkedIn</Card.Link>
					</Card.Body>
				</Card>

				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
					<Card.Body>
						<Card.Title>Erik Dodd</Card.Title>
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
						<Card.Link href="#">GitHub</Card.Link>
						<Card.Link href="#">LinkedIn</Card.Link>
					</Card.Body>
				</Card>

				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
						<Card.Link href="#">GitHub</Card.Link>
						<Card.Link href="#">LinkedIn</Card.Link>
					</Card.Body>
				</Card>
			</>
		)
	}
}

export default AboutTeam;