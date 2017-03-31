import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
    initialCity: state.cities[0],
    cityInfo: state.cityInfo,
    currentCity: state.currentCity,
    cityList: state.cities,
    coord: {
        lat: state.coord.lat,
        lon: state.coord.lon
    }
});

const mapDispatchToProps =  dispatch => ({
    getWeather(city) {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0668067898307a2c11b3ef3f78365eb2&units=metric`).then((data)=> {
            return data.json();
        }).then((data)=> {
            setTimeout(function () {
                dispatch({ type: 'FETCH_DATA', payload: data });
            }, 0)
        }).catch(error => {
            console.log('error');
        });
    },

    changeLocation: (location)=> {
        dispatch({ type: 'CHANGE_LOCATION', payload: location });
    },

    onAddCity: (city) => {
        dispatch({ type: 'ADD_CITY', payload: city });
    },

    onRemoveCity: (city) => {
        dispatch({ type: 'REMOVE_CITY', payload: city });
    }
});

export default connect( mapStateToProps, mapDispatchToProps )(App);