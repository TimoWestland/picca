import React, { Component } from 'react';
import Header from '../components/header/header';
import Navigation from '../components/navigation/navigation';
import Gallery from '../components/gallery/gallery';

import '../../scss/app.scss';

/**
 * Layout super wrapper
 */
class Layout extends Component {
    render() {
        return (
            <section>
                <Header />
                <Navigation />
                <Gallery />
            </section>
        );
    }
}

export default Layout;
