import React from 'react';
import { Link } from 'react-router-dom'

export class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="members">Members</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="admin">Admin</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
