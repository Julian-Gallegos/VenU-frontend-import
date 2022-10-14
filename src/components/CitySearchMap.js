import React from 'react';
import Container from 'react-bootstrap/Container';



class CitySearchMap extends React.Component {
    
    render() {
        return (
            <>
                    <img className="city-map" src={this.props.mapURL} alt="A map"></img>
                 
            </>
        )
    }
}

export default CitySearchMap;
