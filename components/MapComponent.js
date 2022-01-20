import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const MapComponent = () => {
  useEffect(() => {
    const loader = new Loader({
      version: 'weekly',
    });
    let map;

    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 15,
      });
    });
  }, []);
  return <div className='w-full h-full' id='map'></div>;
};

export default MapComponent;
