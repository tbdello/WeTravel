import { combineReducers } from 'redux';
import { error, loading } from '../app/reducers';
import { feed } from '../home/reducers';
import auth from '../auth/reducers';

export default combineReducers({
  feed,
  loading,
  error,
});