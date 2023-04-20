import React from 'react';
import './styles.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/basics/Header';
import Footer from './components/basics/Footer';
import Error404 from './components/basics/Error404';
import Members from './components/team/Team';
import Info from './components/info/Info';
import Games from './components/games/Games';

const App = () => {
  return (
    <div>
        <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
        </div>
      <Router>
        <Header/>
        <Routes>
          <Route path='*' element={<Error404/>}/>
          <Route path='/noni-web' element={<Home/>}/>
          <Route path='/Games' element={<Games/>}/>
          <Route path='/Team' element={<Members/>}/>
          <Route path='/Info' element={<Info/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;