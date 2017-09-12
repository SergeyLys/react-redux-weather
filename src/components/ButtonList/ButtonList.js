import React from 'react';
import Chip from 'material-ui/Chip';
import PropTypes from 'prop-types';
import './ButtonList.css';

export default class ButtonList extends React.Component {

    render() {
        return (
            <div className="list-wrapper">

                {
                    this.props.cityList.map((city, index)=> {
                        return (
                            <Chip
                                key={index}
                                className="chip"
                                onRequestDelete={() => this.props.cityRemove(city)}
                                onTouchTap={() => this.props.cityChange(city)}
                            >
                                {city}
                            </Chip>
                        )
                    })
                }

            </div>
        )
    }
}

ButtonList.PropTypes = {
    cityList: PropTypes.array,
    cityAdd: PropTypes.func.isRequired,
    cityRemove: PropTypes.func.isRequired
};