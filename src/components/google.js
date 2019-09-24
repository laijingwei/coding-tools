import store from '/src/mixins/store.js'

export default Vue.component('google', {
  template: '#google',
  mixins: [store],
  data() {
    return {
      text: '',
      page: 1,
      entries: [],
    }
  },
  methods: {
    /**
     * 搜索
     */
    async search() {
      if (this.text == '') {
        this.entries = []
        return
      }
      let res = await axios.get(`https://176.122.157.73:5000/api/search?q=${this.text}&p=${this.page}`)
      if (!res) return
      this.entries = res.data.entries
    },
    /**
     * 翻页
     * @param i
     */
    pagingInput(i) {
      this.page = i;
      this.search();
    },
    /**
     * 重置
     */
    reset() {
      this.page = 1
    },

    clickHandle() {
      this.increment()
      Quasar.plugins.Notify.create({
        type: 'positive',
        icon: '',
        timeout: 1000,
        position: 'top',
        message: `您一共点了 ${this.count} 次`
      })
    },
  },

})
