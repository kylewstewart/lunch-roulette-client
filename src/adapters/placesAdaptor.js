
export class PlacesAdaptor {

  static all(){
    return fetch("http://localhost:3000/api/v1/places")
    .then(res => res.json())
  }

  static create(name, location, image){
    return fetch('http://localhost:3000/api/v1/places', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        place: {
          name: name,
          location: location,
          image: image
        }
      })
    }).then(response => response.json() )
  }

  static update(place){
    return fetch(`http://localhost:3000/api/v1/place/${place.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        place : {
          name : place.name,
          location: place.location,
          image: place.image
        }
      })
    })
  }

}
