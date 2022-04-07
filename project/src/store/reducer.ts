import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffersList, filterOffers, saveOffer, deleteOffer} from './action';
import {cities} from '../mocks/cities';
import {offers} from '../mocks/offers';
import {Offer, Offers} from '../types/offer';
import {City} from '../types/city';

type initialStateType = {
  city: City;
  offers: Offers;
  savedOffer:Offer | undefined;
}

const initialState : initialStateType = {
  city: cities[0],
  offers: offers.filter((offer) => offer.city === cities[0].name),
  savedOffer:undefined,
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
      state.offers = offers.filter((offer) => offer.city === state.city.name);
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
          state.offers = offers.filter((offer) => offer.city === state.city.name);
      }
    });
});
