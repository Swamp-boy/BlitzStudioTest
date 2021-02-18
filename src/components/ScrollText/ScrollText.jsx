import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ScrollBlock extends React.Component {
  render() {
    return (
    <div className="scroll-block">
        <p className="scroll-block__text"> {this.props.text} </p>
        <div className="scroll-block__arrow">
            <img src="./../../assets/img/doubleArrow.png" alt=""/>
        </div>
    </div>
    )
  }
}
ScrollBlock.propTypes = {
  text: PropTypes.string,
}
export default ScrollBlock;
