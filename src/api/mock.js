import Mock from 'mockjs';
import homeApi from './mockData/home';
import userApi from './mockData/user';

Mock.mock('/home/api/tableData', homeApi.getTableData);
Mock.mock('/home/api/countData', homeApi.getCountData);
Mock.mock('/home/api/chartData', homeApi.getChartData);

Mock.mock(/user\/getUser/, 'get', userApi.getUserList);
Mock.mock(/user\/add/, 'post', userApi.addUser);
Mock.mock(/user\/edit/, 'post', userApi.updateUser);
