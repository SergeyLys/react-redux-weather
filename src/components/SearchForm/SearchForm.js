import './SearchForm.css';
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {validateInput} from '../../utils/validateInput';
import PropTypes from 'prop-types';

export default class SearchForm extends React.Component {

    state = {
        city: '',
        errors: {}
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]:  event.target.value
        });
    };

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({city: '', errors: {}});
            this.props.onSubmit(this.state.city);
        }

    };

    render() {
        const {city, errors} = this.state;

        return (
            <form onSubmit={this.handleSubmit} className="search-form">

                <div className="input-row">
                    <TextField
                        name="city"
                        value={city}
                        floatingLabelText="Введите город"
                        onChange={this.handleChange}
                    />
                    {errors.city && <div style={{color: "#ae5856"}} className="error">{errors.city}</div>}
                </div>

                <RaisedButton label="Найти" primary={true} onTouchTap={this.handleSubmit}/>
            </form>
        )
    }
}

SearchForm.PropTypes = {
    onSubmit: PropTypes.func.isRequired
};