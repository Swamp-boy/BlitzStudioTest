import React, { Component } from 'react';

class AboutBlock extends React.Component {
  render() {
    return (
        <div className="about">
            <div className="about-profile">
                <div className="about-profile__photo" ></div>
                <div className="about-profile__info">
                    <h1 className="about-profile__title">About Me</h1>
                    <p className="about-profile__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <h2 className="about-profile__name">Jason Wood</h2>
                </div>
            </div>

        </div>
    )
  }
}

export default AboutBlock;
