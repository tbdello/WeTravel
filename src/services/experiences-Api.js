import { request } from './request';

const URL = '/exp';

export default {
  getFeed(url) {
    return request.get(`${URL}/feed`);
  },
};