import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../style/footer.css";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>MoviesDB</h6>
                <p className="text-justify">MoviesDb <i> THE OPEN MOVIE DATABASE </i> is an online database of information related to films, home videos, series – including cast, personal biographies, plot summaries, trivia, ratings.</p>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul className="footer-links">
                  <li><a href={() => false}>Action</a></li>
                  <li><a href={() => false}>Comedy</a></li>
                  <li><a href={() => false}>Horror</a></li>
                  <li><a href={() => false}>Documentaries</a></li>
                  <li><a href={() => false}>TV</a></li>
                </ul>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li> <Link to="/aboutus" >About Us</Link></li>
                  <li> <Link to="/aboutus" >Contact Us</Link></li>
                  <li><Link to="/home" >Home</Link></li>
                  <li><Link to="/watchlist" >WatchList</Link></li>
                  <li><a href={() => false}>LogOut</a></li>
                </ul>
              </div>
            </div>
            <hr></hr>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                <Link to="/home" >MoviesDB</Link>.
               </p>
              </div>

            </div>
          </div>
        </footer>
      </>

    )
  }
}

export default Footer;
