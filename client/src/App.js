import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import requests from "./API/requests";
import axios from "axios";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import WatchList from "./components/WatchList";
import MovieProfile from "./components/MovieProfile";
import AboutUs from "./components/AboutUs";
import ActorsProfile from "./components/Actorprofile";
// import IsLoadingAndError from './IsLoadingAndError';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    console.log(requests.fetchTrending);
    const { isAuthenticated, user } = this.props.auth0;

    console.log(user)

    const iflogIn = async () => {
      console.log(user);
      const userBody = {
        email: user.email,
      };

      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user`, userBody);

      console.log(response);
    };

    isAuthenticated && iflogIn();

    return (
      <div>
        <>
          <Router>
            <Switch>
              <Route exact path="/">
                {!isAuthenticated ? (
                  <LandingPage />
                ) : (
                  <Home  />
                )}
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/home">
                {isAuthenticated && (
                  <Home />
                )}
              </Route>
              <Route exact path="/watchlist">
                {isAuthenticated && <WatchList />}
              </Route>
              <Route exact path="/movie/:id" component={isAuthenticated && MovieProfile} />
              <Route exact path="/aboutus" component={isAuthenticated && AboutUs} />
              <Route exact path="/actor/:id/:credit_id" component={isAuthenticated && ActorsProfile} />

            </Switch>
          </Router>
        </>
      </div>
    );
  }
}
export default withAuth0(App);
