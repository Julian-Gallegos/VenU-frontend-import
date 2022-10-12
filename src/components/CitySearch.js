import React from 'react';
import Header from './Header.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CityCard from './CityCard.js';
import CityModal from './CityModal.js';

import axios from 'axios';

const VENUE_API = process.env.REACT_APP_VENUE_API;
const MAP_API = process.env.REACT_APP_MAP_API;
const MUSIC_KEY = process.env.REACT_APP_MUSIC_KEY;

class CitySearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
             showModal: false,
                // clickedArtist: {},
            venues: []
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
        this.setState({ venues: venuesData.venues });
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