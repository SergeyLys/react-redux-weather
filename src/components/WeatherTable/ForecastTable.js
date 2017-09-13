import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

export default class ForecastTable extends React.Component {

    state = {
        visible: false
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.currentCityInfo.coord !== nextProps.currentCityInfo.coord)
            this.setState({visible: false});
    }

    clickHandler = () => {
        const {name} = this.props.currentCityInfo.cityInfo;

        if (this.state.visible === false) {
            this.setState({visible: true});
            this.props.weatherForecastRequest(name);
        } else {
            this.setState({visible: false});
        }
    };

    render() {

        const {visible} = this.state;

        const dateRow = !this.props.currentCityInfo.forecast.list ? null
            : this.props.currentCityInfo.forecast.list.map((item, index) => {
            return (

                <tr key={index}>
                    <td>{item.dt_txt}</td>
                    <td>{item.main.humidity}</td>
                    <td>{item.main.pressure}</td>
                    <td>{item.main.temp}</td>
                    <td>{item.main.temp_max}</td>
                    <td>{item.main.temp_min}</td>
                    <td><img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt=""/></td>
                </tr>

            )
        });

        return (
            <div className="forecast-table">
                <div className="forecast-button-holder">
                    <RaisedButton
                        label={`${visible ? 'Hide' : 'Show'} 5 days forecast`}
                        primary={true}
                        onTouchTap={this.clickHandler}
                    />
                </div>

                <div className="table-holder" style={{display: this.state.visible ? 'block' : 'none'}}>
                    <table >
                        <thead>
                            <tr><th>time</th><th>humidity</th><th>pressure</th><th>temp</th><th>temp_max</th><th>temp_min</th></tr>
                        </thead>
                        <tbody>
                            {dateRow}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

PropTypes.ForecastTable = {
    weatherForecastRequest: PropTypes.func.isRequired,
    currentCityInfo: PropTypes.object
};