
import {FETCH_USERS} from '../actions/index'

const userReducer = (state =[], action)=>{
  switch(action.type){
    case FETCH_USERS:
      return [action.payload.data, ...state];
    case "ADD_USER":
      return state.concat([action.data]);
    default:
      return state;
  }

  return state;
}

export default userReducer;
