import React, { Component } from 'react';
import Header from '../Header/Header.jsx';
import ScrollBlock from '../ScrollBlock/ScrollBlock.jsx';

class TopBlock extends React.Component {
  render() {
    return (
        <div className="top-block">
          <Header />
          <div className="top-block__scroll">
            <ScrollBlock text="scroll down to see more"/>
          </div>
        </div>
    )
  }
}

export default TopBlock;
