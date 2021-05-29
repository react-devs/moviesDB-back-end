import axios from "axios";
import React, { Component } from "react";
import NavBar from "./NavBar";
import { withAuth0 } from "@auth0/auth0-react";
import "../style/watchlist.css";
import "../style/cata.css";
import "../style/card.css"
import { FaGithub, FaFacebook, FaTwitter, FaBehance } from "react-icons/fa";
// import watchlistBanner from "./watchlistBanner";
import Footer from "../components/Footer";

class WatchList extends Component {
  constructor(props) {
    super(props);
    const { user } = this.props.auth0;

    this.state = {
      watchListMovies: [],
      showMovies: false,
      userEmail: user.email,
      server: process.env.REACT_APP_SERVER_URL,
      user:user
      // index: 0
    };
  }

  componentDidMount = async () => {

    console.log(this.state.user)
    try {
      const params = {
        email: this.state.userEmail,
      };

      const moviesList = await axios.get(`${this.state.server}/movies`, {
        params: params,
      });

      this.setState({
        watchListMovies: moviesList.data.movies,
        showMovies: true,
      });
      console.log("this is what u are lookin for", moviesList);
      console.log("what is this:", this.state.watchListMovies);
    } catch (error) {
      console.log(error);
    }
  };

  deleteMovie = async (index) => {
    const newMovieList = this.state.watchListMovies.filter((movie, idx) => {
      return idx !== index;
    });

    this.setState({
      watchListMovies: newMovieList,
    });

    const query = {
      email: this.state.userEmail,
    };

    await axios.delete(`${this.state.server}/movies/${index}`, {
      params: query,
    });
  };

  render() {
    const baseImgUrl = "https://image.tmdb.org/t/p/original";

    const moviesList = this.state.watchListMovies.map((movie,idx )=>{
      return (
        <figure style={{padding:"auto"}} key={idx} className="card">
        <img
          src={`${baseImgUrl}${movie.movieImg}`}
          alt="ssss"
        />
        <figcaption onClick={()=>this.deleteMovie(idx)} >Delete</figcaption>
      </figure>
      )
    })


    return (
      <>
        <NavBar />

        <aside className="profile-card">
          <header>
            <a target="_blank" rel="noopener noreferrer" href={() => false}>
              <img
                src={this.state.user.picture}
                className="hoverZoomLink"
                alt="dd"
              />
            </a>

            <h1 style={{ color: "#fff",fontSize:"1rem" }}>{this.state.user.name}</h1>

            <h2 style={{ color: "#fff",fontSize:"1rem" }}>{this.state.user.email}</h2>
          </header>

          <ul className="profile-social-links">
            <li>
              <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/creativedonut">
                <FaFacebook size={70} />
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/dropyourbass">
                <FaTwitter size={70} />
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" target="_blank" href="https://github.com/vipulsaxena">
                <FaGithub size={70} />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/vipulsaxena">
                <FaBehance size={70} />
              </a>
            </li>
          </ul>
        </aside>
        <div className="testahmad"></div>

        <div className="wrapperr">
          <h1 style={{textAlign:"center",color:'#fff',fontFamily:"fantasy",marginBottom:"2rem"}} > Your Movies List</h1>
          <div className="cards">
            {moviesList}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default withAuth0(WatchList);
