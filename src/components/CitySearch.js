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
            venues: []
        }
    }

    getVenues = async () => {
        const response = await axios.get(`${VENUE_API}/venues?city=${this.props.searchQuery}&client_id=${MUSIC_KEY}`);
        const venuesData = response.data;
        this.setState({ venues: venuesData.venues });
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