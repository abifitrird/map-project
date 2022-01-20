import React, { useState } from 'react';

// console.log ({menu});
const Sidebar = () => {
  const [menu, setMenu] = useState([
    {
      title: 'Browse',
      imageUrl: './images/browse.svg',
      description: 'menu',
      isActive: true,
    },
    {
      title: 'Suggest Attraction',
      imageUrl: './images/suggest-attraction.svg',
      description: 'menu',
      isActive: false,
    },
    {
      title: 'Videos',
      imageUrl: './images/videos.svg',
      description: 'menu',
      isActive: false,
    },
    {
      title: 'Blog',
      imageUrl: './images/blog.svg',
      description: 'menu',
      isActive: false,
    },
    {
      title: 'About',
      imageUrl: './images/about.svg',
      description: 'menu',
      isActive: false,
    },
  ]);

  const chooseMenu = (item) => {
    const tempMenu = menu.map((element) => {
      if (element.title == item) {
        element.isActive = !element.isActive;
      } else {
        element.isActive = false;
      }
      return element;
    });
    setMenu(tempMenu);
  };
  return (
    <div
      className='h-screen w-28 text-white text-xs'
      style={{ backgroundColor: '#313541', color: '#8298a0' }}
    >
      <div className='grid grid-flow-row'>
        {menu.map((item) => {
          return (
            <div
              key={item.title}
              className={`w-full cursor-pointer grid justify-items-center p-3 gap-y-2 text-center break-normal border-b ${
                item.isActive ? 'active-bar' : 'accent-slate-50'
              }`}
              style={{ borderColor: '#242832' }}
              onClick={() => chooseMenu(item.title)}
            >
              <img src={item.imageUrl} alt={item.description} />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
