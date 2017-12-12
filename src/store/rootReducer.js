import { combineReducers } from 'redux';
import { error, loading } from '../app/reducers';
import { feed } from '../home/reducers';
import { experience } from '../experience/reducers';
import auth from '../auth/reducers';

export default combineReducers({
  auth,
  experience,
  feed,
  loading,
  error
});