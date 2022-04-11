import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {cities} from './mocks/cities';
import ErrorMessage from './components/error-message/errorMessage';
import {store} from './store';
import {Provider} from 'react-redux';
import {fetchOffersAction, checkAuthAction} from './store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App offers={offers} reviews={reviews} cities={cities}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
