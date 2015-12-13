// LIBRARY
import React from 'react';

import {Router} from 'react-router';
import { render } from 'react-dom'

// DEPENDENCY
import alt from './alt';

let routes = require('./routes');

if(typeof document !== 'undefined' && window) {
  window.onload = () => {
    /*eslint-disable no-unused-vars*/
    Iso.bootstrap((state, _, container) => {
      alt.bootstrap(state);
      render(<Router routes={routes}/>, container)

    });
    /*eslint-enable no-unused-vars*/
  };
}
