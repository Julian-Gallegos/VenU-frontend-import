import React from 'react';
// import Container from 'react-bootstrap/Container';



class CitySearchMap extends React.Component {
    
    render() {
        return (
            <>
                    <img id="map-image" className="mx-auto" src={this.props.mapURL} alt="A map"></img>
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

            </>
        )
    }
}

export default CitySearchMap;
