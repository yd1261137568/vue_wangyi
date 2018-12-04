import {
  RECEIVE_BANNER,
  RECEIVE_MSITE,
  RECEIVE_DATA,
  RECEIVE_RECOGNITION,
  RECEIVE_SORT
} from './mutation-types'
import {
  reqBanner,
  reqMsite,
  reqData,
  reqRecognition,
  reqSort
} from '../api'

export default {
  //异步获取banner信息
  async getBanner({commit}){
    const result = await reqBanner();
    if(result.code === 0) {
      const banner = result.focusList;
      commit(RECEIVE_BANNER,{banner});
    }
  },

  //异步获取msite信息
  async getMsist({commit},cb){
    const result = await reqMsite();
    if(result.code === 0) {
      const msite = result.msite;
      commit(RECEIVE_MSITE,{msite});
      typeof cb === 'function' && cb();
    }
  },

  //异步获取data信息
  async getData({commit}){
    const result = await reqData();
    if(result.code === 0) {
      const data = result.data;
      commit(RECEIVE_DATA,{data});
    }
  },

  //异步获取recognition识物信息
  async getRecognition({commit},cb){
    const result = await reqRecognition();
    // console.log(result);
    if(result.code === 0) {
      const recognition = result.recognition;
      commit(RECEIVE_RECOGNITION,{recognition});
      typeof cb === 'function' && cb();
    }
  },

  //异步获取sort分类中信息
  async getSort({commit},cb){
    const result = await reqSort();
    if(result.code === 0) {
      const sort = result.type;
      commit(RECEIVE_SORT,{sort});
      typeof cb === 'function' && cb();
    }
  },



}
