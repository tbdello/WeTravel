import { combineReducers } from 'redux';
import { error, loading } from '../app/reducer';
import { feed } from '../home/reducer';

export default combineReducers({
  feed,
  loading,
  error,
});