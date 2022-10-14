import React from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import CityCard from './CityCard';
import Row from 'react-bootstrap/Row';
import CityModal from './CityModal.js';
import { withAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const VENUE_API = process.env.REACT_APP_VENUE_API;
const VENUE_KEY = process.env.REACT_APP_VENUE_KEY;

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            venues: [],
            venuesData: [],
            performers: [],
            performersData: [],
        }
    }

    fetchSaved = async () => {
        try {
            if (this.props.auth0.isAuthenticated) {
                const res = await this.props.auth0.getIdTokenClaims();
                const token = res.__raw;
                const config = {
                    headers: { Authorization: `Bearer ${token}` },
                    method: 'get',
                    baseURL: SERVER_URL,
                    url: '/profile'
                }
                const fetchedProfile = await axios(config);
                console.log(fetchedProfile.data.venues)
                this.setState({ venues: fetchedProfile.data.venues, artists: fetchedProfile.data.artists }, () => this.handleAPI());
            }
        } catch (error) {
            console.error('Error in checkVenue: ', error);
        }
    }

    handleAPI = async () => {
        this.handleVenuesAPI();
        this.handleArtistsAPI();
    }

    handleVenuesAPI = () => {
        this.state.venues.forEach(async (venue_id) => {
            try {
                const response = await axios.get(`${VENUE_API}/venues/${venue_id.id}?client_id=${VENUE_KEY}`);
                const venuesData = response.data;
                this.setState({ venuesData: [...this.state.venuesData, venuesData] });
            } catch(error) {
                console.error('Error in handleVenuesAPI');
            }
        });

    };
    handleArtistsAPI = async () => {
        this.state.performers.forEach(async (performer_id) => {
            try {
                const response = await axios.get(`${VENUE_API}/performers/${performer_id.id}?client_id=${VENUE_KEY}`);
                const performersData = response.data;
                this.setState({ venues: [...this.state.performersData, performersData] });
            } catch(error) {
                console.error('Error in handleVenuesAPI');
            }
        });
    };

    componentDidMount() {
        this.fetchSaved();
    }

    render() {
        // if (this.state.venuesData.length <=0) {
        //     this.fetchSaved();
        // }

        return (
            <>
                <Container>
                    <div className="saved-venue-artist-div">
                        <div className="saved-div-container">
                            <h2>Saved Venues</h2>
                            <div className="saved-div" >
                                <Container className="venue-results">
                                    <Row>
                                        {this.state.venuesData.map((venue, idx) => {
                                            console.log(venue);
                                            return (
                                                <div>{venue.name}</div>
                                            );
                                        })}
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="saved-div-container">
                            <h2>Saved Artists</h2>
                            <div className="saved-div">
                                <p>Hello world</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Link to Favorites</h2>
                        <Container className="link-to-favorites">
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
                        </Container>
                    </div>
                </Container>
                {this.props.redirectToProfile() ? <Navigate to={`/userprofile`} /> : <></>}
            </>
        )
    }
}

export default withAuth0(UserProfile);
