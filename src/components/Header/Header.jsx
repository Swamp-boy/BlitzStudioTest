import React, { Component } from 'react';
import NavMenu from '../navMenu/navMenu.jsx';

function headerBtnClick() {
  const menu = document.querySelector('.navigation_top');
  const isVisible = menu.offsetWidth > 0 || menu.offsetHeight > 0;

  menu.style.display = isVisible ? 'none' : 'block';
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
