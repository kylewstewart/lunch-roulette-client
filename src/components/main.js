import React from 'react'

export default function Main(props) {
  const restaurants  = props.restaurants
  const reviews  = props.reviews

  return (
    <div>
      <div> { restaurants.map( restaurant => restaurant.name )} </div>
      <div> { reviews.map( reviews => reviews.star_rating )} </div>
    </div>
  )

}
