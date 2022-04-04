import React from 'react';
import {Review} from '../../types/reviews';

// type reviewsItem = {
//   id: number;
//   image: string;
//   username: string;
//   rating: number;
//   text:string;
//   data:string;
// }

type ReviewsItemProps = {
  reviewsItem: Review;
}

function ReviewsItem({reviewsItem}:ReviewsItemProps): JSX.Element {
  const stars = `${reviewsItem.rating*20}%`;
  /* eslint-disable no-console */ console.log(reviewsItem); /* eslint-enable no-console */
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={reviewsItem.image} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {reviewsItem.username}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: stars}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviewsItem.text}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{reviewsItem.data}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
