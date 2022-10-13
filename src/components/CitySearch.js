import React from 'react';
import Header from './Header.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CityCard from './CityCard.js';
import CityModal from './CityModal.js';
import axios from 'axios';
import CitySearchMap from './CitySearchMap.js';

const VENUE_API = process.env.REACT_APP_VENUE_API;
// const MAP_API = process.env.REACT_APP_MAP_API;
const MUSIC_KEY = process.env.REACT_APP_MUSIC_KEY;
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
        this.setState({ showModal: false });
    }

    getVenues = async () => {
        const response = await axios.get(`${VENUE_API}/venues?city=${this.props.searchQuery}&client_id=${MUSIC_KEY}`);
        const venuesData = response.data;
        this.setState({ venues: venuesData.venues }, () => this.handleMap());
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

    // getCoordinates = async (venues) => {
    //     const coordinatesArr = [];
    //     venues.forEach(v => {
    //         const coordinate = [v.location.lat, v.location.lon];
    //         coordinatesArr.push(coordinate);
    //     })
    //     this.setState({ venueCoordinates: coordinatesArr });
    // }

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
                <Container>
                    <h2>Search by Location</h2>

                    <div className="search-by-location">
                        <CitySearchMap mapURL={this.state.mapURL} />
                    </div>
                </Container>
                <Container>
                    <h2> Venue Results </h2>
                    <Container className="venue-results">
                        <Row>
                            <CityCard setShowModalTrue={this.setShowModalTrue} />
                            <CityModal showModal={this.state.showModal} setShowModalFalse={this.setShowModalFalse} />
                        </Row>
                    </Container>
                </Container>
            </>
        )
    }
}

export default CitySearch;