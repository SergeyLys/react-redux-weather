import React from 'react';
import ButtonList from './ButtonList';
import SearchForm from './SearchForm';
import { connect } from 'react-redux';

import './App.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

class App extends React.Component {

    constructor(props) {
        super(props);
        injectTapEventPlugin();
    }

    state = {
        id: '',
        name: '',
        humidity: '',
        pressure: '',
        temp: '',
        temp_max: '',
        temp_min: '',
        weather: {
            description: '',
            main: ''
        }
    };

    componentDidMount() {
        this.getLocation(this.props.cities[0]);
    }

    getLocation(city) {
        var that = this;
        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0668067898307a2c11b3ef3f78365eb2&units=metric`,
            dataType: "jsonp",
            success: function (data) {
                that.setState({
                    id: data.id,
                    name: data.name,
                    humidity: data.main.humidity,
                    pressure: data.main.pressure,
                    temp: data.main.temp,
                    temp_max: data.main.temp_max,
                    temp_min: data.main.temp_min,
                    weather: {
                        description: data.weather[0].description,
                        main: data.weather[0].main
                    }
                });
            }
        });
    }

    handleChange(city) {
        this.getLocation(city);
    }

    handleSearch(city) {
        this.getLocation(city);
    }

    addCity() {
        if (this.props.cities.indexOf(this.state.name) == -1) {
            this.props.onAddCity(this.state.name);
        }
    }

    removeCity() {
        this.props.onRemoveCity(this.state.name);
    }

    render() {
        return (
           <div className="app">

               <SearchForm onSubmit={this.handleSearch.bind(this)} />
               <ButtonList
                   onChange={this.handleChange.bind(this)}
                   onRemove={this.removeCity.bind(this)}
                   location={this.props.cities}
               />

               <h1>{this.state.name}</h1>
               <div className="city-wrapper">
                   <FloatingActionButton
                       mini={true}
                       secondary={true}
                       onClick={this.addCity.bind(this)}
                       className={this.props.cities.indexOf(this.state.name) == -1 ? 'add-button ' : 'add-button disable'}
                   >
                       <ContentAdd />
                   </FloatingActionButton>

                   <FloatingActionButton
                       mini={true}
                       secondary={true}
                       onClick={this.removeCity.bind(this)}
                       className={this.props.cities.indexOf(this.state.name) == -1 ? 'add-button disable' : 'add-button '}
                   >
                       <ContentRemove />
                   </FloatingActionButton>

                   <p>Max temp. <span>{this.state.temp_max}&deg;</span> </p>
                   <p>Min temp. <span>{this.state.temp_min}&deg;</span></p>
                   <p>Middle temp. <span>{this.state.temp}&deg;</span></p>
                   <p>Влажность: <span>{this.state.humidity}%</span></p>
                   <p>Давление: <span>{this.state.pressure}мм рт. ст.</span></p>
                   <p>Осадки: <span>{this.state.weather.description} <br/> {this.state.weather.main}</span></p>
               </div>
           </div>
        );
    }
}

export default connect(
    mapStateToProps => ({
        cities: mapStateToProps
    }),
    mapDispatchToProps => ({
        onAddCity: (city)=> {
            mapDispatchToProps({ type: 'ADD_ITEM', payload: city });
        },

        onRemoveCity: (city)=> {
            mapDispatchToProps({ type: 'REMOVE_ITEM', payload: city });
        }
    })
)(App);