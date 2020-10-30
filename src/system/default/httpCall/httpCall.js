import { serverPath, version } from '../constant/constant';
import { ajax } from 'rxjs/ajax';

const httpPost = ({ call, data }) => {
  return httpCall('POST', call, data);
};

const httpGet = ({ call }) => {
  return httpCall('GET', call);
};

const httpDelete = ({ call }) => {
  return httpCall('DELETE', call);
};

const httpPut = ({ call, data }) => {
  return httpCall('PUT', call, data);
};

const httpCall = (type, call, data = null) => {
  let request_url = `${serverPath}`;
  let headers = {
    'Content-type': 'application/json',
    'X-RateLimit-Reset': 1454313600,
    'X-RateLimit-Remaining': 0,
    'X-RateLimit-Limit': 1000,
  };

  let jsonData = null;
  if (data) {
    jsonData = JSON.stringify(data);
  }

  const sessionString = localStorage.getItem('session');
  request_url = `${request_url}/${version}/${call}`;
  if (sessionString) {
    const session = JSON.parse(sessionString);

    headers = {
      ...headers,
      'Access-Control-Allow-Origin': 'https://apirishan.free.beeceptor.com',
      'X-requested-with': 'XMLHttpRequest',
      'X-USER-TOKEN': session.authentication_token,
      'X-USER-EMAIL': session.email,
    };
  }

  return ajax({
    url: request_url,
    crossDomain: true,
    method: type,
    responseType: 'json',
    timeout: 0,
    headers,
    body: data ? jsonData : null,
    createXHR: function () {
      return new XMLHttpRequest();
    },
  });
};

const apiStatus = {
  success: 200,
};
export { httpPost, httpGet, httpDelete, httpPut, apiStatus };
