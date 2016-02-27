import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
    render() {
        return (
            <header className="header" role="banner">
                <div className="header__container">
                    <h1 className="header__title">PICCA</h1>
                    <h2 className="header__subTitle">Dream bigger, Get money, Pay bitches.</h2>
                </div>
            </header>
        );
    }
}

export default Header;
