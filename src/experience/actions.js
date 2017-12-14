import experiencesApi from '../services/experiences-Api';
import { EXPERIENCE_LOAD, DELETE_EXP, EXPERIENCE_ADD, LOAD_USER_EXP, ADD_IMAGE_TO_EXP } from './reducers';
import uploadApi from '../services/uploadApi';

export function loadExp(id) {
  return {
    type: EXPERIENCE_LOAD,
    payload: experiencesApi.get(id)
  };
}

export function addExperience(exp) {
  return {
    type: EXPERIENCE_ADD,
    payload: experiencesApi.post(exp)
  };
}

export function loadExpByUser(id) {
  return {
    type: LOAD_USER_EXP,
    payload: experiencesApi.getUserExp()
  };
}

export function deleteExp(id) {
  return async dispatch => {
    await dispatch({
      type: DELETE_EXP,
      payload: experiencesApi.delete(id).then(() => id)
    });
    dispatch({
      type: LOAD_USER_EXP,
      payload: experiencesApi.getUserExp()
    });
  };
}

export function addImageToExp(id, data) {
  return {
    type: ADD_IMAGE_TO_EXP,
    payload: experiencesApi.postImage(id, data)
      .then(image => ({
        _id: id,
        image
      }))
  };
}