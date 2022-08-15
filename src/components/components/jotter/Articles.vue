<template>
  <div style="margin-top: 40px">
    <!--<el-button @click="addArticle()">添加文章</el-button>-->
    <div class="articles-area">
      <el-card style="text-align: left">
        <div v-if="load">
          加载中。。。
        </div>
        <div v-for="article in articles" :key="article.index" >
          <div style="float:left;width:85%;height: 150px;">
            <router-link class="article-link" :to="{path:'jotter/article',query:{id: article.index}}"><span
                style="font-size: 20px"><strong>{{ article.title }}</strong></span></router-link>
<!--            <el-divider content-position="left">{{ articles }}</el-divider>-->
<!--            <router-link class="article-link" :to="{path:'jotter/article',query:{id: article.index,url:article.url}}"><p>-->
<!--              {{ article.desc }}</p></router-link>-->
          </div>
          <el-image style="margin:18px 0 0 30px;width:100px;height: 100px" :src="article.pic"
              fit="cover"></el-image>
          <el-divider></el-divider>
        </div>
      </el-card>
    </div>
    <el-pagination
        background
        layout="total, prev, pager, next, jumper"
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        :total="total">
    </el-pagination>
  </div>
</template>

<script>

export default {
  name: 'Articles',
  data() {
    return {
      articles:[],
      pageSize: 4,
      total: 0,
      load:true
    }
  },
  mounted() {
    this.loadArticles()
  },
  methods: {
    loadArticles() {
      var _this = this;
      this.$axios.get('https://api.vvhan.com/api/hotlist?type=baiduRD').then(resp => {
        if (resp.status == 200) {
          this.load=false
           this.total = resp.data.data.length
          for (let i = 0; i <this.pageSize ; i++) {
            _this.articles.push(resp.data.data[i])
          }
        }
      })
    },
    handleCurrentChange(page) {
      this.$axios.get('https://api.vvhan.com/api/hotlist?type=baiduRD').then(resp => {
        if (resp.status == 200) {
         var size=0;
          console.log(resp.data.data)
          const index=(page-1)*this.pageSize
          this.articles=[];
          if (this.total/this.pageSize>page){
           size=page*this.pageSize //8
          }else {
            size=this.total
          }
          for (let i = index; i <size ; i++) {
            this.articles.push(resp.data.data[i])
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.articles-area {
  width: 990px;
  height: 750px;
  margin-left: auto;
  margin-right: auto;
}

.article-link {
  text-decoration: none;
  color: #606266;
}

.article-link:hover {
  color: #409EFF;
}
</style>