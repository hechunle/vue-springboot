<template>
  <el-form>
    <el-container>
      <el-header>登录</el-header>
      <el-input placeholder="请输入用户名" v-model="loginFrom.userName" clearable></el-input>
      <el-input placeholder="请输入密码" v-model="loginFrom.passWord"  show-password ></el-input>
      <br>
      <el-checkbox v-model="checked">记住密码</el-checkbox>
      <el-footer>
        <el-button type="success" plain @click="login">login</el-button>
      </el-footer>
    </el-container>
  </el-form>

</template>

<script>

export default {
  name: "Login",

  mounted() {
    const passwords = sessionStorage.getItem("passWord");
    this.loginFrom.passWord=passwords;
  },
  data() {
    return {
      loginFrom:{
        userName: '',
        passWord: '',
      },
      checked:false
    }
  },
  methods: {
    login() {
      var _this=this;
      this.$axios.post('/login', {
        userName: this.loginFrom.userName,
        passWord: this.loginFrom.passWord
      }).then(res => {
        if (res.data == 200) {
          _this.$store.commit('login',_this.loginFrom)
          var path=this.$route.query.redirect
          if (this.checked){
            sessionStorage.setItem("passWord",this.passWord);
          }
          this.$router.replace({path: path=='/'||path==undefined?'/index':path})
        }else {
          alert("用户名或密码错误！")
        }
      }).catch(resj => {
        console.log(resj.message)
      })
    }
  }

}
</script>

<style scoped>

.el-form{
  width: 400px;
  margin: auto;
  /*margin-top: 160px;*/
  padding-top: 150px;
  /*margin-top: 160px;*/
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

/*div {*/
/*  margin: auto;*/
/*  text-align: center;*/
/*  border: 2px orange solid;*/
/*  width: 300px;*/
/*  height: 300px;*/
/*  background-color: burlywood;*/
/*}*/

span {
  color: green;


}

</style>
