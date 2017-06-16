import React from 'react'
import { Link } from 'react-router-dom'

export default function PlacesList(props) {
  const places  = props.places


      return (
        <div>
          <div>
            { places.map(place =>
              <li key={place.id}>
                <Link to={`/places/${place.id}`}>
                  {place.name}
                </Link>
              </li>
            )}
          </div>
        </div>
      )

}
