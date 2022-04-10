import {useEffect, useState, MutableRefObject} from 'react';
import leaflet from 'leaflet';
import {Offers} from '../../types/offer';
import {Map, TileLayer} from 'leaflet';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  points: Offers,
): Map | null
{
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: points[0].city.location.latitude,
          lng: points[0].city.location.longitude,
        },
        zoom: points[0].city.location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  },[mapRef, map, points]);

  return map;
}

export default useMap;
