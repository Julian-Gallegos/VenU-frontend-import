import React from 'react';
import { Card } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class CityCard extends React.Component {
	render() {
		return (
			<>	
				<Card style={{ width: '12rem' }} onClick={() => this.props.setShowModalTrue(this.props.id)}>
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

export default withAuth0(CityCard);