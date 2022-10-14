import React from 'react';
// import Container from 'react-bootstrap/Container';



class CitySearchMap extends React.Component {
    
    render() {
        return (
            <>
                    <img id="map-image" className="mx-auto" src={this.props.mapURL} alt="A map"></img>
    
            </>
        )
    }
}

export default CitySearchMap;
