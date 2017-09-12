import React, {Component} from 'react';
import HomePage from './components/pages/HomePage/HomePage';
import {connect} from 'react-redux';
import CitiesActions from './actions/citiesActions';

const google = window.google;

class App extends Component {
    componentDidMount() {

        if (this.props.currentCityInfo.cities.length !== 0) {
            console.log(google);
            this.props.weatherRequest(this.props.currentCityInfo.cities[0]);
        } else {
            this.getLocation();
        }
    }

    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };

    setPosition = (position) => {
        const geocoder = new google.maps.Geocoder();
        


        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        this.props.weatherRequest('Kharkiv');

        geocoder.geocode({'latLng': latlng}, (results, status) => {

            if (status === google.maps.GeocoderStatus.OK) {

                if (results.length) {
                    const string = results[3].formatted_address;
                    this.props.weatherRequest(string.match(/\S+(?=,)/g)[0])
                } else {
                    console.log("No results found");
                }
            } else {
                console.log("Geocoder failed due to: " + status);
            }
        });
    };

    handleChange = (city) => {
        this.props.currentCityInfo.cityInfo.name !== city ? this.props.weatherRequest(city) : '';
    };

    handleSearch = (city) => {
        if (this.props.currentCityInfo.cities.indexOf(city) === -1) {
            this.props.weatherRequest(city);
        }
    };

    cityAdd = (city) => {
        console.log();
        if (this.props.currentCityInfo.cities.indexOf(city) === -1) {
            this.props.cityAdd(city);
        }
    };

    cityRemove = (city) => {
        this.props.cityRemove(city);
    };

    render() {
        return (
            <HomePage
                weatherRequest={this.props.weatherRequest}
                weatherForecastRequest={this.props.weatherForecastRequest}
                currentCityInfo={this.props.currentCityInfo}
                cityRemove={this.cityRemove}
                cityAdd={this.cityAdd}
                handleChange={this.handleChange}
                handleSearch={this.handleSearch}
            />
        );
    }
}

const mapStateToProps = state => ({
    currentCityInfo: state.cities
});

export default connect(mapStateToProps, {
    weatherRequest: CitiesActions.weatherRequest,
    weatherForecastRequest: CitiesActions.weatherForecastRequest,
    changeLocation: CitiesActions.changeLocation,
    cityAdd: CitiesActions.cityAdd,
    cityRemove: CitiesActions.cityRemove,
})(App);