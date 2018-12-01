import {
  RECEIVE_BANNER,
  RECEIVE_MSITE,
  RECEIVE_DATA
} from './mutation-types'
import {
  reqBanner,
  reqMsite,
  reqData
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
  async getMsist({commit}){
    const result = await reqMsite();
    if(result.code === 0) {
      const msite = result.msite;
      commit(RECEIVE_MSITE,{msite});
    }
  },

  //异步获取data信息
  async getData({commit}){
    const result = await reqData();
    if(result.code === 0) {
      const data = result.data;
      commit(RECEIVE_DATA,{data});
    }
  }



}
