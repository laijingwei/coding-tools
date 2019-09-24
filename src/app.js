Quasar.icons.set(Quasar.icons.fontawesome)
Quasar.utils.colors.setBrand('primary', '#126bcc')
Quasar.utils.colors.setBrand('secondary', '#3490DC')
Quasar.utils.colors.setBrand('tertiary', '#A779E9')
moment.locale('zh_cn')
axios.defaults.baseURL = 'api';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


import router from '/src/router/index.js'

new Vue({
  el: '#q-app',
  router,
  data() {
    return {
      version: Quasar.version,
      routers: [
        {label: '网址导航', path: '/', icon:'home', sublabel:'home'},
        {label: '经纬搜索', path: '/google', icon:'search', sublabel:'laijw.com'},
        {label: '时间戳转换', path: '/time', icon:'access_time', sublabel:'moment'},
        {label: '颜色转换器', path: '/color', icon:'color_lens', sublabel:'color'},
        {label: '动起来', path: '/anime', icon:'motorcycle', sublabel:'anime'},
        {label: '数据可视化', path: '/charts/echarts', icon:'bar_chart', sublabel:'charts'},
        {label: 'nodejs', path: '/nodejs', icon:'code', sublabel:'nodejs'},
      ],
      drawerState: true,
    }
  },
  methods: {
    launch(url) {
      Quasar.utils.openURL(url)
    },
    openRouter(i) {
      this.$router.push(this.routers[i].path);
    },
  }
})
