import axios from 'axios';

import {  FETCH_USERS } from './types';

const apiUrl = 'http://www.mocky.io/v2/5bb3c9113300005400cad3e9';

export const fetchUsers = (users) => {

  return {
    type: FETCH_USERS,
    users
  }
};

export const fetchAllUsers = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {

        dispatch(fetchUsers(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
