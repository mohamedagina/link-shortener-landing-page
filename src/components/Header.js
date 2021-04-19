import React, { useRef } from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.scss';
import illustration from '../images/illustration-working.svg';

const Header = () => {
  const toggle = useRef(null);
  return (
    <header>
      <nav>
        <Link className="logo" to="/">
          <img src={logo} alt=""></img>
        </Link>
        <section className="nav-links">
          <section>
            <Link to="/features">features</Link>
            <Link to="/pricing">pricing</Link>
            <Link to="/resources">resources</Link>
          </section>
          <section>
            <Link to="login"> login</Link>
            <Link className="btn pill" to="signup">
              sign up
            </Link>
          </section>
        </section>
        <div className="toggle-menu">
          <button
            onClick={() => toggle.current.classList.toggle('show')}
            type="button"
            aria-label="toggle menu"
          >
            <i className="fas fa-bars fa-2x"></i>
          </button>
          <div ref={toggle} className="menu">
            <section className="links-section">
              <Link to="/features">features</Link>
              <Link to="/pricing">pricing</Link>
              <Link to="/resources">resources</Link>
            </section>
            <section>
              <Link to="login"> login</Link>
              <Link className="btn pill" to="signup">
                sign up
              </Link>
            </section>
          </div>
        </div>
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
