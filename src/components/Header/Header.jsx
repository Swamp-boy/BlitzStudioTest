import React, { Component } from 'react';
import NavMenu from '../navMenu/navMenu.jsx';

function headerBtnClick() {
  const list = $('.navigation');
  list.toggle(300);
}

class Header extends React.Component {
  render() {
    return (
        <header>
            <button className="header__btn" onClick = {headerBtnClick}> <span>∞</span> MENU </button>
            <NavMenu navMod="top" mod="white"/>
        </header>
    )
  }
}

export default Header;
