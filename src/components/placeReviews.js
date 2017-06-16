import React from 'react'

export default function PlaceReviews(props){
  const reviews = props.place.reviews.map(review => <li>Rating: {review.star_rating} Cost: {review.cost} Person: {review.email}</li>)

  return (

    <div>
      <h2> {props.place.name} </h2>
      <p> Location: {props.place.location} </p>
      <img src={props.place.image} width="500"/>

      <p> Reviews: <ul>{reviews}</ul>  </p>
    </div>
  )
}
