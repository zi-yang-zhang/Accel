// LIBRARY
import React from 'react';

import {Router} from 'react-router';
import { render } from 'react-dom'

// DEPENDENCY
let routes = require('./routes');

if(typeof document !== 'undefined' && window) {
  window.onload = () => {
    render(<Router routes={routes}/>, document.getElementById('app'))
  };
}
