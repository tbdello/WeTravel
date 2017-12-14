const URL = '/api/uploads';


const request = {
  post: (path, data) => {

    const uploadInit = {
      method: 'POST',
      body: data
    };
    return fetch(path, uploadInit)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response.json());
        }
      });
  },
};
export default {
  post(data) {
    return request.post(URL, data);
  }
};