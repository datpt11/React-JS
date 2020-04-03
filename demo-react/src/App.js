import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TopMenu from './components/TopMenu';
import Products from './pages/Products';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
        <Switch>
          <Route path="/products/" exact>
            <Products />
          </Route>
          <Route path="/contact/" exact>
            <Contact />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;
function Home() {
  return <h2>Đây là trang chủ</h2>;
}

function Contact() {
  return <h2>Đây là trang liên hệ</h2>;
}