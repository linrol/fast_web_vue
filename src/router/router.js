import Vue from 'vue'
import Router from 'vue-router'
import page1 from '@/page/page1.vue'
import page2 from '@/page/page2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/page1',
      name: 'page1',
      component: page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    }
  ]
})
