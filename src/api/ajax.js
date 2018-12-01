import axios from 'axios';
export default function ajax(url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    let promise;
    if (method === 'GET') {
      //定义一个查询字符串（url后面的参数，最后与url拼接，就是一个完成的请求地址）
      let queryStr = '';
      //遍历data中所有的属性名
      Object.keys(data).forEach(key => {
        //得到对应的属性值
        const value = data[key];
        //拼串  queryStr + 属性名 = 属性值 &
        queryStr += `${key}=${value}&`;
      });

        if (queryStr !== '') {
          //去除最后一个&符号
          queryStr = queryStr.substring(0, queryStr.length - 1);
          //与url拼接成一个完成的请求地址
          url += '?' + queryStr
        }
        //发送Ajax请求（get请求）
        promise = axios.get(url)

    } else {
      //发送Ajax请求（post请求,需要传参）
      promise = axios.post(url, data)
    }
    promise
      .then(response => {
        //response.data就是我最终想要得到的数据，如果不用promise对象，需要多写一层表达式（response.data.data）
        resolve(response.data)
      })
      .catch(e => {
        reject(e)
      })
  })

}





//发送ajax请求的函数
/*export default function ajax (url,data={},method='GET') {
  return new Promise((resolve,reject) => {
    let promise;
    if(method === 'GET'){
      let queryStr = '';
      Object.keys(data).forEach(key => {
        const value = data[key];
        queryStr += `${key}=${value}&`
      });
      // let queryStr = Object.keys(data).reduce((pre, key) => pre + `${key}=${data[key]}&`, '')

      if(queryStr!=='') { // username=tom&password=123&
        queryStr = queryStr.substring(0, queryStr.length-1) // username=tom&password=123
        url += '?' + queryStr  // /login/?username=tom&password=123
      }
      promise = axios.get(url) // url?username=tom&password=123
      // return axios.get(url, {params: data}) // url?username=tom&password=123
    } else {
      promise = axios.post(url, data)
    }
    promise
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}*/





