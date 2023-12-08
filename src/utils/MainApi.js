 import { MAIN_BASE_URL } from "./constant";

class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
    this._checkResponse = (res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    };
  }

  _getHeaders() {
    const token = localStorage.getItem('token');

    return {
      'Authorization': `Bearer ${token}`,
      ...this._headers,
    };
  } 
  
  register({ name, email, password }) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  };
  
  authorize({ email, password }) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  };
  
  checkToken(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  };

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._getHeaders(),
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  }

  editUserInfo({ name, email }) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({ name, email })
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      headers: this._getHeaders(),
    })
      .then((res) => {
        return this._checkResponse(res);
    })
  }

  saveMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify(movie)
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  }
  
  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._getHeaders(),
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  }
};

// const api = new Api({
//   url: MAIN_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });

const api = new Api({
  url: "http://localhost:3000",
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api