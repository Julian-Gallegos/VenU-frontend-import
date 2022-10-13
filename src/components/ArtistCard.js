import React from 'react';
import { Card, Button } from 'react-bootstrap';


class ArtistCard extends React.Component {
	render() {
		return (
			<>
				{/* <Card style={{ width: '12rem' }}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>{this.props.artistName}</Card.Title>
						<Card.Text>
							{this.props.artistDescription}
						</Card.Text>
						<Button variant="primary">{this.props.ticketUrl}</Button>
					</Card.Body>
				</Card> */}
				<Card style={{ width: '12rem' }} onClick={() => this.props.setShowModalTrue()}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Artist Name</Card.Title>
						<Card.Text>
							Artist Description
						</Card.Text>
						<Button variant="primary">Artists Music</Button>
					</Card.Body>
				</Card>
			</>
		)
	}
}

export default ArtistCard;
