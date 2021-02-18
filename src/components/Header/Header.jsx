import React, { Component } from 'react';

function headerBtnClick() {
  const list = $('.navigation');
  list.toggle();
}

class Header extends React.Component {
  render() {
    return (
        <header>
            <button className="header__btn" onClick = {headerBtnClick}> <span>∞</span> MENU </button>
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
