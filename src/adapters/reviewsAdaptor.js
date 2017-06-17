
export class ReviewsAdaptor {

  static all(id){
    return fetch(`http://localhost:3000/api/v1/places/${id}/reviews`)
    .then( res => res.json() )
  }

 static create(data) {
   return fetch(`http://localhost:3000/api/v1/places/${data.place_id}/reviews`, {
     method: 'POST',
     headers: {
       'content-type': 'application/json',
       'accept': 'application/json'
     },
     body: JSON.stringify({ data })
   }).then(response => response.json() )
 }

}
