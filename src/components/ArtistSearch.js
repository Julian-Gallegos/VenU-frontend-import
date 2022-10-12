import React from 'react';
import Header from './Header.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ArtistCard from './ArtistCard.js';
import ArtistsModal from './ArtistsModal.js';


class ArtistSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
			// clickedArtist: {},

		}
	}

	setShowModalTrue = () => {
		this.setState({ showModal: true });
		console.log('yeah');
		// const filteredArtist = data.filtered((artist)=>{
		// 	return artist._id === id;
		// });
		// this.setState({clickedArtist: filteredArtist[0]})
	}

	setShowModalFalse = () => {
		this.setState({ showModal: false })
	}

	render() {
		return (
			<>
				<Header handleFormSubmit={this.props.handleFormSubmit} handleFormChange={this.props.handleFormChange} searchQuery={this.props.searchQuery} />
				<Container>
					<div className="saved-venue-artist-div">
						<div className="searched-artists">
							<h2>Searched Artist</h2>
							<div className="artist-info">
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
							</div>
						</div>
						<div className="upcoming-concerts">
							<h2>Upcoming Concerts</h2>
							<div className="artist-info">
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
								<p>Hello world</p>
							</div>
						</div>
					</div>
				</Container>

				<Container>
					<h2> Venue Results </h2>
					<Container className="venue-results">
						<Row>
							<ArtistCard setShowModalTrue={this.setShowModalTrue} />
							<ArtistsModal showModal={this.state.showModal} setShowModalFalse={this.setShowModalFalse}/>
						</Row>
					</Container>
				</Container>
			</>
		)
	}
}

export default ArtistSearch;