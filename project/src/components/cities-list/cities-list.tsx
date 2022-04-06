import React from 'react';
import {City} from '../../types/city';
import {changeCity, fillOffersList} from '../../store/action';
import {useAppDispatch} from '../../hooks';

type CitiesListProps = {
  cities: City[];
  currentCityId: number;
}

function CitiesList({cities, currentCityId} : CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => city.id === currentCityId ?
          (
            <li className="locations__item" key={city.id} onClick={()=>{dispatch(changeCity(city)); dispatch(fillOffersList());}} >
              <a className="locations__item-link tabs__item tabs__item--active" href="/#">
                <span>{city.name}</span>
              </a>
            </li>
          ) :
          (
            <li className="locations__item" key={city.id} onClick={()=>{dispatch(changeCity(city)); dispatch(fillOffersList());}} >
              <a className="locations__item-link tabs__item" href="/#">
                <span>{city.name}</span>
              </a>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}

export default CitiesList;
