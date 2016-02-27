import React, { Component } from 'react';
import Header from '../components/header/header';
import Navigation from '../components/navigation/navigation';

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
            </section>
        );
    }
}

export default Layout;
