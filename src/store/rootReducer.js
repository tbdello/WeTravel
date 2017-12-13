import { combineReducers } from 'redux';
import { error, loading } from '../app/reducers';
import { feed } from '../home/reducers';
import { experiences } from '../experience/reducers';
import auth from '../auth/reducers';

export default combineReducers({
  auth,
  experiences,
  feed,
  loading,
  error
});