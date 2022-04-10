import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/city';
import {Offer} from '../types/offer';
export const changeCity = createAction<City>('city/change');
export const fillOffersList = createAction('offers/fill');
export const filterOffers = createAction<string>('offers/filter');
export const saveOffer = createAction<Offer>('offer/save');
export const deleteOffer = createAction('offer/delete');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const setError = createAction<string>('game/setError');
