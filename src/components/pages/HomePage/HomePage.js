import React from 'react';
import SearchForm from '../../SearchForm/SearchForm';
import WeatherTable from '../../WeatherTable/WeatherTable';
import ButtonList from '../../ButtonList/ButtonList';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Map from '../../Map/Map';
import './HomePage.css';

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        injectTapEventPlugin();
    }

    render() {
        return (
            <div className="app">

                <SearchForm onSubmit={this.props.handleSearch}/>
                <ButtonList
                    cityRemove={this.props.cityRemove}
                    cityList={this.props.currentCityInfo.cities}
                    cityChange={this.props.handleChange}
                />
                <WeatherTable
                    cityAdd={this.props.cityAdd}
                    currentCityInfo={this.props.currentCityInfo}
                    weatherForecastRequest={this.props.weatherForecastRequest}
                />
                <Map currentCoord={this.props.currentCityInfo.coord}/>

            </div>
        );
    }
}