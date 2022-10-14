import React from 'react';
import axios from 'axios';
import { Modal, Card, Button, Carousel} from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

class ArtistsModal extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			isSaved: false,
		}
	}

	checkPerformer = async () => {
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
				const index = fetchedProfile.data.artists.findIndex(artist => {
					return Number(artist.id) === Number(this.props.clickedArtist.id);
				});
				console.log(index);
				if (index > -1) {
					this.setState({ isSaved: true });
				}
			}
		} catch (error) {
			console.error('Error in checkPerformer: ', error);
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
					url: `/artist/${this.props.clickedArtist.id}`
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
					url: `/artist/${this.props.clickedArtist.id}`
				}
				await axios(config);
				this.setState({isSaved: false});
			}
		} catch (error) {
			console.error('Error in handleDeleteSave: ', error);
		}
	}

	componentDidMount() {
		this.checkPerformer();
	}

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
									{this.state.isSaved ? <Button onClick={this.handleDeleteSave}>Remove Performer</Button> : <Button onClick={this.handleSave}>Save Performer</Button>}
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

export default withAuth0(ArtistsModal);