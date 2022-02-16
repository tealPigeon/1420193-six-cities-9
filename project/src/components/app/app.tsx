import React from 'react';
import Main from '../main/main';
// import PropertyNotLogged from '../property-not-logged/property-not-logged';
// import Property from '../property/property';
// import Favorites from '../favorites/favorites';
// import Login from '../login/login';
// import MainEmpty from '../main-empty/main-empty';
// import FavoritesEmpty from '../favorites-empty/favorites-empty';
type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps): JSX.Element {
  return <Main offersCount={offersCount}/>;
  // return <PropertyNotLogged/>;
  // return <Property/>;
  // return <Favorites/>;
  // return <Login/>;
  // return <MainEmpty/>;
  // return <FavoritesEmpty/>;
}

export default App;
