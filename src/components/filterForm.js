import React, { Component } from 'react'
import { Form, Container, Input } from 'semantic-ui-react'

const costOptions = ['All','Practically Free', 'OK', 'OTT'].map(c => ({key: c, text: c, value: c}))
const recommendedForOptions = ['All','Feelings Friday', 'Javascript Module', 'Post-Lunch Nap in Kay'].map(c => ({key: c, text: c, value: c}))
const bodilyImpactOptions = ['All','Like I Went to Yoga', 'Fat Jeans Tomorrow', "Yikes, What's the Bathroom Code?" ].map(c => ({key: c, text: c, value: c}))


class FilterForm extends Component {
  constructor() {
    super()

    this.state = {
      cost: 'Practically Free',
      recommended_for: 'Feelings Friday',
      bodily_impact: 'Like I Went to Yoga'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e, obj) {
    console.log(obj.value)
    this.setState({[obj.field]: `${obj.value}`})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.getRandomPlaces(this.state)
  }


  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Select field={'cost'} onChange={this.handleChange} label='Cost' options={costOptions} />
            <Form.Select field={'recommended_for'} onChange={this.handleChange} label='Recommended For' options={recommendedForOptions} />
            <Form.Select field={'bodily_impact'} onChange={this.handleChange} label='Bodily Impact' options={bodilyImpactOptions} />
          </Form.Group>
          <Form.Button>Find me some grub!</Form.Button>
        </Form>
      </Container>
    )
  }

}

export default FilterForm
