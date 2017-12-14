export const SEARCH_LOAD = 'FEED_LOAD';

export function search(state=[], { type, payload }) {
  switch(type) {
    case SEARCH_LOAD:
      return payload;
    default:
      return state;
  }
}
