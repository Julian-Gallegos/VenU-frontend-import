import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArtistCard from './ArtistCard.js';
import ArtistsModal from './ArtistsModal.js';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const VENUE_API = process.env.REACT_APP_VENUE_API;
const VENUE_KEY = process.env.REACT_APP_VENUE_KEY;

class ArtistSearch extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			clickedArtist: {},
			artists: [],
			events: []
		}
	}

	setShowModalTrue = (id) => {

		this.setState({ showModal: true });
		const filteredArtist = this.state.artists.filter(artist => artist.id === id);
		this.setState({clickedArtist: filteredArtist[0]}, () => this.getEvents());
		
	}

	setShowModalFalse = () => {
		this.setState({ showModal: false })
	}

	getArtists = async () => {
		const res = await axios.get(`${VENUE_API}/performers?q=${this.props.searchQuery}&client_id=${VENUE_KEY}`);
		const artistsData = res.data;
		this.setState({ artists: artistsData.performers })
	}


	getEvents = async () => {
		const response = await axios.get(`${process.env.REACT_APP_VENUE_API}/events?performers.id=${this.state.clickedArtist.id}&client_id=${process.env.REACT_APP_VENUE_KEY}`);
		const eventsData = response.data.events.map(event => new Event(event));
		this.setState({ events: eventsData }, console.log(eventsData));
  }

	// handleSaveVenue = async () =>{

	// }

	handleSubmit = (e) => {
		this.props.handleFormSubmit(e);
		this.getArtists();
	}

	componentDidMount() {
		this.getArtists();
	}

	render() {
		return (
			<>
				<Container>
					<h2 id='artist-results'> Performers</h2>
					<Container>
						<Row>
							{this.state.artists.map((artist, idx) => {
								return (
									<Col>
									<ArtistCard
										key={idx}
										setShowModalTrue={this.setShowModalTrue}
										name={artist.name}
										address={artist.address}
										image={artist.image}
										id={artist.id}
									/>
									</Col>
								);
							})}
							<ArtistsModal showModal={this.state.showModal} setShowModalFalse={this.setShowModalFalse} clickedArtist={this.state.clickedArtist} events={this.state.events}/>
						</Row>
					</Container>
				</Container>
				{this.props.redirectToProfile() ? <Navigate to={`/userprofile`} /> : <></>}
			</>
		)
	}
}

class Event {
	constructor(event) {
			this.title = event.short_title;
			this.type = event.type.toUpperCase();
			let time_date = event.datetime_local.split('T');
			this.time = time_date[1];
			this.date = (/[0-9]+.[0-9]+.[0-9]+/).exec(event.datetime_local);
			this.prices = `Average Ticket Price : $${event.stats.average_price}`
			this.location = `${event.venue.address}, ${event.venue.extended_address}`;
			this.venue_name = event.venue.name;
	}
}

export default ArtistSearch;