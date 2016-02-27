import React, { Component } from 'react';
import './navigation.scss';


class Navigation extends Component {
    render() {
        return (
            <nav className="nav">
                <ol className="nav__list">
                    <li className="nav__item">
                        <a className="nav__link _is_active" href="#" title="Popular">Popular</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#" title="New">New</a>
                    </li>
                </ol>
            </nav>
        );
    }
}

export default Navigation;
