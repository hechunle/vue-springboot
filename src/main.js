import Vue from "vue";
import App from './App';
import router from './router';
import axios from "axios";
import {Button,Input,Option,Select,Row,Container,Header,Main,Footer,Checkbox,Form,Menu,MenuItem,Aside,Switch,Tooltip,Card,Pagination} from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import store from "./store";

axios.defaults.baseURL='http://localhost:8443/api'

Vue.prototype.$axios=axios;
Vue.config.productionTip = false


Vue.use(Button)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Container)
Vue.use(Header)
Vue.use(Row)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Checkbox)
Vue.use(Form)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Aside)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Card)
Vue.use(Pagination)



router.beforeEach(((to, from, next) => {
  if (to.meta.requireAuth){//index
    console.log(from.toString()+"from"+to.toString()+"to")
    if (store.state.user.userName){
      next()
    }else {
      router.push({
        path: "/login",
        query:{redirect:to.fullPath}
      }).catch(err=>{
      })
    }
  }else {
    next()
  }
}))


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})





