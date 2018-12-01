import {
  RECEIVE_BANNER,
  RECEIVE_MSITE,
  RECEIVE_DATA
} from './mutation-types'
export default {
  [RECEIVE_BANNER](state,{banner}) {
    state.banner = banner
  },
  [RECEIVE_MSITE](state,{msite}) {
    state.msite = msite
  },
  [RECEIVE_DATA](state,{data}) {
    state.data = data
  }
}
