import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/card.css";

class Card extends Component {
  render() {
    const baseImgUrl = "https://image.tmdb.org/t/p/original";
    // console.log(this.props.movie)
    const { poster_path, original_title, id, } =this.props.movie;

    return (
      <>
        <Link to={`movie/${id}`}>
          <figure className="card">
            <img src={`${baseImgUrl}${poster_path}`} alt={`${original_title}`} />
          </figure>
        </Link>
      </>
    );
  }
}

export default Card;
