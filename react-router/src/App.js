import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </Nav>
        <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
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

function About() {
  return <h2>Đây là trang giới thiệu</h2>;
}

function Contact() {
  return <h2>Đây là trang liên hệ</h2>;
}