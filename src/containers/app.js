import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { PlacesAdaptor } from '../adapters/placesAdaptor'
import { ReviewsAdaptor } from '../adapters/reviewsAdaptor'
import PlacesList from '../components/placesList'
import PlaceReviews from '../components/placeReviews'


export default class App extends Component {
  constructor(){
    super()

    this.state = {
      places: [{
        place_id: 1,
        name: "Essen",
        location: "100 Broad Street, NY, NY, 10004",
        image: "http://experiencenomad.com/wp-content/uploads/2014/02/essen-1024x764.jpg",
        authorization_code: "password",
        avg_star_rating: 4,
        mode_cost: "OTT",
        mode_bodily_impact: "Like Yoga",
        mode_recommended_for: "Feelings Friday"
      }],

    }
  }

  // componentDidMount(){
  //   PlacesAdaptor.all().then(res => res.forEach(place => {
  //     const reviews = this.getPlaceReviews(place.id)
  //     this.setState(prevState => {
  //       places: prevState.places.push({
  //         id: place.id,
  //         name: place.name,
  //         location: place.location,
  //         image: place.image,
  //         reviews: reviews
  //         })
  //       })
  //     }))
  //   }

  // getPlaceReviews(id){
  //   ReviewsAdaptor.all(id)
  //   .then(res => { this.setState(prevState => {
  //       return { places: prevState.places.map( place => {
  //           if (place.id !== id) {
  //             return place
  //           }
  //           else {
  //             place.reviews = res
  //             return place
  //           }
  //         })
  //       }
  //     })
  //   })
  // }


  render() {
      return (
        <div>
          <PlacesList places={this.state.places}/>
          <Route exact path='/places/:id'
            render={(routerProps) => {
              const id = routerProps.match.params.id
              const place = this.state.places.find(p => p.id === parseInt(id))
              console.log(place)
              return <PlaceReviews place={place} />
            }}
          />
        </div>
      )
  }


}