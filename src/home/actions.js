import experiencesApi from '../services/experiences-Api';
import { FEED_LOAD } from './reducer';

export function loadFeed() {
  return (dispatch, getState) => {
    dispatch({
      type: FEED_LOAD,
      payload: experiencesApi.getFeed()
    });
  };
}