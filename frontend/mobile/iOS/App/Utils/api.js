// https://fetch.spec.whatwg.org/

var API_ROOT = 'http://localhost:1337/api';

var postOptions = function(postData) {
  return {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  }
};

var api = {

  submitLogin(postData) {
    var url = `${ API_ROOT }/login`;
    return fetch(url, {
      method: 'POST',
      body: postData
    }).then((response) => {
      return response.json();
    }).catch((error) => {
      console.error(error);
    });
  },

  submitRegister(postData) {
    var url = `${ API_ROOT }/signup`;
    return fetch(url, postOptions(postData))
    .then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);
      return json;
    }).catch((error) => {
      console.error(error);
    });
  }

};

module.exports = api;