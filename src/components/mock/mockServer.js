import Mock from 'mockjs';
import index from './index.json';

Mock.mock('/info', {
  code: 0,
  data: index.info
});

// Mock.mock(/\/info\/\d+/, { //正则方式，如/info/1
//   code: 0,
//   data: index.info
// });