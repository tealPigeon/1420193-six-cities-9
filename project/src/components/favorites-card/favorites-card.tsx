import React from 'react';
import {Offer} from '../../types/offer';
import {Link } from 'react-router-dom';

type FavoritesCardProps = {
  offer: Offer;
}

function FavoritesCard({offer}:FavoritesCardProps): JSX.Element {

  const stars = `${offer.rating*20}%`;
  return (
    <Link to={`/offer/${String(offer.id)}`} style={{margin: '32px'}}>
      <article className="favorites__card place-card">
        {
          offer.isPremium ? (
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
          ) :null
        }

        <div className="favorites__image-wrapper place-card__image-wrapper">
          <a href="/#">
            <img className="place-card__image" src={offer.images[0]} width={150} height={110} alt='' />
          </a>
        </div>
        <div className="favorites__card-info place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">{offer.price}</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>

            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width={18} height={19}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>

          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: stars}} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="/#">{offer.name}</a>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    </Link>
  );
}

export default FavoritesCard;
