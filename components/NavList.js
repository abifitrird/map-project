import axios from 'axios';
import React, { useEffect, useState } from 'react';

const NavList = () => {
  const [expandMenu, setExpandMenu] = useState(0);
  const chooseMenu = (menu) => {
    if (expandMenu !== menu) {
      setExpandMenu(menu);
    } else {
      setExpandMenu(0);
    }
  };

  const [areaList, setAreaList] = useState([]);
  const fetchData = async () => {
    const areaList = await axios
      .get('http://localhost:3001/area-list')
      .then((res) => setAreaList(res.data))
      .catch((error) => console.log(error));
    return areaList;
  };

  useEffect(async () => {
    await fetchData();
  }, []);
  return (
    <div
      className='h-screen w-full text-white text-sm'
      style={{ backgroundColor: '#282c37' }}
    >
      <div className='border-b px-7 py-4' style={{ borderColor: '#242832' }}>
        <div className='flex justify-between '>
          <p>Filter by favorite</p>
          <img className='rotate-180' alt='' src='./images/arrow.svg' />
        </div>
      </div>
      <ul className='px-3 py-1'>
        {areaList?.map((item) => {
          return (
            <li
              key={item.id}
              className='border-b p-4'
              style={{ borderColor: '#242832' }}
            >
              <div
                className='flex justify-between'
                onClick={() => chooseMenu(item.id)}
              >
                <p>{item.name}</p>
                {item.districts.length > 0 && (
                  <img
                    className={expandMenu == item.id ? '' : 'rotate-180'}
                    alt=''
                    src='./images/arrow.svg'
                  />
                )}
              </div>

              {expandMenu == item.id && (
                <ul style={{ color: '#7c939b' }}>
                  {item.districts.map((element) => {
                    return (
                      <li className='text-xs px-2 py-3' key={element}>
                        {element}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavList;
