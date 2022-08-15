
<template>
  <div class="articles-area">
    <el-card style="text-align: left;width: 990px;margin: 35px auto 0 auto">
      <div>
        <span style="font-size: 20px"><strong>{{article.title}}</strong></span>
        <el-divider content-position="left">{{article.desc}}</el-divider>
        <div class="markdown-body">
<a :href=article.url>来源</a>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ArticleDetails',
  data () {
    return {
      article: []
    }
  },
  mounted () {
    this.loadArticle()
  },
  methods: {
    loadArticle () {
      console.log(this.$route.query.id)
      console.log(this.$route.query.url)
      var _this = this
      this.$axios.get('https://api.vvhan.com/api/hotlist?type=baiduRD').then(resp => {
        console.log(resp)
        if (resp.status == 200) {
          this.article=resp.data.data[this.$route.query.id-1]
          console.log(this.article)
        }
      })
    }
  }
}
</script>

<style scoped>
/*@import '/aa/src/styles/markdown.css';*/
@import '../../../../src/styles/markdown.css';
</style>