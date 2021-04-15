import React from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.scss';
import illustration from '../images/illustration-working.svg';

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
      <section className="header-body">
        <section className="description-container">
          <span className="heading">More than just shorter links</span>
          <span className="description">
            Build your brand`s recognition and get detailed insights on how your
            links are performing.
          </span>
          <Link className="btn pill" to="/get-started">
            get started
          </Link>
        </section>
        <section className="illustration">
          <img src={illustration} alt="illustration working"></img>
        </section>
      </section>
    </header>
  );
};

export default Header;
