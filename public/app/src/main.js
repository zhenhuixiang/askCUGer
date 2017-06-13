import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//引入index.vue和hello.vue组件
import homepage from './components/homepage.vue';
import me from './components/me.vue';
//定义路由
const routes = [
 //默认先渲染的页面
 { path: '/',component:App},
 { path: '/homepage', component: homepage },
 { path: '/me', component: me }
]
//创建 router 实例，然后传 routes 配置
const router=new VueRouter({
routes
});



import App from './App.vue'

import store from './vuex';


new Vue({
  router,
  store,
  el: '#app'//,
  //render: h => h(App)
})
