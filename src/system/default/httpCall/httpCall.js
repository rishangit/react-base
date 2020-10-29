import { serverPath, version } from '../constant/constant';
import { ajax } from 'rxjs/ajax';

const httpPost = (call, data) => {
  return httpCall('POST', call, data);
};

const httpGet = call => {
  return httpCall('GET', call);
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
  if (sessionString) {
    const session = JSON.parse(sessionString);
    request_url = `${request_url}/api/${version}/${call}`;
    headers = {
      ...headers,
      'Access-Control-Allow-Origin': 'http://staging.traction.network:81',
      'X-requested-with': 'XMLHttpRequest',
      'X-USER-TOKEN': session.authentication_token,
      'X-USER-EMAIL': session.email,
    };
  } else {
    request_url = `${request_url}/${call}`;
  }

  // return of(call).pipe(throttleTime(10), (map) =>
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
export { httpPost, httpGet };
