import axios from 'axios';

let path = '';
if (process.env.NODE_ENV === 'development') {
  path = 'http://www.cyku.tw:9487/';
} else {
  path = 'http://www.shengyi.com.tw/api/';
}

export default axios.create({
  baseURL: path
});
