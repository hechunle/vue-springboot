import Vue from "vue";
import Router from 'vue-router'
import Login from "../components/components/Login";
import AppIndex from "../components/components/home/AppIndex";
import Home from "@/components/components/home/Home";
import LibraryIndex from "@/components/components/library/LibraryIndex";

Vue.use(Router);


export default new Router({
  mode:"history",
  routes: [
    {
      path:"/",
      redirect:"/login"
    }/*,
    {
      path:'/index',
      component:AppIndex,
      name:'AppIndex',
      meta:{
        requireAuth:true
      }
    }*/,{
      path:"/login",
      name:'login',
      component:Login
    },
    ,{
      path:"/Home",
      name:'Home',
      component:Home,
      redirect:'/index',
      children:[{
        path:'/index',
        name:'AppIndex',
        component:AppIndex,
        meta:{
          requireAuth:true
        }
      },{
        path:'/library',
        name:'LibraryIndex',
        component:LibraryIndex,
        meta:{
          requireAuth:true
        }
      }]
    }
  ]
})




