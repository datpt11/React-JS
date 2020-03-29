import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './img/tick.svg';
class App extends Component {
  constructor() {
    super(); // đại diện cho constructor của class
    this.state = {
      newItem: '',
      todoItems: [
        { title: 'Mua bim bim', isComplete: true },
        { title: 'Đi đá bóng' },
        { title: 'Đi đổ xăng' }
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);// xu li this undefined
    this.onChange = this.onChange.bind(this);
  }
  onItemClicked(item) {
    console.log('click');
    return (event) => {
      console.log(item);
      const isComplete = item.isComplete; // luu lai trang thai hien tai
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item); //check xem item click dang o vi tri thu may
      console.log(...todoItems.slice(0, index));
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete// đảo ngược trang thái isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    }
  }
  onKeyUp(event) {
    if (event.keyCode === 13) {
      let text = event.target.value; // lay gia tri tai thoi diem go
      if (!text) {
        return;
      }
      text = text.trim(); // xoa di dau cach o dau va cuoi
      if (!text) {
        return;
      }
      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isComplete: false },
          ...this.setState.todoItems
        ]
      });
    } 
  }
  onChange(event) {
    this.setState({
      newItem: event.target.value
    });
  }
  render() {
    const { todoItems, newItem } = this.state;
    if (todoItems.length) {
      return (
        <div className="App">
          <div className="Header">
            <img src={tick} alt="" width={32} height="32" />
            <input onChange={this.onChange} value={newItem} type="text" placeholder="Add a new item" onKeyUp={this.onKeyUp} />
          </div>
          {
            todoItems.map((item, index) =>
              <TodoItem key={index} item={item} onClick={this.onItemClicked(item)} />, {/* truyền props vào conponents TodoItem */ }
            )
          }
        </div>
      );
    } else {
      return (
        <div className="App">Nothing here</div>
      );
    }
    // Conditional rendering
    // return (
    //   <div className="App">
    //     {
    //       this.todoItems.length > 0 && this.todoItems.map((item, index) =>
    //         <TodoItem key={index} item={item} onClick={this.onItemClicked(item)} />, {/* truyền props vào conponents TodoItem */ }
    //       ) 
    //     }
    //     {
    //       this.todoItems.length === 0 && 'Nothing here'
    //     }
    //     {/* conditional 1 && conditional 2 
    //       neu conditional 1 la truthy thi tra ve gia tri conditional 2
    //       hoac conditional 1 falsy thi tra ve conditional 1
    //     */}
    //   </div>
    // );
  }
}

export default App;
