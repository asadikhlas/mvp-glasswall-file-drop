const urlPrefix = 'https://72zql7ms4e.execute-api.eu-west-1.amazonaws.com/beta'
const fileTypeDetectionSuffix = '/file-type-detection';

const getFileType = (apikey, file) => {
    var data = new FormData();
    data.append("file", file);

    var url = urlPrefix + fileTypeDetectionSuffix;
    return callFileTypeDetection(url, apikey, data);
}

const callFileTypeDetection = (url, apikey, data) => {
  const promise = new Promise((resolve, reject) => {
      resolve(fetch(url, {
        method: 'POST',
        body: data,
        headers: {
          "x-api-key": apikey
        }
      })
      .then ((response) => {
        if (response.ok) {
          return response.json()
        }
        else{
          throw new Error('Something went wrong');
        }
      }));
  });

  return promise;
}

export const fileTypeDetectionApi = {
  getFileType
};
