import React, { Component } from 'react';
import CardContext from "../contexts/CardContext";
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: [],
            storageKey: 'card'
        }
        this.addToCard = this.addToCard.bind(this);
    }
    componentDidMount() {
        this.setState({
            card: this.state.card.concat(localStorage.getItem(this.state.storageKey) ?
                JSON.parse(localStorage.getItem(this.state.storageKey)) :
                [])
        })
    }
    addToCard(product) {
        this.setState({
            card: this.state.card.concat(product)
        })
    }
    componentDidUpdate() {
        localStorage.setItem(this.state.storageKey, JSON.stringify(this.state.card));
    }
    render() {
        return <CardContext.Provider value={{
            card: this.state.card,
            storageKey: this.state.storageKey,
            addToCard: this.addToCard
        }}>
            {this.props.children}
        </CardContext.Provider>
    }
}
