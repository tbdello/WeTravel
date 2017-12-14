import experiencesApi from '../services/experiences-Api';
import { SEARCH_LOAD } from './reducers';

export function loadSearch(query) {
  console.log('we are quering with:',query);
  return (dispatch, getState) => {
    dispatch({
      type: SEARCH_LOAD,
      payload: experiencesApi.search(query)
    });
  };
}

