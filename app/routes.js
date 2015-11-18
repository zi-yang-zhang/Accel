// LIBRARY
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import {Route, Router, IndexRoute} from 'react-router';

// COMPONENT
import App from './components/App/App';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Service from './components/Service/Service';
import NotFoundSection from './components/NotFoundSection/NotFoundSection';

export default (
    <Router>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='home' component={Home}/>
            <Route path="contact" component={Contact}/>
            <Route path="service" component={Service}/>
            <Route path="about" component={About}/>
            <Route path="gallery" component={Gallery}/>
        </Route>
    </Router>
);
