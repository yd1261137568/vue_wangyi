import axios from 'axios';

export default function ajax(url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    if (method === 'GET') {
      let queryStr = '';
      Object.keys(data).forEach(key => {
        const value = data[key];
        queryStr += `${key}=${value}&`;

        if (queryStr !== '') {
          queryStr = queryStr.substring(0, queryStr.length - 1)
          url += '?' + queryStr
        }

        Promise = axios.get(url)
      });
    } else {
      Promise = axios.post(url, data)
    }
    Promise
      .then(response => {
        resolve(response.data)
      })
      .catch(e => {
        reject(e)
      })
  })

}
