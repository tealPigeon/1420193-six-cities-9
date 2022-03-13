import React, {useState} from 'react';
import Card from '../card/card';
import {Offer, Offers} from '../../types/offer';

type OffersListProps = {
  offers: Offers;
}

function OffersList({offers}:OffersListProps): JSX.Element {

  const [activeCardId, setActiveCardId] = useState<Offer | undefined>();

  return (
    <>
      {offers.map((offer) => <div  key={offer.id}  onMouseOver={() => {setActiveCardId(offer);   /* eslint-disable no-console */ console.log(activeCardId); /* eslint-enable no-console */}}><Card  offer={offer} key={offer.id}  /></div>)}
    </>
  );}

export default OffersList;
