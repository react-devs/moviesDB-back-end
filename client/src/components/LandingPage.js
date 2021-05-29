import React, { Component } from 'react';
import backgroundVedio from '../components/videos/video-2.mp4';
import "../style/LandingPage.css";
import LoginButton from './auth0/LogingButton'
import { withAuth0 } from '@auth0/auth0-react';
export class LandingPage extends Component {
  showToggle = () => {
  }
  render() {
    // const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <section className="showcase">

          <video
            autoPlay
            loop
            muted
          >
            <source src={backgroundVedio} type="video/mp4" />
          </video>
          
          <div className="text">
            <h1 style={{fontSize:"6.5rem"}} >Movies<span style={{color:"#A32B1B"}} >DB</span> </h1>
            <h3>The Open Movie Database</h3>
            <p>Welcome to the Movies Database, You will find the most Anticipated New Movies and Shows</p>
            <LoginButton />
          </div>
          <ul className="social">
            {/* <li><a ><img src="https://i.ibb.co/x7P24fL/facebook.png" /></a></li>
            <li><a ><img src="https://i.ibb.co/Wnxq2Nq/twitter.png" /></a></li>
            <li><a ><img src="https://i.ibb.co/ySwtH4B/instagram.png" /></a></li> */}
          </ul>
        </section>
      </>
    )
  }
}
export default withAuth0(LandingPage);
