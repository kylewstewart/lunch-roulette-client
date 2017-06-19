import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { PlacesAdaptor } from '../adapters/placesAdaptor'
import { ReviewsAdaptor } from '../adapters/reviewsAdaptor'
import { UsersAdaptor } from '../adapters/usersAdaptor'

import PlacesList from '../components/placesList'
import PlaceReviews from '../components/placeReviews'
import Buttons from '../components/buttons'
import ReviewForm from '../components/reviewForm'
import AuthCode from '../components/authCode'
import FilterForm from '../components/filterForm'
import Header from '../components/header'


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      places: [],
      random_places: [],
      email: ''
      }
    this.addReview = this.addReview.bind(this)
    this.getRandomPlaces = this.getRandomPlaces.bind(this)
    this.getAuthCode = this.getAuthCode.bind(this)
  }

  componentDidMount() {
    const filters = {
      cost: 'Practically Free',
      recommended_for: 'Feelings Friday',
      bodily_impact: 'Like I Went to Yoga'
    }
    this.getRandomPlaces(filters)
  }

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

  getRandomPlaces(filters){
    PlacesAdaptor.create(filters)
      .then(res => this.setState({random_places: res}))
  }

  getAuthCode(email) {
    this.getPlaces()
    UsersAdaptor.authorization_code(email)
    this.setState({email: `${email.email}`})
  }

  addReview(data) {
    ReviewsAdaptor.create(data).then(res => console.log(res))
  }

  render() {
    if(!this.state.random_places[0]) {
      console.log(this.state.random_places)
      return <h3> Loading Page ...</h3>
    } else {
      return (
        <div>
          <Header />
          <FilterForm getRandomPlaces={this.getRandomPlaces}/>
          <PlacesList places={this.state.random_places}/>
          <AuthCode getAuthCode={this.getAuthCode} />
          <ReviewForm places={this.state.places} addReview={this.addReview}
                email={this.state.email} />

        </div>
      )
    }
  }


}
