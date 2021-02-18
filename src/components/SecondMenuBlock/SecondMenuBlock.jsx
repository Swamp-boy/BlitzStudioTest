import React, { Component } from 'react';

class SecondMenuBlock extends React.Component {
  render() {
    return (
        <div className="second-menu">
            <nav className="navigation">
                <li className="navigation__element navigation__element_gray"> HOME </li>
                <li className="navigation__element navigation__element_gray"> ABOUT ME </li>
                <li className="navigation__element navigation__element_gray"> PORTFOLIO </li>
                <li className="navigation__element navigation__element_gray"> CONTACT </li>
            </nav>
        </div>
    )
  }
}

export default SecondMenuBlock;
