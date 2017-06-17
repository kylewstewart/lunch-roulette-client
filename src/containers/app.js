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
      places: [],
      random_places: [],
      filters: {
        cost: "free",
        bodily_impact: "Yikes!",
        recommended_for: "hang over city"}
      }
  }

  componentDidMount(){
    this.getPlaces()
    this.getRandomPlaces(this.state.filters)
  }

  // Calls API: places#all, places response into a Place object with an empty
  // Reviews array and pushes each object into a place array in state
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

  // Calls API: reviews#all to recieves all reviews for a given Place, recieves
  // an array of Reviews and replaces the Reviews array in that Place object
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

  // Calls API: places#create and posts an object of filter settings, recieves
  // a random ordered array of Place objects that also includes aggregate review
  // statistics for each place and set state for random_places state.
  getRandomPlaces(filters){
    PlacesAdaptor.create(filters)
    .then(res => console.log(res))
      .then(res => this.setState({random_places: res}))
  }

  render() {
    if(!this.state.places[0]) {
      return <h3> Loading Page ...</h3>
    } else {
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


}
