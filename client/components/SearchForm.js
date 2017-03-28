import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './SearchForm.scss';

export default class SearchForm extends React.Component {

    state = {
        inputValue: ''
    };

    handleChange(event) {
        this.setState({
            inputValue:  event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.inputValue != '') {
            this.props.onSubmit(this.state.inputValue);
            this.setState({
                inputValue:  ''
            });
        }

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="form-wrapper">
                <TextField
                    defaultValue=""
                    floatingLabelText="Введите город"
                    onChange={this.handleChange.bind(this)}
                />
                <RaisedButton
                    label="Найти" primary={true}
                    onTouchTap={this.handleSubmit.bind(this)}
                />
            </form>
        )
    }
}
