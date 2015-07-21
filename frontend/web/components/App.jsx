import Radium from 'radium';
import React from 'react';
import { Link, RouteHandler } from 'react-router';
import styles from '../../shared/styles';
class App extends React.Component {

  render() {
    console.log('render App');
    return (
      <div>

        <div styles={[ styles.flextainer ]}>
          <div styles={[ styles.flex1 ]}>
            <h1>JuicyTracks</h1>
          </div>
          <div styles={[ styles.flex1 ]}>
            <Link to="login" params={{ foo: 123 }} >Login</Link>
          </div>
          <div styles={[ styles.flex1 ]}>
            <Link to="register">Sign Up</Link>
          </div>
        </div>

        <RouteHandler/>
      </div>
    );
  }

}
export default Radium(App)