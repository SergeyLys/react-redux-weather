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
    removeItem(event) {
        let cityToRemove = event.target.parentElement.children[0].innerHTML;
        this.props.onRemove(cityToRemove);
    }

    render() {
        return (
            <div style={styles.wrapper}>
                {this.props.location.map((city, index)=> {
                    return (
                        <Chip
                            key={index}
                            style={styles.chip}
                            onRequestDelete={this.removeItem.bind(this)}
                            onTouchTap={() => this.props.onChange(city)}
                        >
                            {city}
                        </Chip>
                    )
                })}

            </div>
        )
    }
}
