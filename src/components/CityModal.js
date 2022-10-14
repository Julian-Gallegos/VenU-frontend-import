import axios from 'axios';
import React from 'react';
import { Modal, Card, Button, Carousel} from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

class CityModal extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			isSaved: false,
		}
	}

	checkVenue = async () => {
		try {
			if (this.props.auth0.isAuthenticated) {
				const res = await this.props.auth0.getIdTokenClaims();
				const token = res.__raw;
				const config = {
					headers: {Authorization: `Bearer ${token}`},
					method: 'get',
					baseURL: SERVER_URL,
					url: '/profile'
				}
				const fetchedProfile = await axios(config);
				const index = fetchedProfile.data.venues.findIndex(venue => {
					return Number(venue.id) === Number(this.props.clickedVenue.id);
				});
				console.log(index);
				if (index > -1) {
					this.setState({ isSaved: true });
				}
			}
		} catch (error) {
			console.error('Error in checkVenue: ', error);
		}
	}

	handleSave = async (e) => {
		e.preventDefault();
		try {
			if (this.props.auth0.isAuthenticated) {
				const res = await this.props.auth0.getIdTokenClaims();
				const token = res.__raw;
				const config = {
					headers: {Authorization: `Bearer ${token}`},
					method: 'post',
					baseURL: SERVER_URL,
					url: `/venue/${this.props.clickedVenue.id}`
				}
				await axios(config);
				this.setState({isSaved: true});
			}
		} catch (error) {
			console.error('Error in handleSave: ', error);
		}
	}

	handleDeleteSave = async (e) => {
		e.preventDefault();
		try {
			if (this.props.auth0.isAuthenticated) {
				const res = await this.props.auth0.getIdTokenClaims();
				const token = res.__raw;
				const config = {
					headers: {Authorization: `Bearer ${token}`},
					method: 'delete',
					baseURL: SERVER_URL,
					url: `/venue/${this.props.clickedVenue.id}`
				}
				await axios(config);
				this.setState({isSaved: false});
			}
		} catch (error) {
			console.error('Error in handleDeleteSave: ', error);
		}
	}

	componentDidMount() {
		this.checkVenue();
	}

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
								<Carousel.Item key={event.id}>
								<div style={{height: '250px'}} >
								<h6>{event.title}</h6>
								<p>Type: {event.type}</p>
								<p>Date: {event.date}</p>
								<p>Time: {event.time}</p>
								{this.state.isSaved ? <Button onClick={this.handleDeleteSave}>Remove Venue</Button> : <Button onClick={this.handleSave}>Save Venue</Button>}
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

export default withAuth0(CityModal);