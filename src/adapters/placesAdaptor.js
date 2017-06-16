
export class PlacesAdaptor {

  static all(){
    return fetch("http://localhost:3000/api/v1/places")
    .then(res => res.json())
  }

  static create(filters){
    return fetch('http://localhost:3000/api/v1/places', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        filters: {
        cost: `${filters.cost}`,
        bodily_impact: `${filters.bodily_impact}`,
        recommended_for: `${filters.recommended_for}`}
      })
    })
    .then(response => response.json() )
  }

}
