import React, { Component } from 'react';
import classNames from 'classnames';
import Actions from '../../actions/gallery.actions';

import './navigation.scss';

import { DEFAULT_FEATURE } from '../../constants/constants';



class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = { activeFeature: DEFAULT_FEATURE };
    }

    // todo: figure out why we have to click twice
    handleClick = (feature) => {
        Actions.setFeature(feature);

        const { history } = window;
        history.replaceState(null, feature, `#${feature}`);

        this.setState({ activeFeature: feature });
    };

    render() {
        let popularClass = classNames({
            'nav__link': true,
            '_is_active': this.state.activeFeature === 'popular'
        });

        let freshClass = classNames({
            'nav__link': true,
            '_is_active': this.state.activeFeature === 'fresh'
        });

        return (
            <nav className="nav">
                <ol className="nav__list">
                    <li className="nav__item">
                        <a className={popularClass}
                           onClick={this.handleClick.bind(this, 'popular')}
                           title="Popular">
                            Popular
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className={freshClass}
                           onClick={this.handleClick.bind(this, 'fresh')}
                           title="Fresh">
                            Fresh
                        </a>
                    </li>
                </ol>
            </nav>
        );
    }
}

export default Navigation;
