import "../Navbar/Navbar.css"
import React from 'react'

const Navbar = () => {
  const backToStart = () => {
    if (
      window.confirm("¿Estás seguro que quieres volver a la página principal?")
    ) {
      window.location.href = "/";
    }
  };

  return (
    <div className="navbar container-fluid bg-dark">
      <div className="Navbar-home">  
        <button type="button" className="button-home btn btn-outline-secondary text-light">
        <i className="bi bi-house-door-fill" onClick={backToStart}></i>
        </button>
      </div>
      <div className="navbar-menu">
        <div className="button-menu btn-group" role="group">
          <button type="button" className="button-login btn     btn-outline-secondary text-light">Ingresar</button>
          <button type="button" className="button-booking btn     btn-outline-secondary text-light">Reservar</button>
          <button type="button" className="button-info btn     btn-outline-secondary text-light">Info</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar