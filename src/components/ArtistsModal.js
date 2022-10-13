import React from 'react';
import { Modal, Card } from 'react-bootstrap';

class ArtistsModal extends React.Component {
	render() {
		return (
			<>
				{/* <Modal show={this.props.showModal} onHide={this.props.setShowModalFalse}>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.clickedArtist.title}</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Card.Text>{this.props.clickedArtist.description}</Card.Text>
						<Card.Text>{this.props.clickedArtist.dates}</Card.Text>
					</Modal.Body>

					<Modal.Footer>
						<Card.Img src={this.props.clickedArtist.image_url}></Card.Img>
					</Modal.Footer>
				</Modal> */}
				<Modal show={this.props.showModal} onHide={this.props.setShowModalFalse}>
					<Modal.Header closeButton>
						<Modal.Title>Test</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Card.Text></Card.Text>
						Test
						<Card.Text></Card.Text>
					</Modal.Body>

					<Modal.Footer>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}

export default ArtistsModal;