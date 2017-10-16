import React, { Component } from 'react';
import { render } from 'react-dom';
import NavFrontendSpinner from 'nav-frontend-spinner'

import '../css/style.less'
import keenImage from '../assets/keen.png'

export default class Hello extends Component {
    render() {
        return (
            <div>
                <img src={ keenImage } alt='Commander Keen' />
                <NavFrontendSpinner/>
            </div>
        );
    }
}

render(<Hello />, document.getElementById('app'));