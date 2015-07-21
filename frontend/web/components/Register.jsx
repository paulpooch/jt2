import Radium from 'radium';
import React from 'react';
import api from '../../shared/api';
import styles from '../../shared/styles';
import LoginRegisterBase from './LoginRegisterBase.jsx';
class Register extends LoginRegisterBase {

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isLoading: true
    });
    const postData = {
      inputEmail:     this.state.inputEmail,
      inputPassword:  this.state.inputPassword
    };
    api.submitRegister(postData, this)
    .then((json) => {
      console.log(json);
    });
  }

}
export default Radium(Register)