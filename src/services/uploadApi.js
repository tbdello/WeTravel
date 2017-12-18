import request from './request';
const URL = '/api/uploads';

export default {
  post(data) {
    return request.post(URL, data);
  }
};