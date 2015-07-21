'use strict';
/*
All methods GET, POST, PUT, DELETE, etc will handle errors by updating the calling component as follows:

 component.setState({
    isLoading: false,
    error
 });

 where error is an Error object with a valid message.

 This message is generally the error string returned by the server.
 */

const API_ROOT = 'http://localhost:1337/api';

const checkStatus = function(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    return response.json()
    .then ((json) => {
      let error;

      // If invalidAttributes error.
      if (json.error) {
        let invalidAttrs = json.error.invalidAttributes;
        if (invalidAttrs) {
          let msg = [];
          for (let attr in invalidAttrs) {
            let errorArray = invalidAttrs[attr];
            errorArray.forEach((el, index) => {
              msg.push(`${ attr }: ${ el.message }.`);
            });
          }
          error = new Error(msg);
        } else {
          error = new Error(json.error);
        }
      }
      error.response = response;
      error.wasJSON = true;
      throw error;
    })
    .catch ((error) => {
      if (!error.wasJSON) {
        // Not json.  Vague server errors. (404's, etc)
        error = new Error(response.statusText);
        error.response = response;
      }
      throw error;
    });
  }
};

const parseJSON = function(response) {
  return response.json();
};

const postOptions = function(postData) {
  return {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  };
};

const POST = function(url, postData, component) {
  return fetch(url, postOptions(postData))
  .then(checkStatus)
  .then(parseJSON)
  .then((json) => {
    console.log('POST success', json);
    return json;
  })
  .catch((error) => {
    console.log('POST failed', error);
    component.setState({
      isLoading: false,
      error
    });
  });
};

const api = {

  submitLogin(postData, component) {
    const url = `${ API_ROOT }/login`;
    return POST(url, postData, component);
  },

  submitRegister(postData, component) {
    const url = `${ API_ROOT }/signup`;
    return POST(url, postData, component);
  }

};

export default api;