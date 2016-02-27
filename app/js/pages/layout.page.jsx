import React, { Component } from 'react';
import Header from '../components/header/header';

import '../../scss/app.scss';

/**
 * Layout super wrapper
 */
class Layout extends Component {
    render() {
        return (
            <section>
                <Header />
            </section>
        );
    }
}

export default Layout;
