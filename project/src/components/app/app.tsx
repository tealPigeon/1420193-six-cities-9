import React from 'react';
import Main from '../main/main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Room from '../property/property';
import Favorites from '../favorites/favorites';
import SignIn  from '../login/login';
import PrivateRoute from '../private-route';
import NotFound from '../not-found/not-found';
import {Offers} from '../../types/offer';
import {Reviews} from '../../types/reviews';
import {City} from '../../types/city';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';

type AppProps = {
  offers: Offers;
  reviews: Reviews;
  cities: City[];
}

function App({offers, reviews, cities}: AppProps): JSX.Element {
  const {isDataLoaded} = useAppSelector((state) => state);
  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<SignIn />} />
        <Route index element={<Main cities={cities}/>} />
        <Route path='*' element={
          <NotFound/>
        }
        />
        <Route path='offer/:id' element={<Room reviews={reviews}/>} />
        <Route path='favorites' element=
          {
            <PrivateRoute>
              <Favorites offers={offers}/>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>);
}

export default App;
