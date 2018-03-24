import React from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';


export default class Header extends React.Component {
    
    componentDidMount () {

        var stickyNav = $('.navbar').offset().top;

        $("nav").find("a").click(function(e) {
            e.preventDefault();
            var section = $(this).attr("href");
            var scrollTop = $(window).scrollTop();
            console.log(scrollTop);

            $("html, body").animate({
                scrollTop: $(section).offset().top -200
            });
        });

        $(window).scroll(function () {
            if ($(window).scrollTop() > stickyNav ) {
              $('.navbar').addClass('fixed-top');
            } else{
              $('.navbar').removeClass('fixed-top');
            }
          });
        
    }
    render() {
  
        return (
  
            <div>

                <nav className="navbar navbar-expand-lg navbar-light justify-content-center fixed">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar.-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="pill" href="#experience"> Experience </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#sample-projects"> Sample Projects </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#skills"> Skills </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#education"> Education </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#contact"> Contact </a>
                            </li>

                        </ul>
                    </div>

                </nav>
    
            </div>
    );
  }
}