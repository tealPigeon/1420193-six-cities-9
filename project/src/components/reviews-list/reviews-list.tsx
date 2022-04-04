import React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import {Reviews} from '../../types/reviews';

// type reviewsItem = {
//   id: number;
//   image: string;
//   username: string;
//   rating: number;
//   text:string;
//   data:string;
// }

type ReviewsListProps = {
  reviewsList: Reviews;
}

function ReviewsList({reviewsList}:ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviewsList.map((reviewsItem)=> <ReviewsItem key={reviewsItem.id} reviewsItem={reviewsItem}/>)}
    </ul>
  );
}

export default ReviewsList;
