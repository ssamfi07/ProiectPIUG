import './App.css';
import React ,{Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Item from './pages/Item'
import ScrollToTop from './components/scrollToTop';
import AllItems from './pages/AllItems';
import SaleItems from './pages/SaleItems';
import SpecialItems from './pages/SpecialItems';

import 'bootstrap/dist/css/styles.css'

class App extends Component {

  render() {
    return (
      <Router >
        <ScrollToTop />
        <div>
          <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/about' element = {<About />} />
            <Route path = "/contact" element={<Contact />} />
            <Route path = '/allitems' element = {<AllItems />} />
            <Route path = '/saleitems' element = {<SaleItems />} />
            <Route path = '/specialitems' element = {<SpecialItems/>} />

            <Route path = "/item/:id" element={<Item />} />

            <Route path = '/login' element = {<Login />} />
            <Route path = "/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
