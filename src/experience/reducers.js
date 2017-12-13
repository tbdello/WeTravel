export const EXPERIENCE_LOAD = 'EXPERIENCE_LOAD';
export const FEED_LOAD = 'FEED_LOAD';
export const EXPERIENCE_ADD = 'EXPERIENCE_ADD';
export const LOAD_USER_EXP = 'LOAD_USER_EXP';

export function experiences(state=[], { type, payload }) {
  switch(type) {
    case LOAD_USER_EXP:
      return [...state, ...payload];
    case EXPERIENCE_LOAD:
      return  [...state, payload];
    case EXPERIENCE_ADD:
      return [...state, payload]; 
    default:
      return state;
  }
}

