import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import Articles from './Articles'

import blogs from './work_images/blogs.jpg'
import presentation from './work_images/presentation.jpg'
import article from './work_images/article.jpg'
import Presentations from './Presentations';
import Blogs from './Blogs';
import "./Works.css";
import SkillVideos from './Skills';


function Works() {
    return (
        <>
            <section className="work">

                <div className="work_banner" data-aos="fade-up">
                    <p>Lorem ipsum dolor sit amet , consectetur adipiscing elit. Urna,amet, consectetur adipiscing elit. Urna,</p>
                </div>
                <br />
                <p data-aos="fade-up" style={{ fontSize: "50px", textDecoration: "none", padding: "0 0 0 400px" }} className="my-work">MY WORK</p>
                <br />
                <div className="category">
                    <div className="number">
                        <span className='digit'>01</span>
                        <NavLink  className="nav-link" exact to="/work" style={{ textDecoration: "none", padding: "10px 15px" }} num="0" ><p> Blogs</p></NavLink>
                        <img src={blogs} alt="" className="img" />
                    </div>
                    <div className="number">
                        <span className='digit'>02</span>
                        <NavLink style={{ textDecoration: "none", padding: "10px 15px" }} activeClassName="active_link" to="/work/articles" num="1" ><p> Articles </p>
                        </NavLink>
                        <img src={article} alt="" className="img" /></div>
                    <div className="number">
                        <span className='digit'>03</span>
                        <NavLink style={{ textDecoration: "none", padding: "10px 15px" }} activeClassName="active_link" to="/work/presentations" num="5"><p>Presentations</p> </NavLink>
                        <img src={presentation} alt="" className="img" /></div>
                    <div className="number">
                        <span className='digit'>04</span>
                        <NavLink style={{ textDecoration: "none", padding: "10px 15px" }} activeClassName="active_link" to="/work/skillvideos" num="4" ><p> Skillvideos</p> </NavLink>
                        <img src={blogs} alt="" className="img" />
                    </div>
                </div>

                <br />
                <Router>
                    <Switch>
                        <Route exact path="/work" component={Blogs} />
                        <Route exact path="/work/articles" component={Articles} />
                        <Route exact path="/work/presentations" component={Presentations} />
                        <Route exact path="/work/skillvideos" component={SkillVideos} />
                    </Switch>
                </Router>
            </section>
        </>
    )
}

export default Works