import React from 'react';
import Header from './Header.js';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

const ARTIST_API = process.env.REACT_APP_ARTIST_API;
const MUSIC_KEY = process.env.REACT_APP_MUSIC_KEY;

class ArtistSearch extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			artists: []
		}
	}

	getArtists = async () => {
		const res = await axios.get(`${ARTIST_API}/performers?q=${this.props.searchQuery}&client_id=${MUSIC_KEY}`);
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
				<Header handleFormSubmit={this.props.handleFormSubmit} handleFormChange={this.props.handleFormChange} searchQuery={this.props.searchQuery} />
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
							<Card style={{ width: '12rem' }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>Venue #1</Card.Title>
									<Card.Text>
										Info on Venue #1
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>

							<Card style={{ width: '12rem' }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>Venue #1</Card.Title>
									<Card.Text>
										Info on Venue #1
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
							<Card style={{ width: '12rem' }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>Venue #1</Card.Title>
									<Card.Text>
										Info on Venue #1
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
							<Card style={{ width: '12rem' }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>Venue #1</Card.Title>
									<Card.Text>
										Info on Venue #1
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>

							<Card style={{ width: '12rem' }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>Venue #1</Card.Title>
									<Card.Text>
										Info on Venue #1
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
							<Card style={{ width: '12rem' }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>Venue #1</Card.Title>
									<Card.Text>
										Info on Venue #1
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
							<Card style={{ width: '12rem' }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>Venue #1</Card.Title>
									<Card.Text>
										Info on Venue #1
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
							<Card style={{ width: '12rem' }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>Venue #1</Card.Title>
									<Card.Text>
										Info on Venue #1
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
						</Row>
					</Container>
				</Container>

			</>
		)
	}
}

export default ArtistSearch;