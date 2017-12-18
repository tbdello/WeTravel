import { LOADING, LOADED, ERROR } from '../app/reducers';
const isPromise = val => val && typeof val.then === 'function';

export default ({ dispatch }) => next => async action => {

  if(!isPromise(action.payload)) return next(action);
  
  const { type, payload } = action;
  dispatch({ type: LOADING });
  
  try {
    dispatch({ type: LOADED });    
    dispatch({ 
      type, 
      payload: await payload
    });
  }

  catch(err) {
    dispatch({
      type: ERROR,
      payload: err
    });
    throw err;
  }
};