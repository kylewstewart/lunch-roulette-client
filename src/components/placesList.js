import React from 'react'
import { Card, Icon, Container } from 'semantic-ui-react'
import MainCard from './maincard.js'

export default function PlacesList(props) {



      return (
        <div>
        <Container text>

          < MainCard place={props.places[0]} />
        </Container>
        </div>
      )

}
