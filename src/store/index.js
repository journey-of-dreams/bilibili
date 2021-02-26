import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    birthday: '1990-01-01',
    replyId: {
      id: null,
      name: '热心网民'
    },
    isFocus: false
  },
  mutations: {
    birthday(state, birthday) {
      state.birthday = birthday
    },
    replyId(state, replyId) {
      state.replyId = replyId
    },
    isFocus(state, isTrue) {
      state.isFocus = isTrue
    }
  }
})