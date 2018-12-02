/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'
import data_nav from './data_nav.json'
import msite_data from './msite_data.json'
import shiwu_data from './shiwu_data.json'

// 返回data的接口
Mock.mock('/data', {code:0, data: data})
//返回首页轮播图片的接口
Mock.mock('/banner', {code:0, focusList: msite_data.focusList})
//返回msite页数据的接口
Mock.mock('/msite', {code:0, msite: msite_data})
//返回识物页数据的接口
Mock.mock('/recognition', {code:0, recognition: shiwu_data})
//返回分类页nav数据
Mock.mock('/nav', {code:0, nav: data_nav})

