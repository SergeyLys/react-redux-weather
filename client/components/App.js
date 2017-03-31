import React from 'react';
import ButtonList from './ButtonList';
import SearchForm from './SearchForm';
import Map from './Map';
import 'whatwg-fetch';

import './App.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        injectTapEventPlugin();
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.removeCity = this.removeCity.bind(this);
    }

    componentDidMount() {
        if (this.props.initialCity != '') {
            this.props.getWeather(this.props.initialCity);
        }
    }

    handleChange(city) {
        this.props.currentCity != city ? this.props.getWeather(city) : '';
    }

    handleSearch(city) {
        if (this.props.cityList.indexOf(city) == -1) {
            this.props.getWeather(city);
        }
    }

    addCity() {
        if (this.props.cityList.indexOf(this.props.currentCity) == -1) {
            this.props.onAddCity(this.props.currentCity);
        }
    }

    removeCity(city) {
        this.props.onRemoveCity(city);
    }

    render() {
        return (
            <div className="app">

                <SearchForm onSubmit={this.handleSearch} />

                {
                    this.props.cityList.length != 0 ?
                        <ButtonList
                            onChange={this.handleChange}
                            location={this.props.cityList}
                            onRemove={this.removeCity}
                        /> : ''
                }

                {
                    this.props.currentCity !== null ?
                    <div>
                        <h1>{this.props.cityInfo.name}</h1>
                        <div className="city-wrapper">

                            {
                                this.props.cityList.indexOf(this.props.currentCity) == -1 ?
                                    <FloatingActionButton
                                        mini={true}
                                        secondary={true}
                                        onClick={this.addCity.bind(this)}
                                        className='add-btn'
                                    >
                                        <ContentAdd />
                                    </FloatingActionButton> : ''
                            }

                            <p>Max temp. <span>{this.props.cityInfo.main.temp_max}&deg;</span> </p>
                            <p>Min temp. <span>{this.props.cityInfo.main.temp_min}&deg;</span></p>
                            <p>Middle temp. <span>{this.props.cityInfo.main.temp}&deg;</span></p>
                            <p>Влажность: <span>{this.props.cityInfo.main.humidity}%</span></p>
                            <p>Давление: <span>{this.props.cityInfo.main.pressure}мм рт. ст.</span></p>
                            <p>Осадки: <span>{this.props.cityInfo.weather[0].description} <br/> {this.props.cityInfo.weather[0].main}</span></p>
                        </div>

                        <Map coord={this.props.coord} />

                    </div> : ''
                }

            </div>
        );
    }
}