import React from 'react';
import Card from '../card/card';
import {Offers} from '../../types/offer';
import {deleteOffer, saveOffer} from '../../store/action';
import {useAppDispatch} from '../../hooks';

type OffersListProps = {
  offers: Offers;
}

function OffersList({offers}:OffersListProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      {offers.map((offer) => <div  key={offer.id} onMouseLeave={() => {dispatch(deleteOffer());}} onMouseEnter={() => {dispatch(saveOffer(offer));}}><Card  offer={offer} key={offer.id}  /></div>)}
    </>
  );}

export default OffersList;
