import React from 'react';

import star from '../images/star.png';

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  } else if (props.openSpots < 5) {
    badgeText = 'LIMITED';
  }
  return (
    <div className='card-wrapper'>
      {badgeText && <div className='card-badge'>{badgeText}</div>}
      <img src={props.coverImg} alt='User Profiles' />
      <div className='card-text'>
        <img src={star} alt='Stars' />
        <p>
          {props.stats.rating}{' '}
          <span>
            ({props.stats.reviewCount}) - {props.location}
          </span>
        </p>
        <div className='sub-text'>
          <p>{props.title}</p>
          <p>
            <strong>From PHP {props.price}</strong> / person
          </p>
        </div>
      </div>
    </div>
  );
}
