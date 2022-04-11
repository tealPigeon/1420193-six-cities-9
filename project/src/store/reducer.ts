import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffersList, filterOffers, saveOffer, deleteOffer, loadOffers, setError, requireAuthorization} from './action';
import {cities} from '../mocks/cities';
import {Offer, Offers} from '../types/offer';
import {City} from '../types/city';
import {AuthorizationStatus} from '../const';

type initialStateType = {
  city: City;
  allOffers: Offers;
  offers: Offers;
  savedOffer:Offer | undefined;
  isDataLoaded: boolean;
  error: string;
  authorizationStatus: AuthorizationStatus;
}

const initialState : initialStateType = {
  city: cities[0],
  allOffers: [],
  offers: [],
  savedOffer:undefined,
  isDataLoaded: false,
  error:'',
  authorizationStatus:AuthorizationStatus.Unknown,
};
export const reducer =  createReducer(initialState, (builder) =>
{
  builder
    .addCase(changeCity, (state,action) =>
    {
      const city =action.payload;
      state.city = cities[city.id-1];
    })
    .addCase(saveOffer, (state,action) =>
    {
      state.savedOffer = action.payload;
    })
    .addCase(deleteOffer, (state) =>
    {
      state.savedOffer = undefined;
    })
    .addCase(fillOffersList, (state) =>
    {
      state.offers = state.allOffers.filter((offer) => offer.city.name === state.city.name);
    })
    .addCase(filterOffers, (state,action) =>
    {
      switch (action.payload)
      {
        case 'Top rated first':
          state.offers = state.offers.sort((a, b) => b.rating - a.rating);
          break;
        case 'Price: low to high':
          state.offers = state.offers.sort((a, b) => a.price - b.price);
          break;
        case 'Price: high to low':
          state.offers = state.offers.sort((a, b) => b.price - a.price);
          break;
        default:
          state.offers = state.offers.filter((offer) => offer.city.name === state.city.name);
      }
    })
    .addCase(loadOffers, (state, action) => {
      state.allOffers = action.payload;
      state.offers = state.allOffers.filter((offer) => offer.city.name === state.city.name);
      /* eslint-disable no-console */      console.log(action.payload.length); /* eslint-enable no-console */
      state.isDataLoaded = true;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
      /* eslint-disable no-console */      console.log(action.payload); /* eslint-enable no-console */

    });
});
