import React, { useEffect } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {
  $(document).ready( function() {
    /* Check width on page load*/
    if ( $(window).width() < 991) {
     $('.coll').addClass('collapse');
     $('.coll').attr('id', 'navbarSupportedContent');

    }
    
 });

 $(window).resize(function() {
    /*If browser resized, check width again */
    if ( $(window).width() < 991) {
      $('.coll').addClass('collapse');
      $('.coll').attr('id', 'navbarSupportedContent');
 
     }
 });

  function animation() {
    var tabsNewAnim = $('.coll');
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
    $(".coll").on("click", ".li", function (e) {
      $('.coll .ul .li').removeClass("active");
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
    <nav className="navbar navbar-expand-lg navbar-mainbg ">
      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () { animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div
        className=" coll" >
        <div className="navbar-nav ml-auto ul dis">

          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <div className="nav-item active li" data-toggle="collapse" data-target="#navbarSupportedContent" >
            <NavLink className="nav-link" to="/" exact>
              <i class="fas fa-portrait"></i>Bio
            </NavLink>
          </div>
          <div className="nav-item li" data-toggle="collapse" data-target="#navbarSupportedContent" >
            <NavLink className="nav-link" to="/experiences" exact>
              <i class="fas fa-user-md"></i>Experience
            </NavLink>
          </div>
          <div className="nav-item li" data-toggle="collapse" data-target="#navbarSupportedContent" >
            <NavLink className="nav-link" to="/works" exact>
              <i class="fas fa-briefcase"></i>Works
            </NavLink>
          </div>
          <div className="nav-item li" data-toggle="collapse" data-target="#navbarSupportedContent" >
            <NavLink className="nav-link" to="/education" exact>
              <i class="fas fa-user-graduate"></i>Education
            </NavLink>
          </div>
          <div className="nav-item li" data-toggle="collapse" data-target="#navbarSupportedContent" >
            <NavLink className="nav-link" to="/courses" exact>
              <i
                className="far fa-copy">
              </i>Courses
            </NavLink>
          </div>
          <div className="nav-item li" data-toggle="collapse" data-target="#navbarSupportedContent" >
            <NavLink className="nav-link" to="/achievements" exact>
              <i class="fas fa-trophy"></i>Achievments
            </NavLink>

          </div>
          <div className="nav-item li" data-toggle="collapse" data-target="#navbarSupportedContent" >
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