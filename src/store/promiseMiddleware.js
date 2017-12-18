import { LOADING, LOADED, ERROR } from '../app/reducers';
const isPromise = val => val && typeof val.then === 'function';

export default ({ dispatch }) => next => async action => {

  if(!isPromise(action.payload)) return next(action);
  
  const { type, payload } = action;
  dispatch({ type: LOADING });
  
  try {
    // loaded needs to come AFTER await of promise!!!
    dispatch({ 
      type, 
      payload: await payload
    });
    dispatch({ type: LOADED });    
  }

  catch(err) {
    dispatch({
      type: ERROR,
      payload: err
    });
    throw err;
  }
};