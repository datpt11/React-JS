import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
class App extends Component {
  constructor() {
    super(); // đại diện cho constructor của class
    this.todoItems = [
      { title: 'Mua bim bim', isComplete: true },
      { title: 'Đi đá bóng' },
      { title: 'Đi đổ xăng' }
    ];
  }
  render() {
    return (
      <div className="App">
        {
          this.todoItems.map((item, index) =>
            <TodoItem key={index} item={item} /> ,{/* truyền props vào conponents TodoItem */}
          )
        }
      </div>
    );
  }

}

export default App;
