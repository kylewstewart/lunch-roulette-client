import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Form, Container, Input } from 'semantic-ui-react'


export default class AuthCode extends Component {
  constructor() {
    super()

    this.state = {
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e, obj) {
    this.setState({email: `${obj.value}`})

  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.getAuthCode(this.state)
  }


  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input onChange={this.handleChange} placeholder='joe.doe (@flatironschool not required)' label={'Enter Your Flatiron Email'}  />
          <Form.Button>Get Authorization Code</Form.Button>
        </Form>
      </Container>
    )
  }


}
