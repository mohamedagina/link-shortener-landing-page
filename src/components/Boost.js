import React from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/Boost.scss';

const Boost = () => {
  return (
    <section className="boost">
      <span>Boost your links today</span>
      <Link className="btn" to="/get-started">
        Get Started
      </Link>
    </section>
  );
};

export default Boost;
