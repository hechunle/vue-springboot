import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex)



export default new Vuex.Store({
    state:{
        user:{
            userName:window.localStorage.getItem('user'|| '[]')==null?'':JSON.parse(window.localStorage.getItem('user'||'[]')).userName
        }
    },
    mutations:{
        login(state,user){
            state.user=user;
            window.localStorage.setItem('user',JSON.stringify(user))
        }
    }
})