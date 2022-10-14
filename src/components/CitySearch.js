import React from 'react';
import Header from './Header.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CityCard from './CityCard.js';
import CityModal from './CityModal.js';
import axios from 'axios';
import CitySearchMap from './CitySearchMap.js';



const VENUE_API = process.env.REACT_APP_VENUE_API;
const VENUE_KEY = process.env.REACT_APP_VENUE_KEY;
const MAP_KEY = process.env.REACT_APP_MAP_KEY;

class CitySearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            venues: [],
            location: {},
            // cityMap: '',
            // currentLat: '',
            // currentLon: '',
            // venueCoordinates: [],
            error: false,
            errorMessage: '',
            showModal: false,
            mapURL: '',
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
        this.setState({ venues: venuesData.venues }, () => this.handleMap());
    }

    getEvents = async () => {
        const response = await axios.get(`${process.env.REACT_APP_VENUE_API}/events?venue.id=${this.state.clickedVenue.id}&client_id=${VENUE_KEY}`);
        const eventsData = response.data.events.map(event => new Event(event));
        this.setState({ events: eventsData }, console.log(eventsData));

    }


    handleMap = async () => {
        try {
            const locationAPI = `https://us1.locationiq.com/v1/search.php?key=${MAP_KEY}&q=${this.props.searchQuery}&format=json`
            const locationRes = await axios.get(locationAPI);
            this.setState({
                location: locationRes.data[0],
                // cityMap: `https://maps.locationiq.com/v3/staticmap?key=${MAP_KEY}&center=${locationRes.data[0].lat},${locationRes.data[0].lon}&zoom=12`,
            }, () => this.displayMap());
        } catch (error) {
            console.log(error);
            this.setState({ error: true });
            this.setState({ errorMessage: error.message });
        }
    }

    displayMap = async () => {
        const markers = this.state.venues.map(venue => {
            return `markers=icon:tiny-red-cutout|${venue.location.lat},${venue.location.lon}`;
        });
        const markersString = markers.join('&');
        console.log(markersString);
        const mapURL = `https://maps.locationiq.com/v3/staticmap?key=pk.e38cc6fcabaadb8fe6a4d895963b9757&zoom=12&size=1000x600&format=png&maptype=roadmap&${markersString}`;
        this.setState({ mapURL: mapURL });
    }

    handleSubmit = (e) => {
        this.props.handleFormSubmit(e);
        this.getVenues();
    }


    componentDidMount() {
        this.getVenues();
    }

    render() {
        return (
            <>
                <Header handleFormSubmit={this.handleSubmit} handleFormChange={this.props.handleFormChange} searchQuery={this.props.searchQuery} redirectHandler={this.props.redirectHandler} />

                <div>
                    <h2 id="search-h2">Search by Location</h2>

                    <div class="map-container">
                        <CitySearchMap mapURL={this.state.mapURL} />
                    </div>
                </div>
                <div id="venue-container">
                    <h2 id='venue-header'> Venue Results </h2>                
                        <div id="venue-results">
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

                        </div>
                </div>
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