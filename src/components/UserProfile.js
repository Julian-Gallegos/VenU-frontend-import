import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header.js';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
            //clickedArtist: {},
        }
    }

    setShowModalTrue = () => {
        this.setState({ showModal: true });
        //const filtered
    }

    setShowModalFalse = () => {
        this.setState({ showModal: false })
    }



    render() {
        return (
            <>
                <Header handleFormSubmit={this.props.handleFormSubmit} handleFormChange={this.props.handleFormChange} searchQuery={this.props.searchQuery} />
                <Container>
                    <div className="saved-venue-artist-div">
                        <div className="saved-div-container">
                            <h2>Saved Venues</h2>
                            <div className="saved-div" >
                                <p >Hello world</p>

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
            </>
        )
    }
}

export default UserProfile;
