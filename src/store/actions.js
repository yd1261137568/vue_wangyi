import {RECEIVE_BANNER} from './mutation-types'
import {reqBanner} from '../api'

export default {
  //异步获取banner信息
  async getBanner ({commit}) {
    const result = await reqBanner();
    if(result.code === 0) {
      const banner = result.data;
      commit(RECEIVE_BANNER,{banner})
    }
  }
}
