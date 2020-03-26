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
    // Conditional rendering
    // if(this.todoItems.length > 0){
    //   return (
    //     <div className="App">
    //       {
    //         this.todoItems.map((item, index) =>
    //           <TodoItem key={index} item={item} /> ,{/* truyền props vào conponents TodoItem */}
    //         )
    //       }
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div className="App">Nothing here</div>
    //   );
    // }
    return (
      <div className="App">
        {
          this.todoItems.length > 0 && this.todoItems.map((item, index) =>
            <TodoItem key={index} item={item} />, {/* truyền props vào conponents TodoItem */ }
          ) 
        }
        {
          this.todoItems.length === 0 && 'Nothing here'
        }
        {/* conditional 1 && conditional 2 
          neu conditional 1 la truthy thi tra ve gia tri conditional 2
          hoac conditional 1 falsy thi tra ve conditional 1
        */}
      </div>
    );
  }
}

export default App;
