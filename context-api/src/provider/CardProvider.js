import React, { Component } from 'react';
import CardContext from '../contexts/CardContext';
export default class extends Component {
    render() {
        return <CardContext.Provider value={10}>
            {this.props.children}
        </CardContext.Provider>
    }
}