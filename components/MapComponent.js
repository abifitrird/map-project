import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const MapComponent = (props) => {
  const { latitude, longitude } = props;

  console.log({ latitude, longitude });

  useEffect(() => {
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: { lat: latitude, lng: longitude },
    });

    new google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map,
      title: 'Welcome To The Map Project!',
    });
  }, [latitude, longitude]);

  return <div className='w-full h-full' id='map'></div>;
};

export default MapComponent;
