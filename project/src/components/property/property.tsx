import React, {useState} from 'react';
import '../../public/css/main.css';
import CommentForm from '../comment-form/comment-form';
import {useParams} from 'react-router';
import {Offer} from '../../types/offer';
import ReviewsList from '../reviews-list/reviews-list';
import {Reviews} from '../../types/reviews';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import {useAppSelector} from '../../hooks';

type PropertyProps = {
  // offers: Offers;
  reviews: Reviews;
}

function Property({reviews}:PropertyProps): JSX.Element {
  const id = useParams();
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const propertyOffer : Offer = offers.filter((offer) => String(offer.id)===id.id)[0];
  const stars = `${propertyOffer.rating*20}%`;

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
              <Map city={city} offers={offers.slice(0, 3)} selectedPoint={selectedPoint}/>
            </section>


          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <OffersList offers={offers.slice(0, 3)} onListItemHover={onListItemHover}/>
              </div>
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>);
}

export default Property;

// Property
