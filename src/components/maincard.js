import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const allDetails = {}

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const MainCard = (props) => (
  <Card fluid="true"
    image={props.place.image}
    header={props.place.name}
    meta={props.place.location}
    description={<ul><li><h2>Rating:  {props.place.avg_star_rating} </h2></li> <li><p>Good for:</p> <h2> {props.place.mode_recommended_for} </h2></li> </ul>}
    extra={extra}
  />
)

export default MainCard
