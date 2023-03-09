import axios from 'axios'

const BASE_URL = '';

// axios.create({
//   // 配置选项
//   // baseURL: '',
//   // timeout: 30000,
// });

axios.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.resolve(error);
});

export default {
  // get 请求
  $get:({ url = '', param = {}, method = 'get', options = {} } = {}) => {
    return new Promise((resolve, reject) => {
      axios(`${BASE_URL}${url}`, {
        method: method,
        params: {
          ...param
        },
        ...options
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err)
      })
    })
  },

  // post 请求
  $post:({ url = '', data = {}, method = 'post', options = {} } = {}) => {
    return new Promise((resolve, reject) => {
      axios(`${BASE_URL}${url}`, {
        method: method,
        data: {
          ...data
        },
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        ...options
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err)
      })
    })
  }
}