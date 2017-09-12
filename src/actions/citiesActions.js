import axios from 'axios';

export default class CitiesActions {
    static weatherRequest(city) {
        return dispatch => {
            return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0668067898307a2c11b3ef3f78365eb2&units=metric`)
                .then(res => {
                    dispatch({type: 'GET_WEATHER', payload: res.data})
                })
                .catch(err => console.log(err));
        }
    }

    static weatherForecastRequest(city) {
        return dispatch => {
            console.log(city);
            return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=0668067898307a2c11b3ef3f78365eb2&units=metric`)
                .then(res => {
                    console.log(res);
                    dispatch({type: 'GET_WEATHER_FORECAST', payload: res.data})
                })
                .catch(err => console.log(err));
        }
    }

    static changeLocation(location) {
        return dispatch => {
            dispatch({type: 'CHANGE_LOCATION', payload: location});
        }
    }

    static cityAdd(city) {
        return dispatch => {
            dispatch({type: 'ADD_CITY', payload: city});
        }
    }

    static cityRemove(city) {
        return dispatch => {
            dispatch({type: 'REMOVE_CITY', payload: city});
        }
    }
}
