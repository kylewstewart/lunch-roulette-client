
export class ReviewsAdaptor {

  static all(id){
    return fetch(`http://localhost:3000/api/v1/places/${id}/reviews`)
    .then( res => res.json() )
  }

}
