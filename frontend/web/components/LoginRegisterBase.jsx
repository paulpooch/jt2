import Radium from 'radium';
import React from 'react';
import api from '../../shared/api';
import styles from '../../shared/styles';
class LoginRegisterBase extends React.Component {

  constructor() {
    super();
    this.state = {
      error: null,
      inputEmail: '',
      inputPassword: '',
      isLoading: false
    };
  }

  handleChange(field, e) {
    let state = {};
    let text = e.target.value;
    console.log(text, field);
    state[field] = text;
    this.setState(state);
  }

  handleSubmit(e) {
    throw new Error('handleSubmit() must be implemented')
  }

  render() {
    console.log('render LoginRegisterBase');
    return (
      <div style={[ styles.flextainer, styles.flexcenter, styles.flexitemscenter ]}>
        <form>
          <div>{ this.state.isLoading && 'LOADING' }</div>
          <div>{ this.state.error && this.state.error.message }</div>
          <div style={[ styles.flextainer ]}>
            <label htmlFor="inputEmail" style={{ width: 100 }}>Email</label>
            <input type="text" id="inputEmail" placeholder="Email" onChange={ this.handleChange.bind(this, 'inputEmail') }/>
          </div>
          <div style={[ styles.flextainer ]}>
            <label htmlFor="inputPassword" style={{ width: 100 }}>Password</label>
            <input type="password" id="inputPassword" placeholder="Password" onChange={ this.handleChange.bind(this, 'inputPassword') }/>
          </div>
          <div style={[ styles.flextainer ]}>
            <button type="submit" style={{ marginLeft: 100 }} onClick={ this.handleSubmit.bind(this) }>Submit</button>
          </div>
        </form>
      </div>
    );
  }

}
export default Radium(LoginRegisterBase)