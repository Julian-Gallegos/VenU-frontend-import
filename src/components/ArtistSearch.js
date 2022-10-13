import React from 'react';
import Header from './Header.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ArtistCard from './ArtistCard.js';
import ArtistsModal from './ArtistsModal.js';
import axios from 'axios';

const VENUE_API = process.env.REACT_APP_VENUE_API;
const VENUE_KEY = process.env.REACT_APP_VENUE_KEY;

class ArtistSearch extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
    showModal: false,
			clickedArtist: {},
			artists: []
		}
	}

setShowModalTrue = () => {
		this.setState({ showModal: true });
		// console.log('yeah');
		// const filteredArtist = artists.filtered((artist)=>{
		// 	return artist._id === id;
		// });
		// this.setState({clickedArtist: filteredArtist[0]})
	}

	setShowModalFalse = () => {
		this.setState({ showModal: false })
	}

	getArtists = async () => {
		const res = await axios.get(`${VENUE_API}/performers?q=${this.props.searchQuery}&client_id=${VENUE_KEY}`);
		const artistsData = res.data;
		console.log(artistsData.performers);
		this.setState({artists: artistsData.performers})
	}

	componentDidMount() {
		this.getArtists();
	}

	render() {
		return (
			<>
				<Header handleFormSubmit={this.props.handleFormSubmit} handleFormChange={this.props.handleFormChange} searchQuery={this.props.searchQuery} redirectHandler={this.props.redirectHandler}/>
				<Container>
					<div className="saved-venue-artist-div">
						<div className="searched-artists">
							<h2>Searched Artist</h2>
							<div className="artist-info">
								{this.state.artists.map(artist => {
									return (
										<p>{artist.name}:{artist.image}</p>
									)
								})}
							</div>
						</div>
						<div className="upcoming-concerts">
							<h2>Upcoming Concerts</h2>
							<div className="artist-info">
							</div>
						</div>
					</div>
				</Container>

				<Container>
					<h2> Venue Results </h2>
					<Container className="venue-results">
						<Row>
							<ArtistCard setShowModalTrue={this.setShowModalTrue} />
							<ArtistsModal showModal={this.state.showModal} setShowModalFalse={this.setShowModalFalse} />
						</Row>
					</Container>
				</Container>
			</>
		)
	}
}

export default ArtistSearch;