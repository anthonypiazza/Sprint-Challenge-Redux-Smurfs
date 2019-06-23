//import all actions
import { FETCHING, ADDING, CREATE_SMURF, GET_SMURFS, ERR }  from '../actions';

//used provided initialState tree
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
}

//created reducer function
//pass in state w/ default value of initialState
//pass in dispatched action
//use switch cases to check the ACTION TYPE of the dispatched action
//create updated state tree following immutability practices for each case 
function reducer (state = initialState, action) {
  switch ( action.type ) {
    case FETCHING:
      return {...state, fetchingSmurfs: true}
    case GET_SMURFS:
      return {...state, smurfs: [...action.payload], fetchingSmurfs: false}
    case ERR:
      return {...state, fetchingSmurfs: false, error: action.payload}
    case ADDING:
      return {...state, addingSmurf: true}
    case CREATE_SMURF: 
      return {...state, addingSmurf: false, smurfs: action.payload}
    default:
      return state;
  }
}

export default reducer;
