import store from '/src/store/index.js'

export default {
  store,
  computed: {
    ...Vuex.mapState([
      'count',
      'cards',
    ]),
    ...Vuex.mapGetters([
      'columns',
    ]),
  },
  methods: {
    ...Vuex.mapMutations([
      'increment',
    ]),
    ...Vuex.mapActions([
      'getCards',
    ]),
  }
}
