export default Vue.component('time', {
  template: '#time',
  data() {
    return {
      time: '',
      timeUnix: '',
      now: moment().unix(),
      timer: null,
    }
  },
  computed: {
    unixConvert() {
      if (this.time) {
        return moment.unix(this.time).format("YYYY-MM-DD HH:mm:ss dddd")
      } else if (this.timeUnix) {
        return moment(this.timeUnix).format("YYYY-MM-DD HH:mm:ss dddd")
      } else {
        return ''
      }
    },
    nowConvert() {
      return moment.unix(this.now).format("YYYY-MM-DD HH:mm:ss dddd")
    },
  },
  methods: {
    onFocus() {
      this.time = ''
      this.timeUnix = ''
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.now = moment().unix()
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
})
