import axios from 'axios';

const ROOT_URL = `https://s3.ap-south-1.amazonaws.com/lqstudy/front_end_assignment/table.json`

export const FETCH_USERS = 'FETCH_USERS';

export function fetchUsers(city){

  const url = `${ROOT_URL}`;
    const request = axios.get(url);

  return{
    type: FETCH_USERS,
    payload : request
  };
}
