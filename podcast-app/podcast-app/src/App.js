import React, { Component } from 'react';
import './App.css';
import Podcast from './podcast.js';
import Home from './Home.js';
import Show from './Show.js';
import { Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      episodes: []
    };
  }

  render() {
    return (
      <div>
        <div className="Header">
          {/* Place header here */}
          <img
            className="logo"
            src="https://rachelcorbett.com.au/wp-content/uploads/2018/07/Neon-podcast-logo.jpg"
            alt="profile"
          ></img>
          <h2>React Podcast Player</h2>
          <div class="navContainer">
            <nav>
              <button type="button" className="Nav">
                Home
              </button>
            </nav>
          </div>
        </div>

        <div className="Buttons">
          <button type="button">Previous</button>
          <button type="button">Play Podcast</button>
          <button type="button">Next</button>
        </div>

        <div className="main">
          {/* Populate episodes here using routers */}
          {/* <Switch> */}
          {/* <Route path="/" component={Home} /> */}
          <Route path="/" component={Podcast} />
          <Route path={`/${this.props.name}`} component={Show} />
          {/* </Switch> */}
          {/* <Route path="/"> */}
        </div>
      </div>
    );
  }
}

export default App;
