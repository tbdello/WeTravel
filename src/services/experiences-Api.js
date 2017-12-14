import { request } from './request';

const URL = '/experiences';

export default {
  search(query = '') {
    return request.get(`${URL}/search/?${query}`);
  },
  get(id) {
    return request.get(`${URL}/${id}`);
  },
  getUserExp(id) {
    return request.get(`${URL}/user/${id}`);
  },
  post(exp) {
    return request.post(`${URL}`, exp);
  },
  postImage(id, image) {
    return request.post(`${URL}/${id}/images`, image);
  }
};