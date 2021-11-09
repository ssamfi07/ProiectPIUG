import './App.css';
import React ,{Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Item from './pages/Item'

class App extends Component {

  render() {
    return (
      <Router >
        <div>
          <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/about' element = {<About />} />
            <Route path = "/contact" element={<Contact />} />

            <Route path = "/item/:name" element={<Item />} />

            <Route path = '/login' element = {<Login />} />
            <Route path = "/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
