import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

class ArtistSearch extends React.Component {
	render() {
		return (
			<>
				<Container>
					<div className="saved-venue-artist-div">
						<div className="searched-artists">
							<h2>Searched Artist</h2>
							<div className="artist-info">
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
							</div>
						</div>
						<div className="upcoming-concerts">
							<h2>Upcoming Concerts</h2>
							<div className="artist-info">
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
							</div>
						</div>
					</div>
				</Container>

				<Container>
					<h2> Venue Results </h2>
					<Container className="venue-results">
						<Row>
							<Card style={{ width: '12rem' }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>Venue #1</Card.Title>
									<Card.Text>
										Info on Venue #1
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>

							<Card style={{ width: '12rem' }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>Venue #1</Card.Title>
									<Card.Text>
										Info on Venue #1
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
							<Card style={{ width: '12rem' }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>Venue #1</Card.Title>
									<Card.Text>
										Info on Venue #1
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
							<Card style={{ width: '12rem' }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>Venue #1</Card.Title>
									<Card.Text>
										Info on Venue #1
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>

							<Card style={{ width: '12rem' }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>Venue #1</Card.Title>
									<Card.Text>
										Info on Venue #1
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
							<Card style={{ width: '12rem' }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>Venue #1</Card.Title>
									<Card.Text>
										Info on Venue #1
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
							<Card style={{ width: '12rem' }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>Venue #1</Card.Title>
									<Card.Text>
										Info on Venue #1
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
							<Card style={{ width: '12rem' }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>Venue #1</Card.Title>
									<Card.Text>
										Info on Venue #1
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
						</Row>
					</Container>
				</Container>
				
			</>
		)
	}
}

export default ArtistSearch;