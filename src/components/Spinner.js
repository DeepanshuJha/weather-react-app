import React from 'react';
import spinner from '../assets/sunny-light.svg'

export default () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: '200px', margin: ' 40px auto', display: 'block' }}
      />
    </div>
  );
};