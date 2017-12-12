import { request } from './request';

const URL = '/exp';

export default {
  getFeed() {
    return request.get(`${URL}/feed`);
  },
  get(id) {
    return request.get(`${URL}/${id}`);
  }
};