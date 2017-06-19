import React from 'react'
import { Card, Icon, Container, Button, Divider, Header, Message } from 'semantic-ui-react'




function MyHeader(){

    return (
      <Container>
        <Divider hidden />
        <Header as='h1' floated='center' icon='bomb'>
          Flatiron Lunch Roulette
        </Header>


      </Container>
    )

}

export default MyHeader
