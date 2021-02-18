import React from 'react'
import PropTypes from 'prop-types';

class navMenu extends React.Component {
  render() {
    return (
        <nav className={`navigation navigation_${this.props.navMod}`}>
        <li className={`navigation__element navigation__element_${this.props.mod}`}> HOME </li>
            <li className={`navigation__element navigation__element_${this.props.mod}`}> ABOUT ME </li>
            <li className={`navigation__element navigation__element_${this.props.mod}`}> PORTFOLIO </li>
            <li className={`navigation__element navigation__element_${this.props.mod}`}> CONTACT </li>
        </nav>
    )
  }
}
navMenu.propTypes = {
  navMod: PropTypes.string,
  mod: PropTypes.string,
}
export default navMenu;
