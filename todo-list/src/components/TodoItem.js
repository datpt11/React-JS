import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg'
class TodoItem extends Component {
    // constructor(props){
    //     super(props);
    //     this.onItemClick = this.onItemClick.bind(this);
    // }
    
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
        const { item, onClick } = this.props; 
        let url = checkImg;
        if(item.isComplete) {
            url = checkCompleteImg;
        }
        return (
            <div className={classNames('TodoItem',{ 
                'TodoItem-complete': item.isComplete === true 
            })}>
                <img onClick={onClick} src={url} alt="" width={32} height={32}/>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}
export default TodoItem;