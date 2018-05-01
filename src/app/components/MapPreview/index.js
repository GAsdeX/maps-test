import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"



class SimpleMap extends Component {

    constructor(props) {
        super(props);
        this.center = {
            lat: this.props.data.lat,
            lng: this.props.data.lng
        };
        this.zoom = 5;
    }

    render() {


        return (
            // Important! Always set the container height explicitly

            <div style={{ height: '200px', width: '100%' }}>

                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCwZwziVcAJzrnuwLdxSZaKICye6tedR_k' }}
                    defaultCenter={this.center}
                    defaultZoom={this.zoom}
                >

                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;