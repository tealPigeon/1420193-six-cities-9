/* eslint-disable @typescript-eslint/no-unused-vars */

import React, {useRef, useEffect} from 'react';
// import OffersList from '../offers-list/offers-list';
import {Offers, Offer} from '../../types/offer';
import {Icon, Marker} from 'leaflet';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap/useMap';

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';


const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


type MapProps = {
  offers: Offers;
  selectedPoint: Offer | undefined;
}

function Map({offers, selectedPoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.lat,
          lng: offer.lng,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && offer.name === selectedPoint.name
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedPoint]);

  return (<div style={{height: '800px'}} ref={mapRef}></div>);
}

export default Map;
