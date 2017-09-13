import React from 'react';
import SearchForm from '../../SearchForm/SearchForm';
import WeatherTable from '../../WeatherTable/WeatherTable';
import ButtonList from '../../ButtonList/ButtonList';
import MapComponent from '../../Map/Map';
import './HomePage.css';

const HomePage = ({...props}) => (
    <div className="app">

        <SearchForm onSubmit={props.handleSearch}/>
        <ButtonList
            cityRemove={props.cityRemove}
            cityList={props.currentCityInfo.cities}
            cityChange={props.handleChange}
        />
        <WeatherTable
            cityAdd={props.cityAdd}
            currentCityInfo={props.currentCityInfo}
            weatherForecastRequest={props.weatherForecastRequest}
        />
        <MapComponent currentCoord={props.currentCityInfo.coord}/>

    </div>
);

export default HomePage;