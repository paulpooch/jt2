import React from 'react';

export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      user: '',
      password: ''
    };
  }

  login(e) {

  }

  render() {
    console.log('render Login');
    return (
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Password" />
        <button type="submit" onClick={ this.login.bind(this) }>Submit</button>
      </form>
    );
  }

}
