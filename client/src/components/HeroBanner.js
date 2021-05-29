import React, { Component } from "react";
import "../style/heroBanner.css";
import axios from "../API/axios";
import { Link } from "react-router-dom";

class HeroBanner extends Component {
  state = {
    topFive: [],
  };

  componentDidMount = async () => {
    const { TopFive } = this.props;
    const response = await axios.get(TopFive);

    this.setState({
      topFive: response.data.results,
    });
  };

  render() {
    const baseImgUrl = "https://image.tmdb.org/t/p/original";

    console.log(this.state.topFive);

    const topfive = this.state.topFive.slice(0, 6).map((movie, idx) => {
      return (
        <li key={idx}>
          <div className="image_title">
            <a className="ahmadA" href={() => false}>{movie.original_title}</a>
            <div className="hahaha" >
            <a className="ahmadADis" href={() => false}>{movie.original_title}</a>
            <a className="ahmadADis2" href={() => false}>{movie.overview.split(" ").slice(0,12).join(" ")}...</a>
            <Link style={{textDecoration:"none"}} to={`movie/${movie.id}`}><button className="AhlogOutHero" >Movie Profile</button></Link>
            </div>
          </div>
         
            <a className="ahmadA" href={() => false}>
              <img
                src={`${baseImgUrl}${movie.backdrop_path}`}
                alt="transformers4_1080x640"
                border="0"
                style={{ height: "33rem" }}
              />
            </a>
          
        </li>
      );
    });

    return (
      <div className="accordion">
        <ul>{topfive}</ul>
      </div>
    );
  }
}

export default HeroBanner;
