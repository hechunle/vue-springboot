<template>
<div>
<h1>Hello</h1>
 <div v-show="isShow">
   <h3>来访者信息：</h3>
   <ul>
     <li v-for="item in requestUser">{{item}}</li>
   </ul>
 </div>
</div>
</template>

<script>
export default {
  name: "AppIndex",
  data(){
    return{
      requestUser:{
        browser: '',
        browser_ver: '',
        fl: '',
        high: '',
        ip: '',
        location: '',
        low: '',
        system: '',
        time: '',
        tip: '',
        tq: '',
        week:''
      },
      isShow:false
    }

  },
  mounted() {
    this.loadArticles()
  },
  methods: {
    loadArticles() {
      var _this = this
      this.$axios.get('https://api.vvhan.com/api/visitor.info').then(resp => {
        console.log(resp)
        if (resp.status === 200) {
          this.isShow=true;
          console.log(resp.data)
          this.requestUser=resp.data
        }
      })
    }
  }
}
</script>

<style scoped>

li{
  display: block;
}
</style>
