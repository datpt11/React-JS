import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
class TodoItem extends Component {
    render() {
        // const { item } = this.props; //destructuring, this.props la object
        // let className = 'TodoItem';
        // if (item.isComplete) {
        //     className += ' TodoItem-complete'
        // }
        // return (
        //     <div className={className}>
        //         <p>{this.props.item.title}</p>
        //     </div>
        // ); 
        const { item } = this.props; 
        let className = classNames('TodoItem',
                                  { 'TodoItem-complete': item.isComplete === true });
        return (
            <div className={className}>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}
export default TodoItem;