
import React from 'react';
import { Card, Button } from 'react-bootstrap';



class ArtistCard extends React.Component {
	render() {
		return (
			<>
				<Card style={{ width: '20rem', height: '20rem', margin:'15px'}} onClick={() => this.props.setShowModalTrue(this.props.id)}>
					{this.props.image ? <Card.Img variant="top" src={this.props.image}/> : <Card.Img variant="top" src={'https://t3.ftcdn.net/jpg/02/48/42/64/240_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'}/>}
					<Card.Body>
						<Card.Title>{this.props.name}</Card.Title>
						<Card.Text>
							{this.props.address}
						</Card.Text>
					</Card.Body>
				</Card>
			</>
		)
	}
}

export default ArtistCard;
