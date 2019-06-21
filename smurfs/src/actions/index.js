import axios from 'axios';

//Exported each ACTION TYPE to pull it into the reducer

export const FETCHING = 'FETCHING';
export const GET_SMURFS = 'GET_SMURFS';
export const ADDING = 'ADDING';
export const CREATE_SMURF = 'CREATE_SMURF'; 
export const ERR = 'ERR';

//exported ACTION CREATOR using given API call structure
//dispatched FETCHING 
//IF SUCCESS dispatch GET_SMURFS
//IF FAILURE dispatch ERR
export const getSmurfs = () => {
  const promise = axios.get('http://localhost:3333/smurfs')
  return dispatch => {
    dispatch({ type: FETCHING })
    promise
      .then(({data}) =>
        dispatch({ type: GET_SMURFS, payload: data })
      )
      .catch(err =>
        dispatch({ type: ERR, payload: err })
      )
  }
}

//exported ACTION CREATOR using given API call structure
//dispatched ADDING
//IF SUCCESS dispatch ADD_SMURF
//IF FAILURE dispatch ERR
export const createSmurf = smurf => {
  const promise = axios.post('http://localhost:3333/smurfs', smurf)
  return dispatch => {
    dispatch({ type: ADDING })
    promise
      .then(({data}) => 
        dispatch({ type: CREATE_SMURF, payload: data })
      )
      .catch(err =>
        dispatch({ type: ERR, payload: err })
      )
  }
}