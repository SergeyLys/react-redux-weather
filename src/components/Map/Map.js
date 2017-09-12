import React from 'react';
// import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
// import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import PropTypes from 'prop-types';

const styles = {
    'height': 500
};

const google = window.google;

export default class Map extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (this.props.currentCoord !== nextProps.currentCoord) {
            this.initMap(nextProps.currentCoord.lat, nextProps.currentCoord.lon);
        }
    }

    initMap = (lat, lng) => {
        const center = {lat: lat, lng: lng};

        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 16,
            center: center,
            draggable: true,
            zoomControl: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            },
            panControl: false,
            mapTypeControl: false,
            streetViewControl: false
        });

        var marker = new google.maps.Marker({
            position: center,
            map: map,
            title: "my place"
        });
    };

    render() {
        return (
            <div  className="map-wrapper">
                <div style={styles} id="map"></div>
            </div>
        )
    }
}

Map.PropTypes = {
    currentCoord: PropTypes.object.isRequired
};