import React from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
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
            eventsData: [],
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
                this.setState({ venues: fetchedProfile.data.venues, performers: fetchedProfile.data.artists }, () => this.handleAPI());
            }
        } catch (error) {
            console.error('Error in checkVenue: ', error);
        }
    }

    handleAPI = async () => {
        this.handleVenuesAPI();
        this.handleArtistsAPI();
        this.handleEventsAPI();
    }

    handleVenuesAPI = () => {
        this.state.venues.forEach(async (venue_id) => {
            try {
                const response = await axios.get(`${VENUE_API}/venues/${venue_id.id}?client_id=${VENUE_KEY}`);
                const venuesData = response.data;
                this.setState({ venuesData: [...this.state.venuesData, venuesData] });
            } catch (error) {
                console.error('Error in handleVenuesAPI');
            }
        });

    };
    handleArtistsAPI = async () => {
        this.state.performers.forEach(async (performer_id) => {
            try {
                const response = await axios.get(`${VENUE_API}/performers/${performer_id.id}?client_id=${VENUE_KEY}`);
                const performersData = response.data;
                this.setState({ performersData: [...this.state.performersData, performersData] });
            } catch (error) {
                console.error('Error in handleArtistsAPI');
            }
        });
    };
    handleEventsAPI = async () => {
        this.state.performers.forEach((performer_id) => {
            this.state.venues.forEach(async (venues_id) => {
                try {
                    const response = await axios.get(`${VENUE_API}/events?performers.id=${performer_id.id}&venue.id=${venues_id.id}&client_id=${VENUE_KEY}`);
                    const eventsData = response.data;
                    this.setState({ eventsData: [...this.state.eventsData, eventsData] }, console.log(this.state.eventsData));
                } catch (error) {
                    console.error('Error in handleEventsAPI');
                }
            });
        });
    }

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
                                            return (
                                                <div key={`venue${idx}`} style={{ color: 'black' }}>{venue.name}</div>
                                            );
                                        })}
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="saved-div-container">
                            <h2>Saved Artists</h2>
                            <div className="saved-div">
                                <Container className="venue-results">
                                    <Row>
                                        {this.state.performersData.map((performer, idx) => {
                                            return (
                                                <div key={`performer${idx}`} style={{ color: 'black' }}>{performer.name}</div>
                                            );
                                        })}
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Link to Favorites</h2>
                        <Container className="link-to-favorites">
                            <Row>
                                {this.state.eventsData.map((event, idx) => {
                                    return (
                                        <div key={`event${idx}`} style={{ color: 'black' }}>{event.title} {event.datetime_local}</div>
                                    );
                                })}
                            </Row>
                        </Container>
                    </div>
                </Container>
                {this.props.redirectToProfile() ? <Navigate to={`/userprofile`} /> : <></>}
            </>
        )
    }
}

export default withAuth0(UserProfile);
