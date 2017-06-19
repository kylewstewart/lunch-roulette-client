import React from 'react'
import { Card, Icon, Container, Button, Divider, Header, Message } from 'semantic-ui-react'




function MyHeader(){

    return (
      <Container>
        <Divider hidden />
        <Header as='h1' floated='left'>
          Flatiron Lunch Roulette <Icon name='food' />
        </Header>

      </Container>
    )

}

export default MyHeader
