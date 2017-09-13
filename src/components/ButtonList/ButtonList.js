import React from 'react';
import Chip from 'material-ui/Chip';
import PropTypes from 'prop-types';
import './ButtonList.css';

const ButtonList = ({cityList, cityChange, cityRemove}) => (
    <div className="list-wrapper">

        {
            cityList.map((city, index)=> {
                return (
                    <Chip
                        key={index}
                        className="chip"
                        onRequestDelete={() => cityRemove(city)}
                        onClick={() => cityChange(city)}
                    >
                        {city}
                    </Chip>
                )
            })
        }

    </div>
);

export default ButtonList;

ButtonList.PropTypes = {
    cityList: PropTypes.array,
    cityAdd: PropTypes.func.isRequired,
    cityRemove: PropTypes.func.isRequired
};