// LIBRARY
import {Router} from 'react-router';
import { render } from 'react-dom'

// DEPENDENCY
let routes = require('./routes');

if(typeof document !== 'undefined' && window) {
  window.onload = () => {
    render(routes, document.getElementById('app'))
    //Router.run(routes, Router.HistoryLocation, (Handler) => {
    //  React.render(<Handler/>, document.getElementById('app'));
    //});
  };
}
