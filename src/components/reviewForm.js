import React, { Component } from 'react'
import { Form, Container, Input } from 'semantic-ui-react'

const starOptions = [1,2,3,4,5].map(n => ({key: n, text: n, value: n}))
const costOptions = ['Practically Free', 'OK', 'OTT'].map(c => ({key: c, text: c, value: c}))
const recommendedForOptions = ['Feelings Friday', 'Javascript Module', 'Post-Lunch Nap in Kay'].map(c => ({key: c, text: c, value: c}))
const bodilyImpactOptions = ['Like I Went to Yoga', 'Fat Jeans Tomorrow', "Yikes, What's the Bathroom Code?" ].map(c => ({key: c, text: c, value: c}))

class ReviewForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      place_id: '',
      authorization_code: '',
      star_rating: '',
      email: '',
      cost: '',
      recommended_for: '',
      bodily_impact: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange(e, obj) {
    console.log(obj)
    this.setState({[obj.field]: `${obj.value}`})
    this.setState({email: `${this.props.email}`})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.addReview(this.state)
  }

  getPlaces = () => this.props.places.map(place => ({
      key: `${place.id}`,
      text: `${place.name}`,
      value: `${place.id}`
      }))

  render() {

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>

            <Form.Select field={'place_id'} onChange={this.handleChange} label='Restaurants' options={this.getPlaces()} placeholder='Restaurant' />
            <Form.Input field={'authorization_code'} onChange={this.handleChange} label='Authorization Code' />
            <Form.Select field={'star_rating'} onChange={this.handleChange} label='Stars' options={starOptions} />
            <Form.Select field={'cost'} onChange={this.handleChange} label='Cost' options={costOptions} />
            <Form.Select field={'recommended_for'} onChange={this.handleChange} label='Recommended For' options={recommendedForOptions} />
            <Form.Select field={'bodily_impact'} onChange={this.handleChange} label='Bodily Impact' options={bodilyImpactOptions} />

          <Form.Button>Submit</Form.Button>
        </Form>
      </Container>
    )
  }
}


export default ReviewForm
