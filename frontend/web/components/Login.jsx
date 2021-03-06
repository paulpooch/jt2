import Radium from 'radium';
import React from 'react';
import api from '../../shared/api';
import styles from '../../shared/styles';
import LoginRegisterBase from './LoginRegisterBase.jsx';
class Login extends LoginRegisterBase {

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isLoading: true
    });
    const postData = {
      inputEmail:     this.state.inputEmail,
      inputPassword:  this.state.inputPassword
    };
    api.submitLogin(postData, this)
    .then((json) => {
      console.log(json);
    });
  }

}
export default Radium(Login)