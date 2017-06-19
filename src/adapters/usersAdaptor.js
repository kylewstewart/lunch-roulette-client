
export class UsersAdaptor {

  static authorization_code(email) {
    return fetch(`http://localhost:3000/api/v1/users/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({ email })
    }).then(response => response.json())
  }

}
