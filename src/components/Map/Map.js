import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    'height': 500
};

const google = window.google;

export default class MapComponent extends React.Component {

    componentWillUpdate(nextProps) {
        this.initMap(nextProps.currentCoord.lat, nextProps.currentCoord.lon);
    }

    initMap = (lat, lng) => {
        const center = {lat: lat, lng: lng};

        const map = new google.maps.Map(document.getElementById("map"), {
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

        const marker = new google.maps.Marker({
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

MapComponent.PropTypes = {
    currentCoord: PropTypes.object.isRequired
};