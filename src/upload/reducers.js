import { combineReducers } from 'redux';
import { IMAGE_ADD, IMAGE_ERROR } from './constants';
export function images(state = [], { type, payload }) {
  switch(type) {
    case IMAGE_ADD:
    default: return state;
  }
}