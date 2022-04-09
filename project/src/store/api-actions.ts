import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../store';
import {store} from '../store';
import {Offers} from '../types/offer';
import {loadOffers, setError} from './action';
import {errorHandle} from '../services/error-handle';
import {APIRoute, TIMEOUT_SHOW_ERROR} from '../const';
// import {saveToken, dropToken} from '../services/token';

// import {AuthData} from '../types/auth-data';
// import {UserData} from '../types/user-data';

export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Offers);
      store.dispatch(loadOffers(data));
    }
    catch (error) {
      errorHandle(error);
    }
  },
);

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

// export const checkAuthAction = createAsyncThunk(
//   'user/checkAuth',
//   async () => {
//     await api.get(APIRoute.Login);
//     store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
//   },
// );

// export const loginAction = createAsyncThunk(
//   'user/login',
//   async ({login: email, password}: AuthData) => {
//     const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
//     saveToken(token);
//     store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
//   },
// );

// export const logoutAction = createAsyncThunk(
//   'user/logout',
//   async () => {
//     await api.delete(APIRoute.Logout);
//     dropToken();
//     store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
//   },
// );
