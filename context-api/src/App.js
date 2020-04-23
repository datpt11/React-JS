import React from 'react';
import './App.css';
import Card from './components/Card';
import CardProvider from './provider/CardProvider';

function App() {
  return (
    <CardProvider>
      <div className="App">
        <Card />
      </div>
    </CardProvider>
  );
}

export default App;
