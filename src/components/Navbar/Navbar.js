import React, { useEffect } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {

  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "left": itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", ".li", function (e) {
      $('#navbarSupportedContent .ul .li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {

    animation();
    $(window).on('resize', function () {
      setTimeout(function () { animation(); }, 500);
    });

  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () { animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>

      <div
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav ml-auto ul dis">

          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <div className="nav-item active li">
            <NavLink className="nav-link" to="/" exact>
            <i class="fas fa-portrait"></i>Bio
            </NavLink>
          </div>
          <div className="nav-item li">
            <NavLink className="nav-link" to="/experiences" exact>
            <i class="fas fa-user-md"></i>Experience
            </NavLink>
          </div>
          <div className="nav-item li">
            <NavLink className="nav-link" to="/works" exact>
            <i class="fas fa-briefcase"></i>Works
            </NavLink>
          </div>
          <div className="nav-item li">
            <NavLink className="nav-link" to="/education" exact>
            <i class="fas fa-user-graduate"></i>Education
            </NavLink>
          </div>
          <div className="nav-item li">
            <NavLink className="nav-link" to="/courses" exact>
              <i
                className="far fa-copy">
              </i>Courses
            </NavLink>
          </div>
          <div className="nav-item li">
            <NavLink className="nav-link" to="/achievements" exact>
            <i class="fas fa-trophy"></i>Achievments
            </NavLink>

          </div>
          <div className="nav-item li ">
            <NavLink className="nav-link" to="/skill" exact>
              <i
                className="far fa-chart-bar">
              </i>Skills
            </NavLink>
          </div>





        </div>
      </div>
    </nav>
  )
}
export default Navbar;