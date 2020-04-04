import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Counter from './components/Counter';
const data = ["a", "b", "c"];
function App() {
  return (
    <div className="App">
      <List data={data} render={(item) => <div>{item}</div>} />
      <List data={data} render={(item) => <div>- {item}</div>} />
      <Counter>
        {({ count }) =>
          <h1>{count}</h1>
        }
      </Counter>
    </div>
  );
}

export default App;
