import React, {useState} from 'react';
import {MouseEvent} from 'react';
import Card from '../card/card';
import {Offer, Offers} from '../../types/offer';

type OffersListProps = {
  offers: Offers;
  onListItemHover: (listItemName: string) => void;
}

function OffersList({offers, onListItemHover}:OffersListProps): JSX.Element {

  const [activeCardId, setActiveCardId] = useState<Offer | undefined>();
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const listItemHoverHandler = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onListItemHover(event.currentTarget.innerText);
  };


  return (
    <>
      {offers.map((offer) => <div  key={offer.id}  onMouseOver={() => {setActiveCardId(offer);   /* eslint-disable no-console */ console.log(activeCardId); /* eslint-enable no-console */}}><Card  offer={offer} key={offer.id}  /></div>)}
    </>
  );}

export default OffersList;
