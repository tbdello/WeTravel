export function onSubmit(image, caption) {
  getSignedRequest(image);

}


export function getSignedRequest(image) {
  const requestHeaders = new Headers();

  const requestInit = {
    method: 'GET',
    headers: requestHeaders,
    mode: 'cors',
    cache: 'default'
  };

  fetch(`/sign-s3?file-name=${image.name}&file-type=${image.type}`, requestInit)
    .then(function(response) {
      if (response.ok) {
        uploadImage(image, response.signedRequest, response.url);
      }

      response.json()
        .then(function(data) {
          console.log(data);
        });
    })
    .catch(function(err) {
      console.log('Error', err);
    });
}

export function uploadImage(image, signedRequest, url){
  const uploadHeaders = new Headers({
    'Content-Type': 'image/png',
    'Content-Type': 'image/jpeg',
    'Content-Type': 'image/svg',
  });

  const uploadInit = {
    method: 'PUT',
    headers: uploadHeaders,
    mode: 'cors',
    cache: 'default'
  };

  fetch(signedRequest, uploadInit)
    .then(function(response) {
      if (response.ok) {
        return response.blob();
      }
    })
    .then(function(myBlob) {
      let objectURL = URL.createObjectURL(myBlob);
      myBlob.src = objectURL;
    });
}
