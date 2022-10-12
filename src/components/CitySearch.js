import React from 'react';
import Header from './Header.js';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

const VENUE_API = process.env.REACT_APP_VENUE_API;
const MAP_API = process.env.REACT_APP_MAP_API;
const MUSIC_KEY = process.env.REACT_APP_MUSIC_KEY;

class CitySearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            venues: [],
            location: {},
            cityMap: '',
            error: false,
            errorMessage: '',
        }
    }

    getVenues = async () => {
        const response = await axios.get(`${VENUE_API}/venues?city=${this.props.searchQuery}&client_id=${MUSIC_KEY}`);
        const venuesData = response.data;
        this.setState({ venues: venuesData.venues });
    }

    handleMap = async () => {
        e.preventDefault();
        try {
            const locationAPI = `https://us1.locationiq.com/v1/search.php?key=${MAP_API}&q=${this.state.searchQuery}&format=json`
            const locationRes = await axios.get(locationAPI);
            console.log(locationRes.data[0]);
            this.setState({
                location: res.data[0],
                cityMap: `https://maps.locationiq.com/v3/staticmap?key=${MAP_API}&center=${res.data[0].lat},${res.data[0].lon}&zoom=12`,
            });
        } catch (error) {
            console.log(error);
            this.setState({ error: true });
            this.setState({ errorMessage: error.message });
        }

        componentDidMount() {
            this.getVenues();
        }

        render() {
            return (
                <>
                    <Header handleFormSubmit={this.props.handleFormSubmit} handleFormChange={this.props.handleFormChange} searchQuery={this.props.searchQuery} />
                    <Container>
                        <h2>Search by Location</h2>
                        <div className="search-by-location">
                            {this.state.venues.map(venue => { //This should be changed to a map later
                                return (
                                    <p>

                                        {venue.name}: {venue.address}

                                    </p>
                                )
                            })}
                            <p>{this.props.searchQuery}</p>
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

export default CitySearch;