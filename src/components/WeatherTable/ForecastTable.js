import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

export default class ForecastTable extends React.Component {

    state = {
        visible: false
    };

    clickHandler = () => {
        const {name} = this.props.currentCityInfo;
        if (this.state.visible === false) {
            this.setState({visible: true});
            this.props.weatherForecastRequest(name);
        } else {
            this.setState({visible: false});
        }
    };

    render() {

        return (
            <div className="forecast-table">
                <RaisedButton label="Show 5 days forecast" primary={true} onTouchTap={this.clickHandler} />
                <div className="table-holder" style={{display: this.state.visible ? 'block' : 'none'}}>
                    <table >
                        <thead>
                        <tr><th>humidity</th><th>pressure</th><th>temp</th><th>temp_max</th><th>temp_min</th></tr>
                        </thead>


                    </table>
                </div>
            </div>
        )
    }
}
//
// <tbody>
// <tr><td>{humidity}</td><td>{pressure}</td><td>{temp}</td><td>{temp_max}</td><td>{temp_min}</td><td>
//     <img src={`http://openweathermap.org/img/w/${icon}.png`} alt=""/></td></tr>
// </tbody>

PropTypes.ForecastTable = {
    weatherForecastRequest: PropTypes.func.isRequired,
    currentCityInfo: PropTypes.object
};