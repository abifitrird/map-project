import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const MapComponent = (props) => {
  const { latitude, longitude, label } = props;

  useEffect(() => {
    const loader = new Loader({
      version: 'weekly',
    });

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: latitude, lng: longitude },
        zoom: 15,
      });

      new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map,
        icon: './images/marker.svg',
        label,
      });
    });
  }, [latitude, longitude]);

  return <div className='w-full h-full' id='map'></div>;
};

export default MapComponent;
