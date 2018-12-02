import {
  RECEIVE_BANNER,
  RECEIVE_MSITE,
  RECEIVE_DATA,
  RECEIVE_RECOGNITION
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
  },
  [RECEIVE_RECOGNITION](state,{recognition}) {
    state.recognition = recognition
  }
}
