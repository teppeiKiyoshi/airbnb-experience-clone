import React from 'react';
import Card from './Card';
import data from './Data';

export default function Cards() {
  const cardData = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return <div className='card-main'>{cardData}</div>;
}
