import React from 'react';
import { Modal, Card, Button, Carousel} from 'react-bootstrap';


class CityModal extends React.Component {
	render() {
		return (
			<>
				<Modal show={this.props.showModal} onHide={this.props.setShowModalFalse} >
					<Modal.Header closeButton>
						<Modal.Title><h2>{this.props.clickedVenue.name}</h2>  <p>{this.props.clickedVenue.address}, {this.props.clickedVenue.extended_address}</p></Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Carousel variant="light" style={{color: 'rgba(0 0 0 0)', backgroundColor: 'rgba(0 0 0 0),'}}>
						{this.props.events.length > 0 ? this.props.events.map(event  => {
							return(
								<Carousel.Item key={event}>
								<div style={{height: '250px'}} >
								<h6>{event.title}</h6>
								<p>Type: {event.type}</p>
								<p>Date: {event.date}</p>
								<p>Time: {event.time}</p>
								<Button>Save Venue</Button>
								</div>
					
								</Carousel.Item>
								
							)
						}): <Card.Text><div>NO UPCOMING EVENTS</div></Card.Text>
					}
					</Carousel>
					</Modal.Body>
					<Modal.Footer>
					
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}

export default CityModal;