import React, {useState} from 'react';
import '../../public/css/main.css';
import CommentForm from '../comment-form/comment-form';
import {useParams} from 'react-router';
import {Offers, Offer} from '../../types/offer';
import ReviewsList from '../reviews-list/reviews-list';
import {Reviews} from '../../types/reviews';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';

type PropertyProps = {
  offers: Offers;
}

function Property({offers}:PropertyProps): JSX.Element {
  const id = useParams();
  const propertyOffer : Offer = offers.filter((offer) => String(offer.id)===id.id)[0];
  const stars = `${propertyOffer.rating*20}%`;
  const reviews : Reviews= [
    {
      id: 1,
      image: './img/avatar-max.jpg',
      username: 'Vlad',
      rating: 1,
      text:'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      data:'April 2019',
    },
    {
      id: 2,
      image: 'data:image/jpeg;base64,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',
      username: 'Max',
      rating: 3,
      text:'mew mew mew mew',
      data:'May 2019',
    }];

  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(
    undefined,
  );

  const onListItemHover = (listItemName: string) => {
    const currentPoint = offers.find((offer) => offer.name === listItemName);

    setSelectedPoint(currentPoint);
  };

  return (
    <React.Fragment>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="/">
                  <img className="header__logo" src="./img/logo.svg" alt="6 cities logo" width={81} height={41} />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="/#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="/#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
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
                    {propertyOffer.name}
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
                    3 Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max 4 adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value"> {propertyOffer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    <li className="property__inside-item">
                      Wi-Fi
                    </li>
                    <li className="property__inside-item">
                      Washing machine
                    </li>
                    <li className="property__inside-item">
                      Towels
                    </li>
                    <li className="property__inside-item">
                      Heating
                    </li>
                    <li className="property__inside-item">
                      Coffee machine
                    </li>
                    <li className="property__inside-item">
                      Baby seat
                    </li>
                    <li className="property__inside-item">
                      Kitchen
                    </li>
                    <li className="property__inside-item">
                      Dishwasher
                    </li>
                    <li className="property__inside-item">
                      Cabel TV
                    </li>
                    <li className="property__inside-item">
                      Fridge
                    </li>
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src="./img/avatar-angelina.jpg" width={74} height={74} alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                        Angelina
                    </span>
                    <span className="property__user-status">
                        Pro
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                    </p>
                    <p className="property__text">
                      An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
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
            {/*<section className="property__map map"/>*/}
            <section style={{width: '1300px',  margin: '20px auto'}}>
              <Map offers={offers} selectedPoint={selectedPoint}/>
            </section>


          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <OffersList offers={offers} onListItemHover={onListItemHover}/>
              </div>
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>);
}

export default Property;

// Property
