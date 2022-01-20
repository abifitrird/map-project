import React from 'react';

const Navbar = () => {
  return (
    <div
      className='flex justify-between items-center font-semibold p-3'
      style={{ backgroundColor: '#f4f7fa', color: 'black' }}
    >
      TOP RATED TOURIST ATTRACTIONS IN SINGAPORE
      <div className='w-28 flex flex-row space-x-2'>
        <img alt='' src='./images/setting.svg' />
        <img alt='' src='./images/quest.svg' />
        <img alt='' src='./images/close.svg' />
      </div>
    </div>
  );
};

export default Navbar;
