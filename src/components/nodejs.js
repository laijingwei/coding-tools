import store from '/src/mixins/store.js'

export default Vue.component('nodejs', {
  template: '#nodejs',
  mixins: [store],
  mounted() {
    this.getCards()
  }
})
