import React from 'react';
import { Modal, Card, Button, Carousel} from 'react-bootstrap';


class ArtistsModal extends React.Component {
	render() {
		return (
			<>
			<div style={{width: '1000px'}}>
				<Modal show={this.props.showModal} onHide={this.props.setShowModalFalse} >
					<Modal.Header closeButton>
						<Modal.Title><h2>{this.props.clickedArtist.name}</h2></Modal.Title>
					</Modal.Header>

					<Modal.Body >
						<Carousel variant="light" style={{color: 'rgba(0 0 0 0)', backgroundColor: 'rgba(0 0 0 0),'}}>
						{this.props.events.length > 0 ? this.props.events.map(event => {
							return (
								<Carousel.Item key={event}>
								<div style={{height: '350px', width: '1000px', marginLeft: '25px'}}>
									
									<h6>{event.title} at {event.venue_name}</h6>
									<p>{event.location}</p>
									<p>Type: {event.type}</p>
									<p>Date: {event.date}</p>
									<p>Time: {event.time}</p>
									<p>{event.prices}</p>
									<Button>Save Venue</Button>
									</div>
								</Carousel.Item>
							)
						}) : <Card.Text><div>NO UPCOMING EVENTS</div></Card.Text>
						}
						</Carousel>
					</Modal.Body>
					<Modal.Footer>
					</Modal.Footer>
				</Modal>
				</div>
			</>
		)
	}
}

export default ArtistsModal;