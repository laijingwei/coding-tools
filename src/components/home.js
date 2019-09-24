import store from '/src/mixins/store.js'

export default Vue.component('home', {
  template: '#home',
  mixins: [store],
  data() {
    return {
      search: '',
    }
  },
  filters: {
    avatar (value) {
      if (value.includes('.svg')) {
        return `src/assets/svg/${value}`
      } else {
        return `src/assets/svg/github-original.svg`;
      }
    }
  },
  computed: {
    filteredData() {
      if (this.search.length == 0) return this.cards
      return this.cards.filter((item) => {
        return item.name.toLowerCase().includes(this.search) || item.des.toLowerCase().includes(this.search)
      })
    }
  },
  methods: {
    launch(url) {
      Quasar.utils.openURL(url)
    }
  },
  mounted() {
    this.getCards()
  }
})
