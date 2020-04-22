// render props la truyen vao props 1 function tra ve component va goi lai function, component sẽ render giá trị trả về của hàm đó thay vì render ra Component như thông thường
import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Counter from './components/Counter';
import Plus from './components/Plus';
import Minus from './components/Minus';
const data = ["a", "b", "c"];
function App() {
  return (
    <div className="App">
      <List data={data} render={(item) => <Plus item={item}/>} />
      <List data={data} render={(item) => <Minus item={item}/>} />
      <Counter>
        {({ count }) =>
          <h1>{count}</h1>
        }
      </Counter>
    </div>
  );
}

export default App;
