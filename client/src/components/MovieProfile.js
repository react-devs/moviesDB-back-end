import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import "../style/MovieProfile.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import NavBar from "./NavBar";
import axios from "../API/axios";




class MovieProfile extends Component {

  constructor(props) {
    super(props);
    const { user } = this.props.auth0;

    this.state = {
      ImageBaseUrl: 'https://image.tmdb.org/t/p/original',
      posterPath: '',
      backDropPath: '',
      actors: [],
      email: user.email,
      movieName: '',
      movieDescription: '',
      movieYear: '',
      duration: '',
      id: '',
      cat: [],
      lang: '',
      totalVote: '',
      rating: '',
      imdbId: '',
      trailerId: '',
      similerMoviesArray: [],
      movieImg: '',
      movieGenres: '',
      time: '',
    }

  }




  componentDidMount = async () => {
    // get the data here
    const detailsUrl = `/movie/${this.props.match.params.id}?api_key=${process.env.REACT_APP_MOVIES_DB_KEY}&language=en-US`;

    const actorUrl = `/movie/${this.props.match.params.id}/credits?api_key=${process.env.REACT_APP_MOVIES_DB_KEY}&append_to_response=person_id`;

  



    const movieIdresponse = await axios.get(detailsUrl);
    console.log('details url', movieIdresponse);

    const creditResponse = await axios.get(actorUrl);






    console.log(movieIdresponse.data.id);
    console.log('Actor array', creditResponse);

    await this.setState({
      id: movieIdresponse.data.id,
      actors: creditResponse.data.cast,
      movieName: movieIdresponse.data.title,
      movieDescription: movieIdresponse.data.overview,
      movieYear: movieIdresponse.data.release_date,
      duration: movieIdresponse.data.runtime,
      backDropPath: movieIdresponse.data.backdrop_path,
      posterPath: movieIdresponse.data.poster_path,
      cat: movieIdresponse.data.genres,
      lang: movieIdresponse.data.original_language,
      totalVote: movieIdresponse.data.vote_count,
      rating: movieIdresponse.data.vote_average,
      imdbId: movieIdresponse.data.imdb_id,
      movieImg: movieIdresponse.data.poster_path,
      movieGenres: movieIdresponse.data.genres[0].name


    });

    //req trailer url
    const trailerUrl = `/movie/${this.state.id}/videos?api_key=${process.env.REACT_APP_MOVIES_DB_KEY}&language=en-US`;
    const trailer = await axios.get(trailerUrl);

    console.log('trailer Array', trailer);

    // req similer movies array
    const reqUrlSimilerMovies = `/movie/${this.state.id}/similar?api_key=${process.env.REACT_APP_MOVIES_DB_KEY}&language=en-US&page=1`;
    const similerMovies = await axios.get(reqUrlSimilerMovies);

    console.log('similer movies array', similerMovies);

    if(trailer.data.results.length){
      await this.setState({
        trailerId: trailer.data.results[0].key,
        similerMoviesArray: similerMovies.data.results
      })
    }



    console.log('this is trailer id', this.state.trailerId);

  }

  getWatchedlistByClick = async (e) => {
    e.preventDefault();

    this.setState ({
      time: new Date()
    })

    const bodyData = {
      email: this.state.email,
      movieName: this.state.movieName,
      movieDescription: this.state.movieDescription,
      movieYear: this.state.movieYear,
      duration: this.state.duration,
      movieImg: this.state.movieImg,
      movieGenres: this.state.movieGenres,
      time: this.state.time
    }


    console.log(bodyData)

    const sendtes = await axios.post(`/api/movies`, bodyData);

    console.log(sendtes);
  }



  render() {
    const semiList = this.state.similerMoviesArray.length && this.state.similerMoviesArray.slice(0, 4).map((currentMovie, index) => { 
      return (
        <a href={() => false} className="movie-card" key={index}>
          <h3 className="movie-title">{currentMovie.title}</h3>
          <img src={`${this.state.ImageBaseUrl}${currentMovie.backdrop_path}`} alt="" className="movie-poster" />
          <div className="movie-meta">
            <span className="movie-duration">2ч 7мин</span>
            <span className="movie-year">2012</span>
            <span className="movie-lang">rus</span>
          </div>
          <div className="movie-description">
            <p className="movie-description-text">{currentMovie.overview.split(' ').slice(0, 10).join(' ')}</p>
          </div>
        </a>
      )
    })


    const actor = this.state.actors.slice(0, 3).map((actor, index) => {

      console.log(actor)

      return (
        <>
          <Link to={`/actor/${actor.id}/${actor.credit_id}`}>
            <span key={index} style={{ color: 'white', padding: '5px' }}>{actor.name} </span>
          </Link>
        </>
      )
    })
    console.log(this.props.match.params.id);


    return (
      <>
        <NavBar />

        <main className="movie-info" style={{ height: '640px', backgroundImage: `url("${this.state.ImageBaseUrl}${this.state.backDropPath}")` }} >
          <div className="centered-container-suf">
            <h1>{this.state.movieName}</h1>
            {/* <img src={"https://netology-code.github.io/Education-Show/img/title.png"} alt="" /> */}

            <div className="movie-meta">
              <span className="movie-duration">Duration / {this.state.duration}</span>
              <span className="movie-year">Year / {this.state.movieYear}</span>
              <span className="movie-lang">LANG / {this.state.lang}</span>
              <span className="rating" style={{ backgroundColor: 'green', width: '30px', textAlign: 'center' }}>{this.state.rating}</span>
            </div>

            <p style={{ margin: '12px 0px 12px 0px' }}><strong>Actors:</strong> {actor}</p>

            <p style={{ margin: '12px 0px 12px 0px' }}><strong>Category:</strong>
              {this.state.cat.map((cat, index) => {
                return <span key={index}> {cat.name} </span>
              })

              }
            </p>

            <p style={{ margin: '12px 0px 12px 0px' }}><strong>Overview: </strong> {this.state.movieDescription}</p>
            <div className="btn-block">
              <button onClick={this.getWatchedlistByClick} className="btn-watch">Add To Watchlist</button>
              {/* <button className="btn-wait">Посмотреть позже</button> */}
            </div>
          </div>
        </main>

        <aside className="additional-info">
          <div className="centered-container _dotted">
            

            <section className="section movie-details">
              <h2 className="section-header">Trailer</h2>
              <div className="trailer">
                <iframe width="900" height="500" src={`https://www.youtube.com/embed/${this.state.trailerId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>

            </section>

            <section className="section movie-similar">
              <h2 className="section-header ">Similer Movies</h2>
              <div className="movies-suf">
                {/* looping array  */}
                {semiList}

              </div>
            </section>
          </div>
        </aside>

        <Footer />

      </>
    );
  }
}

export default withAuth0(MovieProfile);