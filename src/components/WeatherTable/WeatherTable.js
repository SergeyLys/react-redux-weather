import React from 'react';
import './WeatherTable.css';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ForecastTable from './ForecastTable';

export default class WeatherTable extends React.Component {
    render() {
        if (typeof this.props.currentCityInfo.cityInfo !== 'undefined') {
            var { name } = this.props.currentCityInfo.cityInfo;
            var {humidity,
                pressure,
                temp,
                temp_max,
                temp_min} = this.props.currentCityInfo.cityInfo.main;
            var icon = this.props.currentCityInfo.cityInfo.weather[0].icon;
        }

        return (
            <div className="weather-table-wrapper">

                <div className="weather-table-header">
                    <h1>{name}</h1>
                    {
                        this.props.currentCityInfo.cities.indexOf(name) === -1
                            ?
                            <FloatingActionButton
                                mini={true}
                                onClick={this.props.cityAdd.bind(null, name)}
                                secondary={true}
                                className='add-btn'
                            >
                                <ContentAdd />
                            </FloatingActionButton>
                            : null
                    }

                </div>
                <table>
                    <thead>
                        <tr><th>humidity</th><th>pressure</th><th>temp</th><th>temp_max</th><th>temp_min</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>{humidity}</td><td>{pressure}</td><td>{temp}</td><td>{temp_max}</td><td>{temp_min}</td><td>
                            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt=""/></td></tr>
                    </tbody>
                </table>

                <ForecastTable
                    currentCityInfo={this.props.currentCityInfo.cityInfo}
                    weatherForecastRequest={this.props.weatherForecastRequest}
                />

            </div>
        )
    }
}

WeatherTable.PropTypes = {
    currentCityInfo: PropTypes.object.isRequired
};