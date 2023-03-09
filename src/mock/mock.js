import Mock from 'mockjs'

import menuList from './menuList'

const mockData = [
  ...menuList
];

for (let val of mockData.values()) {
  Mock.mock(val.path, val.method, val.data);
}
