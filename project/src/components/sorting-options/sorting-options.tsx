import React, {useState} from 'react';
import {filterOffers} from '../../store/action';
import {useAppDispatch} from '../../hooks';

function SortingOptions(): JSX.Element {
  const dispatch = useAppDispatch();
  const [state, setState] = useState(false);
  const [filter, setFilter] =useState('Popular');
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type"  onClick={() => setState(!state)} tabIndex={0}>
        {filter}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      {
        state ?
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" onClick={()=>{dispatch(filterOffers('Popular'));setFilter('Popular');}} tabIndex={0}>Popular</li>
            <li className="places__option"onClick={()=>{dispatch(filterOffers('Price: low to high'));setFilter('Price: low to high');}}  tabIndex={0}>Price: low to high</li>
            <li className="places__option"onClick={()=>{dispatch(filterOffers('Price: high to low'));setFilter('Price: high to low');}}  tabIndex={0}>Price: high to low</li>
            <li className="places__option"onClick={()=>{dispatch(filterOffers('Top rated first'));setFilter('Top rated first');}}  tabIndex={0}>Top rated first</li>
          </ul> : null
      }

    </form>);}

export default SortingOptions;
