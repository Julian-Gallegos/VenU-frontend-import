import React from 'react';
import { Modal, Card } from 'react-bootstrap';


class CityModal extends React.Component {
	render() {
		return (
			<>
				<Modal show={this.props.showModal} onHide={this.props.setShowModalFalse}>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.clickedVenue.name}</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						{this.props.events.map(event  => {
							return(
							<Card.Text>
								{/* {this.props.events.Events.title} */}
							</Card.Text>
							)
						})}
						
						{/* <Card.Text>{this.props.events}</Card.Text> */}
					</Modal.Body>

					<Modal.Footer>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}

export default CityModal;