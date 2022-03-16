import React from 'react';

export default function Section() {
  return (
    <div className='section-wrapper'>
      <img src={require('../images/photo-grid.png')} alt='Grid' />
      <div className='section-text'>
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
