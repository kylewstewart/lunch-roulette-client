import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { RestaurantsAdaptor } from '../adapters/restaurantsAdaptor'
import { ReviewsAdaptor } from '../adapters/reviewsAdaptor'
import Main from '../components/main'

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      restaurants: [],
      reviews: []
    }
  }

  componentDidMount(){
    RestaurantsAdaptor.all()
    .then( res => this.setState({ restaurants: res }) )
    ReviewsAdaptor.all()
    .then( res => this.setState({ reviews: res }) )
  }

  // createRestaurant(name){
  //   RestaurantsAdaptor.create().then( restaurant => this.setState((prevState) => {
  //     return {
  //       restaurant:
  //     }
  //   }))
  // }

  render() {
    return (
      <Main restaurants={this.state.restaurants} reviews={this.state.reviews} />
    )
  }




}
