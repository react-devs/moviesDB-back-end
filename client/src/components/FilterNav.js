import React, { Component } from "react";
import "../style/filterNav.css";
import requests from "../API/requests";
import Categories from "../components/Categories";

class FilterNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchUrl: requests.fetchTrending,
      category:'Top Rated'
    };
  }

  handeleClick = async (e) => {



    
    if (e.target.value === "Action") {
      await this.setState({
        fetchUrl: requests.fetchActionMovies,
        category:e.target.value
      });
    } else if (e.target.value === "Comedy") {
      await this.setState({
        fetchUrl: requests.fetchComedyMovies,
        category:e.target.value

      });
    } else if (e.target.value === "Horror") {
      await this.setState({
        fetchUrl: requests.fetchHorrorMovies,
        category:e.target.value

      });
    } else if (e.target.value === "Animation") {
      await this.setState({
        fetchUrl: requests.fetchAnimationMovies,
        category:e.target.value

      });
    } else if (e.target.value === "Fantacy") {
      await this.setState({
        fetchUrl: requests.fetchFantacyMovies,
        category:e.target.value
      });
    }else if (e.target.value) {
      await this.setState({
        fetchUrl: `${requests.fetchSearchMovie}query=${e.target.value}`,
      });
    }
  };

  render() {
    return (
      <>
        <nav>
          <ul className="ahNav">
            <li>
              <input
                className="ahInput"
                type="button"
                value="Action"
                onClick={this.handeleClick}
              />
            </li>
            <li>
              <input
                className="ahInput"
                type="button"
                value="Comedy"
                onClick={this.handeleClick}
              />
            </li>
            <li>
              <input
                className="ahInput"
                type="button"
                value="Horror"
                onClick={this.handeleClick}
              />
            </li>
            <li>
              <input
                className="ahInput"
                type="button"
                value="Animation"
                onClick={this.handeleClick}
              />
            </li>
            <li>
              <input
                className="ahInput"
                type="button"
                value="Fantacy"
                onClick={this.handeleClick}
              />
            </li>
          </ul>
        </nav>


        <form  className="search-bar">
          <input type="search" onChange={this.handeleClick} name="search" pattern=".*\S.*" required />
          <button className="search-btn">
            <span>Search</span>  
          </button> 
        </form>


        <Categories category={this.state.category} fetchUrl={this.state.fetchUrl} />
      </>
    );
  }
}

export default FilterNav;
