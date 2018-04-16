/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myMap from '@/components/my2DMap'

Vue.use(Router)

export default new Router({
  mode: 'history',	//使用history可以使url中不显示‘#’，会好看些
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/mymap',
      name:'myMap',
      component:myMap
    }
  ]
})
