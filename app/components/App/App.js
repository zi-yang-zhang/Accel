/**
 * Created by robert on 23/09/15.
 */
// LIBRARY
import React from 'react';
import { RouteHandler } from 'react-router';

// COMPONENT

import HtmlHeaderTags from '../HTMLHeader/HtmlHeaderTags';
import Header from '../Header/Header';

if (process.env.BROWSER) {
  require('./App.less');
}


export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <HtmlHeaderTags />
        <Header/>
        <div>
          <RouteHandler />
        </div>
      </div>
    );
  }
}

App.prototype.displayName = 'App';
