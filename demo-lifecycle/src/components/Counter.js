import React, { Component } from 'react';
class Counter extends Component {
    constructor(props) {
        console.log('Counter constructor');
        super(props);
        this.state = {
            count: 0
        };
    }
    increase() {
        this.setState({
            count: this.state.count + 1
        });
    }
    decrease() {
        this.setState({
            count: this.state.count - 1
        });
    }
    render() {
        const { count } = this.state;
        console.log('Counter render');
        return (
            <div className="counter">
                <button onClick={() => this.decrease()}>-</button>
                <span> {count} </span>
                <button onClick={() => this.increase()}>+</button>
            </div>
        );
    }
    componentDidMount() {
        console.log('Counter did mount');
    }// duoc goi 1 lan (dau tien) khi ma Component duoc khoi tao va gan vao DOM
    componentDidUpdate() {
        console.log('Counter dit update');
    }// duoc goi ngay sau khi render dc goi
    componentWillUnmount() {
        console.log('Counter will unmount');
    }// goi truoc khi component unmout
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.count === nextState.count) {
            return false; // khong render lai
        }
        return true; // default
    } // co the overight
}
export default Counter;