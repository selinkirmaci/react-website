import './App.css';
import React  from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import MyWork from './components/pages/MyWork';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} >
          </Route>
          <Route path="/aboutme" exact element={<AboutMe/>} >
          </Route>
          <Route path="/mywork" exact element={<MyWork/>} >
          </Route>
          <Route path="/sign-up" exact element={<SignUp/>} >
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
