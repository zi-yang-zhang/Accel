// LIBRARY
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

// COMPONENT
import App from './components/App/App';
import Contact from './components/Contact/Contact';
import HomeSection from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Service from './components/Service/Service';
import NotFoundSection from './components/NotFoundSection/NotFoundSection';

export default (
  <Route name='app' path='/' handler={App}>
    <Route name='home' path='#home' handler={HomeSection}/>
    <Route name='contact' path="#contact" handler={Contact}/>
    <Route name='service' path="#service" handler={Service}/>
    <Route name='about' path="#about" handler={About}/>
    <Route name='gallery' path="#gallery" handler={Gallery}/>
    <DefaultRoute handler={HomeSection} />
    <NotFoundRoute handler={NotFoundSection} />
  </Route>
);
