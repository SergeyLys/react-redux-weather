import React from 'react';

export default class Map extends React.Component {
    constructor() {
        super();
        this.initMap = this.initMap.bind(this);
    }

    componentDidMount() {
        this.initMap(this.props.coord.lat, this.props.coord.lon);
    }

    shouldComponentUpdate(newprops) {
        return JSON.stringify(this.props.coord) !== JSON.stringify(newprops.coord);
    }

    componentDidUpdate() {
        this.initMap(this.props.coord.lat, this.props.coord.lon);
    }

    initMap(lat, lng) {
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
    }

    render() {
        return (
            <div>
                <div id="map"></div>
            </div>
        )
    }
}