import React from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.scss';

const Header = () => {
  return (
    <header>
      <nav>
        <section className="nav-links">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
          <Link to="/features">features</Link>
          <Link to="/pricing">pricing</Link>
          <Link to="/resources">resources</Link>
        </section>
        <section className="user-area">
          <Link to="login"> login</Link>
          <Link className="btn pill" to="signup">
            sign up
          </Link>
        </section>
      </nav>
    </header>
  );
};

export default Header;
