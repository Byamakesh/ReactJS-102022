import React, { Component, Fragment } from 'react';
import './Header.css';

///////////Class Component//////////
class Header extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <div className="logo">React App</div>
                    <input></input>
                    <div style={{ color: 'white', fontSize: '20px' }}>User Text Here</div>
                </header>
                <hr />
            </Fragment>
        )
    }
}


export default Header;
