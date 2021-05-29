import React, { Component } from 'react'
import axios from '../API/axios'
import '../style/ActorProfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import Footer from './Footer';

export class ActorsProfile extends Component {
  state = {
    movisOfActors: [],
    actorInfo: [],
    actorKnownFor:[],
    
  }
 
componentDidMount =  async()=>{
    const actorUrl = `https://api.themoviedb.org/3/person/${this.props.match.params.id}/movie_credits?api_key=${process.env.REACT_APP_MOVIES_DB_KEY}`;
    const actorInfo = `https://api.themoviedb.org/3/credit/${this.props.match.params.credit_id}?api_key=${process.env.REACT_APP_MOVIES_DB_KEY}`;
    const response = await axios.get(actorUrl);
    const responseInfo = await axios.get(actorInfo);

    this.setState({
      movisOfActors:response.data.cast,
      actorInfo:responseInfo.data.person,
      actorKnownFor:responseInfo.data.person.known_for[0],
    })
    
}
  render() {
    const baseImgUrl = "https://image.tmdb.org/t/p/original";
    const moviesrelated = this.state.movisOfActors.slice(0,8).map((movie) => {
      return(
          <div className="abed_card">
            <img src= {`${baseImgUrl}${movie.poster_path}`} alt='' style={{width:'100%'}}/>
            <div className="abed_container">
              <h4 className= "movie_title">{movie.title}</h4> 
            </div>
          </div>
       
      )
    })
    return (
      <div>
        
        <main className="abed_main">
          <NavBar /> 
          
            <div className="movie_card" id="bright">
              <div className="info_section">
                <div className="movie_header">
                  <img className="locandina" src={`${baseImgUrl}${this.state.actorInfo.profile_path}`} alt=''/>
                  <h1>{this.state.actorInfo.name}</h1>
                  <h4>Known For : {this.state.actorKnownFor.title}</h4>
                  <span className="minutes">Popularity : {this.state.actorInfo.popularity}</span>
                </div>
              </div>
              <div className="blur_back bright_back" style = {{backgroundImage: `url(${baseImgUrl}${this.state.actorInfo.profile_path})`}} ></div>
            </div>
          <div className='moviesOfActor'>
            <h1>Movies Of The Actor</h1><br/>

          </div>
          <div className="abed_cont_cards">
            {moviesrelated}
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default ActorsProfile;