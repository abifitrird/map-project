import React from 'react';

const AreaOverview = (props) => {
  return (
    <div
      className='absolute right-0 top-0 w-60 h-full'
      style={{ backgroundColor: '#282c37' }}
    >
      <img alt='' src='./images/merlion.svg' />
      <div className='active-bar px-4 py-3'>
        <p>Merlion</p>
      </div>
    </div>
  );
};

export default AreaOverview;
