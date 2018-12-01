
import ajax from './ajax';
//请求轮播图的相关数据
export const reqBanner = ()  => ajax('/banner');
//请求msite的相关数据
export const reqMsite = () => ajax('/msite');
//请求data中的数据
export const reqData = () => ajax('/data');

export const reqDetail = () => ajax('/detail');

export const reqNav = () => ajax('/nav');
