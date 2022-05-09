class MainApi {
  constructor(data) {
    this._url = data.url;
    this._headers = data.headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkStatus);
  }

  register({ name, email, password }) {
    console.log('name, email, password', name, email, password)
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
      }),
    }).then(this._checkStatus);
  }

  login({ email, password }) {
    console.log('email, password', email, password)

    return fetch(`${this._url}/`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    }).then(this._checkStatus);
  }

  signOut() {
    return fetch(`${this._url}/signout`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkStatus);
  }

  editUserInfo({ name, email }) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then(this._checkStatus);
  }
}

export const mainApi = new MainApi({
  url: 'http://localhost:3001',
  // url: 'https://api.biba.nomoredomains.work',
  headers: {
    'Content-Type': 'application/json',
  },
});
