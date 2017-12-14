import experiencesApi from '../services/experiences-Api';
import { EXPERIENCE_LOAD, EXPERIENCE_ADD, LOAD_USER_EXP, ADD_IMAGE_TO_EXP } from './reducers';

export function loadExp(id) {
  return (dispatch, getState) => {
    dispatch({
      type: EXPERIENCE_LOAD,
      payload: experiencesApi.get(id)
    });
  };
}

export function addExperience(exp) {
  return dispatch => {
    dispatch({
      type: EXPERIENCE_ADD,
      payload: experiencesApi.post(exp)
    });
  };
}

export function loadExpByUser(id) {
  return {
    type: LOAD_USER_EXP,
    payload: experiencesApi.getUserExp(id)
  };
}

export function addImageToExp(id, image) {
  return {
    type: ADD_IMAGE_TO_EXP,
    payload: experiencesApi.postImage(id, image)
      .then(image => ({
        _id: id,
        image
      }))
  };
}