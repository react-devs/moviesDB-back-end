import React, { Component } from "react";
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './auth0/LogOut';
import { Link } from "react-router-dom";
import '../style/navbar.css'
// import logo from '../img/MoviesDB.svg'



class NavBar extends Component {
  render() {

    return (
      <header className="ahheader" >
        <h2 className="ahlogo" >Movies<span style={{color:"#A32B1B"}} >DB</span></h2>
        <nav className="ahnava" >
          <ul className="aanav__link" >
            <li><Link to="/home" >Home</Link></li>
            <li> <Link to="/watchlist" >WatchList</Link></li>
            <li> <Link to="/aboutus" >About</Link></li>
          </ul>
        </nav>
        <LogoutButton/>
      </header>
    );
  }
}

export default withAuth0(NavBar);
