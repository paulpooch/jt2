import React from 'react';
import { Link, RouteHandler } from 'react-router';

const STYLE = {
  navRoot: {
    display: 'flex'
  },
  navItem: {
    flex: 1
  }
};

export default class App extends React.Component {
  render() {
    console.log('render App');
    return (
      <div>

        <div style={ STYLE.navRoot }>
          <div style={ STYLE.navItem }>
            <h1>JuicyTracks</h1>
          </div>
          <div style={ STYLE.navItem }>
            <Link to="login" params={{ foo: 123 }} >Login</Link>
          </div>
        </div>

        <RouteHandler/>
      </div>
    );
  }
}

React