import React, { Component } from "react";
import axios from "../API/axios";
import Card from "./Card";
import "../style/home.css";
import "../style/card.css";
import '../style/cata.css'


class Categories extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount = async () => {
    const { fetchUrl } = this.props;

    const response = await axios.get(fetchUrl);

    this.setState({
      movies: response.data.results,
    });
  };

  componentDidUpdate = async (prevProps, prevState) => {

    if(prevProps!==this.props){
      const { fetchUrl } = this.props;

      const response = await axios.get(fetchUrl);
      console.log(response)
      this.setState({
        movies: response.data.results,
      });
    }
    
  };

  render() {
    const moviesList = this.state.movies.map((movie,idx) => <Card key={idx} movie={movie} />);

    return (
      <div className="wrapper" >
        <h2 className="ahH2" ><strong>{this.props.category}<span>({this.state.movies.length})</span></strong></h2>
        <div className="cards">{moviesList}</div>
      </div>
    );
  }
}

export default Categories;
