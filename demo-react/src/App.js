import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TopMenu from './components/TopMenu';
import Products from './pages/Products';
import './App.css';
import CardProvider from './provider/CardProvider';

function App() {
  return (
    <CardProvider>
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
    </CardProvider>
  );
}

export default App;
function Home() {
  return <h2>Đây là trang chủ</h2>;
}

function Contact() {
  return <h2>Đây là trang liên hệ</h2>;
}