import { API } from '../api';
import axiosInstance from './axiosInstance';

export const signup = async (user) => {
  await axiosInstance
    .post(`${API}/signup`, user, {
      headers: {
        Accept: 'application/JSON',
        'Content-Type': 'application/JSON',
      },
    })
    .then((response) => {})
    .catch((err) => {});
};

export const signin = (user) => {
  return fetch(`${API}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/JSON',
      'Content-Type': 'application/JSON',
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {});
};

export const aunthenticate = (data, next) => {
  if (window !== undefined) {
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
};

export const signout = () => {
  if (window !== 'undefined') {
    localStorage.removeItem('jwt');
  }

  return axiosInstance('/signout')
    .then(() => console.log('Signout Sucessfully!'))
    .catch((err) => console.log(err));
};

export const isAuthenticated = () => {
  if (window === undefined) {
    return false;
  }
  if (localStorage.getItem('jwt')) {
    const token = JSON.parse(localStorage.getItem('jwt'));
    return token;
  } else {
    return false;
  }
};
