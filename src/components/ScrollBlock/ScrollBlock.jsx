import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ScrollBlock extends React.Component {
  render() {
    return (
    <div className="scroll-block">
        <p className="scroll-block__text"> {this.props.text} </p>
        <div className="scroll-block__arrow">
          <span className="scroll-block__arrow-down">
            <i className="fas fa-chevron-down"></i>
          </span>
          <span className="scroll-block__arrow-down">
            <i className="fas fa-chevron-down"></i>
          </span>
        </div>
    </div>
    )
  }
}
ScrollBlock.propTypes = {
  text: PropTypes.string,
}
export default ScrollBlock;
