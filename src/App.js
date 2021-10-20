import React from 'react'
import './App.css';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Skill from './components/Skill';
import Achievements from './components/Achievements';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Courses from './components/Courses';
import Navbar from './components/Navbar/Navbar';
import Works from './components/Works/Works'

const App = () => {
  AOS.init({
    
   
    offset: 120,
    duration: 400,
  });

  return (
    <div>


      <Router>

        <Navbar />
        <Switch>
          <Route path='/' exact component={AboutMe} />
          <Route path='/education' component={Education} />
          <Route path='/experiences' component={Experiences} />
          <Route path='/skill' component={Skill} />
          <Route path='/achievements' component={Achievements} />
          <Route path='/courses' component={Courses} />
          <Route path='/works' component={Works} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
