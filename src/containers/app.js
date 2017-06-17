import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { PlacesAdaptor } from '../adapters/placesAdaptor'
import { ReviewsAdaptor } from '../adapters/reviewsAdaptor'

import PlacesList from '../components/placesList'
import PlaceReviews from '../components/placeReviews'
import Buttons from '../components/buttons'
import ReviewForm from '../components/reviewForm'
import FormExampleSubcomponentControl from '../components/formExample'


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      places: [],
      random_places: [],
      filters: {
        cost: "free",
        bodily_impact: "Yikes!",
        recommended_for: "hang over city"}
      }
    this.addReview = this.addReview.bind(this)
  }

  componentDidMount(){
    this.getPlaces()
    this.getRandomPlaces(this.state.filters)
  }

  /* Calls places#all, places response into Place objects with an empty
  Reviews array and pushes each object into a Place array in state */
  getPlaces(){
    PlacesAdaptor.all()
      .then(res => res.forEach(place => {
        const reviews = this.getPlaceReviews(place.id)
        this.setState(prevState => {
          places: prevState.places.push({
            id: place.id,
            name: place.name,
            location: place.location,
            image: place.image,
            reviews: reviews
          })
        })
      }))
  }

  /* Calls reviews#all to recieves all reviews for a given Place, recieves
   an array of Reviews and replaces the Reviews array in that Place object */
  getPlaceReviews(id){
    ReviewsAdaptor.all(id)
      .then(res => { this.setState(prevState => {
        return { places: prevState.places.map( place => {
            if (place.id !== id) {
              return place
            }
            else {
              place.reviews = res
              return place
            }
        })}
      })})
  }

  /* Calls places#create and posts an object of filter settings from state,
  recieves a random ordered array of Place objects that includes aggregate review
  statistics and set state for random_places state. */
  getRandomPlaces(filters){
    PlacesAdaptor.create(filters)
    .then(res => console.log(res))
      .then(res => this.setState({random_places: res}))
  }

  addReview(data) {
    ReviewsAdaptor.create(data).then(res => console.log(res))
  }

  render() {
    if(!this.state.places[0]) {
      return <h3> Loading Page ...</h3>
    } else {
      return (
        <div>
          <Buttons />
          <PlacesList places={this.state.places}/>
          <Route exact path='/places/:id'
            render={(routerProps) => {
              const id = routerProps.match.params.id
              const place = this.state.places.find(p => p.id === parseInt(id))
              console.log(place)
              return <PlaceReviews place={place} />
            }}
            />
          <ReviewForm places={this.state.places} addReview={this.addReview}/>
        </div>
      )
    }
  }


}
