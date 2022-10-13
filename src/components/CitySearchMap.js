import React from 'react';
import Container from 'react-bootstrap/Container';



class CitySearchMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapURL: ''
        }
    }

    displayMap = async () => {
        const markers = this.props.venues.map(venue => {
            return `icon:tiny-red-cutout|${venue.location.lat},${venue.location.lon}`;
        });
        const markersString = markers.join('&');
        const mapURL = `https://maps.locationiq.com/v3/staticmap?key=pk.e38cc6fcabaadb8fe6a4d895963b9757&center=${this.props.location.lat},${this.props.location.lon}&zoom=12&size=800x400&format=png&maptype=roadmap&${markersString}`;
        this.setState({mapURL: mapURL});
    }
    componentDidMount() {
        this.displayMap();
    }
    render() {
        return (
            <>
                <Container>
                    <img className="mx-auto" src={this.state.mapURL} alt="A map"></img>
                    {/* <Card className='my-4'>
                        <Card.Body>
                            <Card.Title>{this.props.location.display_name}</Card.Title>
                            <Card.Text>
                                {this.props.location.lat}
                                {this.props.location.lon}
                            </Card.Text>
                            <Card.Img variant="top" src={this.props.cityMap} />
                        </Card.Body>
                    </Card> */}
                </Container>
             

            </>
        )
    }
}

export default CitySearchMap;
