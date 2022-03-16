import React from 'react';
import Section from './Section';

export default function Header() {
  return (
    <nav className='nav-bar'>
      <div className='img-wrapper'>
        <img src={require('../images/airbnb-logo.png')} alt='Air-BNB Logo' />
      </div>
      <Section />
    </nav>
  );
}
