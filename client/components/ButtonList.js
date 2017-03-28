import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

export default class ButtonList extends React.Component {
    removeItem(event) {
        let cityToRemove = event.target.parentElement.children[0].innerHTML;
        this.props.onRemove(cityToRemove);
    }

    render() {
        return (
            <Tabs>
                {this.props.location.map((city, index)=> {
                    return (
                        <Tab key={index} label={city} onClick={() => this.props.onChange(city)}></Tab>
                    )
                })}
            </Tabs>
        )
    }
}

// <li><span onClick={this.removeItem.bind(this)}>X</span> </li>