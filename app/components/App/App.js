/**
 * Created by robert on 23/09/15.
 */
// LIBRARY
import React from 'react';
import Router from 'react-router';

// COMPONENT

import HtmlHeaderTags from '../HTMLHeader/HtmlHeaderTags';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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
        {this.props.children}
      </div>
    );
  }
}

App.prototype.displayName = 'App';
