const store = new Vuex.Store({
  state: {
    count: 0 || Quasar.plugins.LocalStorage.get.item('count'),
    cards: [],

  },
  getters: {
    columns(state, getters) {
      let arr = []
      if (state.cards.length > 0) {
        let keys = _.keys(state.cards[0])
        keys.map((field) => {
          arr.push({ name: 'desc', required: true, label: field, align: 'left', field: field, sortable: true })
        })
      }
      return arr
    },

  },
  mutations: {
    increment(state) {
      state.count++
      Quasar.plugins.LocalStorage.set('count', state.count)
    },

  },
  actions: {
    /**
     * 获取首页数据
     * @param {*} param0
     * @param {*} payload
     */
    async getCards({ state }, payload) {
      let res = await axios.get('docs')
      let list = _.map(res.data, 'list')
      state.cards = list.flat()
    },

  }
})

export default store
