import React from 'react';
import Header from './Header.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CityCard from './CityCard.js';
import CityModal from './CityModal.js';

import axios from 'axios';


const VENUE_API = process.env.REACT_APP_VENUE_API;
const MAP_API = process.env.REACT_APP_MAP_API;
const VENUE_KEY = process.env.REACT_APP_VENUE_KEY;

class CitySearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            venues: [],
            location: {},
            cityMap: '',
            error: false,
            errorMessage: '',
            showModal: false,
            clickedVenue: [],
            events: []
        }
    }

    setShowModalTrue = (id) => {
        this.setState({ showModal: true });
        const filteredVenue = this.state.venues.filter(venue => venue.id === id);
        this.setState({ clickedVenue: filteredVenue[0] }, () => this.getEvents());
    }

    setShowModalFalse = () => {
        this.setState({ showModal: false });
    }

    getVenues = async () => {
        const response = await axios.get(`${VENUE_API}/venues?city=${this.props.searchQuery}&client_id=${VENUE_KEY}`);
        const venuesData = response.data;
        this.setState({ venues: venuesData.venues });
    }

    getEvents = async () => {
        const response = await axios.get(`${process.env.REACT_APP_VENUE_API}/events?venue.id=${this.state.clickedVenue.id}&client_id=${process.env.REACT_APP_VENUE_KEY}`);
        const eventsData = response.data.events.map(event => new Event(event));
        this.setState({ events: eventsData }, console.log(eventsData));

    }

    handleMap = async (e) => {
        e.preventDefault();
        try {
            const locationAPI = `https://us1.locationiq.com/v1/search.php?key=${MAP_API}&q=${this.state.searchQuery}&format=json`
            const locationRes = await axios.get(locationAPI);
            console.log(locationRes.data[0]);
            this.setState({
                location: locationRes.data[0],
                cityMap: `https://maps.locationiq.com/v3/staticmap?key=${MAP_API}&center=${locationRes.data[0].lat},${locationRes.data[0].lon}&zoom=12`,
            });
        } catch (error) {
            console.log(error);
            this.setState({ error: true });
            this.setState({ errorMessage: error.message });
        }
    }

    componentDidMount() {
        this.getVenues();
    }

    render() {
        return (
            <>
                <Header handleFormSubmit={this.props.handleFormSubmit} handleFormChange={this.props.handleFormChange} searchQuery={this.props.searchQuery} redirectHandler={this.props.redirectHandler} />
                <Container>
                    <h2>Search by Location</h2>
                    <div className="search-by-location">
                        <p>{this.props.searchQuery}</p>
                    </div>
                </Container>
                <Container>
                    <h2> Venue Results </h2>
                    <Container className="venue-results">
                        <Row>
                            {this.state.venues.map((venue, idx) => {
                                return (
                                    <CityCard
                                        key={idx}
                                        setShowModalTrue={this.setShowModalTrue}
                                        name={venue.name}
                                        address={venue.address}
                                        id={venue.id}
                                    />
                                );
                            })}
                            <CityModal showModal={this.state.showModal} setShowModalFalse={this.setShowModalFalse} clickedVenue={this.state.clickedVenue} events={this.state.events} />
                        </Row>
                    </Container>
                </Container>
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
    }
}

export default CitySearch;