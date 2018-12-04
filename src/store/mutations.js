import {
  RECEIVE_BANNER,
  RECEIVE_MSITE,
  RECEIVE_DATA,
  RECEIVE_RECOGNITION,
  RECEIVE_SORT,
  RECEIVE_ID
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
  },
  [RECEIVE_SORT](state,{sort}) {
    state.sort = sort
  },
  [RECEIVE_ID](state,{index}) {
    state.id = index
  }
}
