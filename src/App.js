import React from 'react'
import './App.css';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import Skill from './components/Skill';
import Achievements from './components/Achievements';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Courses from './components/Courses';
import Navbar from './components/Navbar/Navbar';
import Works from './components/Works/Works'
import Blogs from './components/Works/Blogs';
import Articles from './components/Works/Articles';
import Presentations from './components/Works/Presentations';
import SkillVideos from './components/Works/Skills';
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
          <Route path='/contact' component={Contact} />
          <Route path='/skill' component={Skill} />
          <Route path='/achievements' component={Achievements} />
          <Route path='/courses' component={Courses} />
          <Route path='/works' component={Works} />
          <Route exact path="/work" component={Blogs} />
          <Route exact path="/work/articles" component={Articles} />
          <Route exact path="/work/presentations" component={Presentations} />
          <Route exact path="/work/skillvideos" component={SkillVideos} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
