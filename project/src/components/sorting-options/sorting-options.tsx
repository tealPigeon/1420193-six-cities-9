import React from 'react';
import {filterOffers} from '../../store/action';
import {useAppDispatch} from '../../hooks';

function SortingOptions(): JSX.Element {
  const dispatch = useAppDispatch();
  // dispatch(filterOffers());
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
                      Popular
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li className="places__option places__option--active" onClick={()=>{dispatch(filterOffers('Popular'));}} tabIndex={0}>Popular</li>
        <li className="places__option"onClick={()=>{dispatch(filterOffers('Price: low to high'));}}  tabIndex={0}>Price: low to high</li>
        <li className="places__option"onClick={()=>{dispatch(filterOffers('Price: high to low'));}}  tabIndex={0}>Price: high to low</li>
        <li className="places__option"onClick={()=>{dispatch(filterOffers('Top rated first'));}}  tabIndex={0}>Top rated first</li>
      </ul>
    </form>);}

export default SortingOptions;
