import React from 'react';
import Chip from 'material-ui/Chip';

const styles = {
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
    chip: {
        marginLeft: 5,
        marginRight: 5,
    }
};

export default class ButtonList extends React.Component {

    constructor(){
        super();
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(city) {
        this.props.onRemove(city);
    }

    render() {
        return (
            <div style={styles.wrapper}>
                {
                    this.props.location.map((city, index)=> {
                        return (
                            <Chip
                                key={index}
                                style={styles.chip}
                                onRequestDelete={() => this.removeItem(city)}
                                onTouchTap={() => this.props.onChange(city)}
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
