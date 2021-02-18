import React, { Component } from 'react';

class Header extends React.Component {
  render() {
    return (
        <header>
            <nav className="navigation">
                <li className="navigation__element"> HOME </li>
                <li className="navigation__element"> ABOUT ME </li>
                <li className="navigation__element"> PORTFOLIO </li>
                <li className="navigation__element"> CONTACT </li>
            </nav>
        </header>
    )
  }
}

export default Header;
