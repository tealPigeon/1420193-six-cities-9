import React from 'react';
import Main from '../main/main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Room from '../property/property';
import Favorites from '../favorites/favorites';
import SignIn  from '../login/login';
import PrivateRoute from '../private-route';
import NotFound from '../not-found/not-found';

type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<SignIn />} />
        <Route index element={<Main offersCount={offersCount}/>} />
        <Route path='*' element={
          <NotFound/>
        }
        />
        <Route path='offer/:id' element={<Room />} />
        <Route path='favorites' element=
          {
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>);
}

export default App;
