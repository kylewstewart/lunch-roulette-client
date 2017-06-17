import React from 'react'
import { Card, Icon, Container, Button, Divider, Header, Message } from 'semantic-ui-react'
import MainCard from './maincard.js'



function PlacesList(props){

    return (
      <Container>
        <Divider hidden />
        <Header as='h1' floated='left'>
          Flatiron Lunch Roulette <Icon name='food' />
        </Header>
        <Divider hidden clearing />
        <Divider hidden clearing />

        <Container text>
          <MainCard place={props.places[0]}/>
        </Container>


      </Container>
    )

}

export default PlacesList
