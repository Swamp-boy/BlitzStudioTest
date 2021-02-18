import React, { Component } from 'react';
import NavMenu from '../navMenu/navMenu.jsx';

class SecondMenuBlock extends React.Component {
  render() {
    return (
        <div className="second-menu">
            <NavMenu navMod="bottom" mod="black"/>
        </div>
    )
  }
}

export default SecondMenuBlock;
