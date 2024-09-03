import './App.css';
import { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/contact' element={<Contact></Contact>} />
      </Routes>
    );
  }
}

export default App;
