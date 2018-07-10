import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import LoadingDots from './../common/LoadingDots';

const Header = ({loading}) => {
  console.log(loading);
  return (
    <header>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/members">Members</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="/admin">Admin</Link>
          </li>
          <li>
            { loading && <LoadingDots interval={100} dots={20} />}
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propType = {
  loading: PropTypes.bool.isRequired
};

export default Header;
