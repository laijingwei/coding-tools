const routes = [
  { path: '/', component: () => import('/src/components/home.js'), meta: { title: '首页' } },
  { path: '/time', component: () => import('/src/components/time.js'), meta: { title: '时间戳转换' } },
  { path: '/color', component: () => import('/src/components/color.js'), meta: { title: '颜色转换器' } },
  { path: '/anime', component: () => import('/src/components/anime.js'), meta: { title: '动起来' } },
  { path: '/nodejs', component: () => import('/src/components/nodejs.js'), meta: { title: 'nodejs' } },
  { path: '/google', component: () => import('/src/components/google.js'), meta: { title: 'google' } },
  {
    path: '/charts',
    component: () => import('/src/components/charts/index.js'),
    children: [
      { path: 'antv', component: () => import('/src/components/charts/antv.js'), meta: { title: 'antv' } },
      { path: 'echarts', component: () => import('/src/components/charts/echarts.js'), meta: { title: 'echarts' } },
    ]
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {

  if (to.meta.title) {
    document.title = `${to.meta.title} - 实验室`;
  }
  const whiteList = ['/login']

  if (!whiteList.includes(to.path)) {
    if (Quasar.plugins.Cookies.has('token')) {
      next('/');
    } else { next() }
  } else { next() }

})

export default router
