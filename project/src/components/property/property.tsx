import React from 'react';
import '../../public/css/main.css';
import CommentForm from '../comment-form/comment-form';
import {useParams} from 'react-router';
import {Offer} from '../../types/offer';
import ReviewsList from '../reviews-list/reviews-list';
import {Reviews} from '../../types/reviews';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import {useAppSelector} from '../../hooks';
import Header from '../header/header';

type PropertyProps = {
  reviews: Reviews;
}

function Property({reviews}:PropertyProps): JSX.Element {
  const id = useParams();
  const offers = useAppSelector((state) => state.offers);
  const city = useAppSelector((state) => state.city);
  const point = useAppSelector((state) => state.savedOffer);
  const propertyOffer : Offer = offers.filter((offer) => String(offer.id)===id.id )[0];
  const offerList = offers.filter((offer) => offer.city.name===propertyOffer.city.name && String(offer.id) !== id.id);
  const stars = `${propertyOffer.rating*20}%`;

  return (
    <React.Fragment>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <div className="page">
        <Header/>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {
                  propertyOffer.images.map((img) => (
                    <div className="property__image-wrapper" key={propertyOffer.id}>
                      <img className="property__image" src={img} alt='' />
                    </div> ))
                }
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {
                  propertyOffer.isPremium ? (<div className="property__mark"><span>Premium</span></div>) : null
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {propertyOffer.title}
                  </h1>
                  {
                    propertyOffer.isFavorite ? (
                      <button className="property__bookmark-button button" type="button">
                        <svg className="property__bookmark-icon" style={{stroke: '#4481c3'}} width={31} height={33}>
                          <use xlinkHref="#icon-bookmark" />
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>) : (
                      <button className="property__bookmark-button button" type="button">
                        <svg className="property__bookmark-icon" width={31} height={33}>
                          <use xlinkHref="#icon-bookmark" />
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>)
                  }
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: stars}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value"> {propertyOffer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {propertyOffer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {propertyOffer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {propertyOffer.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value"> {propertyOffer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {propertyOffer.goods.map((good) => <li className="property__inside-item" key={good}> {good}</li>)}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={propertyOffer.host.avatarUrl} width={74} height={74} alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {propertyOffer.host.name}
                    </span>
                    <span className="property__user-status">
                      {propertyOffer.host.isPro ? 'Pro' : null}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {propertyOffer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
                  <ReviewsList reviewsList={reviews}/>
                  <CommentForm />
                </section>
              </div>
            </div>
            <section style={{width: '1300px',  margin: '20px auto'}}>
              <Map offers={offerList.slice(0, 3)} selectedPoint={point} key={city.id}/>
            </section>


          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <OffersList offers={offerList.slice(0, 3)} />
              </div>
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>);
}

export default Property;
