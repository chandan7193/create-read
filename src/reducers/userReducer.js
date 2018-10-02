


import {  FETCH_USERS } from '../actions/types';

export default function userReducer(state = [], action) {
  switch (action.type) {
    case "ADD_USER":
       return state.concat([action.data]);

      case FETCH_USERS:
      let data = action.users;
      let users = data.data;

      return users;
    default:
      return state;
  }
}
