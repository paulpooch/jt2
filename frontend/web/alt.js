import 'webpack-sails.io.js';

import Alt from 'alt';
import React from 'react';
import Router from 'react-router';

import routes from './routes';

const alt = new Alt();

Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root />, document.getElementById('reactRoot'));
});