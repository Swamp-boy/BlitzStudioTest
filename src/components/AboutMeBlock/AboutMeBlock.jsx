import React, { Component } from 'react';
import ScrollBlock from '../ScrollBlock/ScrollBlock.jsx';

class AboutBlock extends React.Component {
  render() {
    return (
        <div className="about">
            <div className="about-profile">
                <div className="about-profile__photo" ></div>
                <div className="about-profile__info">
                    <h1 className="about-profile__title">About Me</h1>
                    <p className="about-profile__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p className="about-profile__text about-profile__text_tablet">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <h2 className="about-profile__name">Jason Wood</h2>
                </div>
            </div>
            <div className="about__scroll">
                <ScrollBlock text="keep scrolling, there is still more to come."/>
            </div>

        </div>
    )
  }
}

export default AboutBlock;
