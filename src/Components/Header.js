import React from "react";
import TypeWriter from "react-typewriter";
import {
  FaAngellist,
  FaLinkedin,
  FaTwitterSquare,
  FaGithub,
} from "react-icons/fa";

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <TypeWriter typing={0.5}>{name ? `I'm ${name}.` : null}</TypeWriter>
          </h1>
          <h3>
            A <span>{occupation}</span>. -{description}.
          </h3>
          <hr />
          {/* <div className="skill-box">
            <h2>Front-End</h2>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap4</li>
                <li>JavaScript</li>
                <li>React & Redux</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
            <h2>Back-End</h2>
              <ul>
                <li>Ruby</li>
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Firebase</li>                
              </ul>
            <h2>Testing Tools</h2>
              <ul>
                <li>RSpec</li>
                <li>Capybara</li>
                <li>Jest</li>              
              </ul>
          </div> */}
          <a href="https://www.linkedin.com/in/nnamdi-emelu/" rel="noreferrer" target="_blank" className="social">
            <FaLinkedin className="test"/>
          </a>
          <a href="https://angel.co/u/emelu-nnamdi-azubuike" rel="noreferrer" target="_blank" className="social">
            <FaAngellist className="test" />
          </a>
          <a href="https://twitter.com/zubenna" rel="noreferrer" target="_blank" className="social">
            <FaTwitterSquare className="test" />
          </a>
          <a href="https://github.com/zubenna" rel="noreferrer" target="_blank" className="social">
            <FaGithub className="test" />
          </a>
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
