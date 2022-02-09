import React from 'react'
import logo from '../Head/Deezerlogo.png';

export default function Header() {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-secondary mb-4" >
    <div className="container-fluid">
      <a className="navbar-brand" href="/">App Musica</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link active" href="/favoritos">Favoritos</a>
          </li>
        </ul>

      </div>

      <div className="navbar-end">      
        <a className="navbar-brand">
        <img src={logo} alt="logo" width="150" height="30"/>
        </a>
      </div>

    </div>
  </nav>
  )
}
