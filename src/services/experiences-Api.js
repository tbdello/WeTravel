import { request } from './request';

const URL = '/experiences';

export default {
  getFeed() {
    return request.get(`${URL}/feed`);
  },
  get(id) {
    return request.get(`${URL}/${id}`);
  }
};