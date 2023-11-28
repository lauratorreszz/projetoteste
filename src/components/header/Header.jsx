import React from 'react';
import './header.css';

const Header = () => (
  <div className="DUCK__header section__padding" id="home">
    <div className="DUCK__header-content">
      <h1 className="gradient__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
      <p>Pellentesque nec diam et ipsum dictum lacinia. Phasellus id urna eu mauris fringilla consequat. Donec arcu nunc, volutpat ut lectus vel, blandit eleifend lorem.</p>

      <div className="DUCK__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
    </div>

  </div>
);

export default Header;