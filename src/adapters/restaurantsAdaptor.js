
export class RestaurantsAdaptor {

  static all(){
    return fetch("http://localhost:3000/api/v1/restaurants")
    .then( res => res.json() )
  }

  static create(name, location, image){
    return fetch('http://localhost:3000/api/v1/restaurants', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        restaurant: {
          name: name,
          location: location,
          image: image
        }
      })
    }).then(response => response.json() )
  }

  static update(restaurant){
    return fetch(`http://localhost:3000/api/v1/restaurants/${restaurant.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        restaurant : {
          name : restaurant.name,
          location: restaurant.location,
          image: restaurant.image
        }
      })
    })
  }

}
