import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffersList} from './action';
//
import {cities} from '../mocks/cities';
import {offers} from '../mocks/offers';

const initialState = {
  city: cities[0],
  offers: offers.filter((offer) => offer.city === cities[0].name),
};
export const reducer =  createReducer(initialState, (builder) =>
{
  builder
    .addCase(changeCity, (state,action) =>
    {
      const city =action.payload;
      state.city = cities[city.id-1];
      /* eslint-disable no-console */ console.log(state.city); /* eslint-enable no-console */
    })
    .addCase(fillOffersList, (state) =>
    {
      state.offers = offers.filter((offer) => offer.city === state.city.name);
      /* eslint-disable no-console */ console.log(state); /* eslint-enable no-console */
    });
});
