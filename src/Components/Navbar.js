import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//props
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <Link className="navbar-brand" to="/text">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/text">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.cont}</a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.drop}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
      </ul>
      {/*<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>*/}

      <div className="form-check form-switch text-light">
        <input type="checkbox" className="form-check-input" onClick={props.toggleMode} id="customSwitch1"/>
        <label className="form-check-label1" htmlFor="customSwitch1">Enable DarkMode</label>
    </div>



    </div>
  </div>
</nav>
  )
}

//proptypes
//isRequired is used to must fill its place otherwise it will gives us an error but if some default value is set
// then it will occupies an empty space
Navbar.propTypes = {
  title :PropTypes.string.isRequired,
  about :PropTypes.string,
  cont: PropTypes.string

}

Navbar.defaultProps={
  title: 'mention your title please',
  about: 'tell some new about your textutils'
}

