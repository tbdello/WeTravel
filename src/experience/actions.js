import experiencesApi from '../services/experiences-Api';
import { EXPERIENCE_LOAD } from './reducers';

export function loadExp(id) {
  return (dispatch, getState) => {
    dispatch({
      type: EXPERIENCE_LOAD,
      payload: experiencesApi.get(id)
    });
  };
}