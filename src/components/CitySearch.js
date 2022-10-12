import React from 'react';
import Header from './Header.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CityCard from './CityCard.js';
import CityModal from './CityModal.js';

import axios from 'axios';
import CitySearchMap from './CitySearchMap.js';

const VENUE_API = process.env.REACT_APP_VENUE_API;
const MAP_API = process.env.REACT_APP_MAP_API;
const MUSIC_KEY = process.env.REACT_APP_MUSIC_KEY;
const MAP_KEY = process.env.REACT_APP_MAP_KEY;

class CitySearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            venues: [],
            location: {},
            cityMap: '',
            currentLat:'',
            currentLon: '',
            venueCoordinates: [],
            error: false,
            errorMessage: '',
            showModal: false,
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
        this.setState({ venues: venuesData.venues },
            this.getCoordinates(
                this.state.venues
            ));
    }

    handleMap = async (e) => {
        e.preventDefault();
        try {
            const locationAPI = `https://us1.locationiq.com/v1/search.php?key=${MAP_KEY}&q=${this.state.searchQuery}&format=json`
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
        getCoordinates = async (venues) => {
            const coordinatesArr = [];
            venues.forEach(v => {
                const coordinate = [v.location.lat, v.location.lon];
                coordinatesArr.push(coordinate);
            })
            this.setState({ venueCoordinates: coordinatesArr });
        }


    componentDidMount() {
        this.getVenues();
    }

    render() {
        return (
            <>
                <Header handleFormSubmit={this.props.handleFormSubmit} handleFormChange={this.props.handleFormChange} searchQuery={this.props.searchQuery} redirectHandler={this.props.redirectHandler}/>
                <Container>
                    <h2>Search by Location</h2>
                    <CitySearchMap></CitySearchMap>
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