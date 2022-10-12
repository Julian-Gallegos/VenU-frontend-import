import React from 'react';
import Header from './Header.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CityCard from './CityCard.js';
import CityModal from './CityModal.js';

class CitySearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
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
        this.setState({ showModal: false })
    }

    render() {
        return (
            <>
                <Header handleFormSubmit={this.props.handleFormSubmit} handleFormChange={this.props.handleFormChange} searchQuery={this.props.searchQuery} />
                <Container>
                    <h2>Search by Location</h2>
                    <div className="search-by-location">
                        <p>{this.props.searchQuery}</p>
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