import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//props
export default function Navbar(props) {

  const DarkBlue=() =>{
    document.body.style.backgroundColor = '#042743' ;
    }

  const Grey=() =>{
      document.body.style.backgroundColor = "Grey" ;
      }

  const Green=() =>{
        document.body.style.backgroundColor = '#19e675' ;
        }

  const Red=() =>{
          document.body.style.backgroundColor = '#e61919' ;
          }


  const Warning=() =>{
            document.body.style.backgroundColor = '#c0ec20' ;
            }
  
  const LightBlue=() =>{
              document.body.style.backgroundColor = '#2e91ca' ;
              }

  const Reset=() =>{
                document.body.style.backgroundColor = "white" ;
                }


  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <Link className="navbar-brand" to="text">{props.title}</Link>
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
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.drop}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

          <button type="button" class="btn btn-outline-primary my-2 mx-4" onClick={DarkBlue}>DarkBlue</button>
          <button type="button" class="btn btn-outline-secondary my-2 mx-4" onClick={Grey}>Grey</button>
          <button type="button" class="btn btn-outline-success my-2 mx-4" onClick={Green}>Green</button>
          <button type="button" class="btn btn-outline-danger my-2 mx-4"onClick={Red}>Danger</button>
          <button type="button" class="btn btn-outline-warning my-2 mx-4" onClick={Warning}>Yellow</button>
          <button type="button" class="btn btn-outline-info my-2 mx-4" onClick={LightBlue}>LightBlue</button>
          
          <button className="bg-grey mx-5 my-4" onClick={Reset} >Reset</button>
          
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

