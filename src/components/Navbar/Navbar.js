import "../Navbar/Navbar.css"
import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  const backToStart = () => {
    if (
      window.confirm("¿Estás seguro que quieres volver a la página principal?")
    ) {
      window.location.href = "/";
    }
  };

  return (
    <div className="navbar container-fluid bg-secondary">
      <div className="Navbar-home">  
        <button type="button" className="button-home btn btn-outline-dark text-light">
        <i className="bi bi-house-door-fill" onClick={backToStart}></i>
        </button>
      </div>
      <div className="navbar-menu">
        <div className="button-menu btn-group" role="group">
        <Link to="/login">
          <button type="button" className="button-login btn     btn-outline-dark text-light">INGRESAR</button>
        </Link>
        <Link to="/reserve">
          <button type="button" className="button-booking btn     btn-outline-dark text-light">RESERVAR</button>
        </Link>
        <Link to="/info">
          <button type="button" className="button-info btn     btn-outline-dark text-light">INFO</button>        
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar