<template>
  <div>
    <el-row style="height: 840px;"> <search-bar></search-bar>
      <el-tooltip effect="dark" placement="right" v-for="item in books" :key="item.id"><p slot="content"
                                                                                          style="font-size: 14px;margin-bottom: 6px;">
        {{ item.title }}</p>
        <p slot="content" style="font-size: 13px;margin-bottom: 6px"><span>{{ item.author }}</span> /
          <span>{{ item.date }}</span> / <span>{{ item.press }}</span></p>
        <p slot="content" style="width: 300px" class="abstract">{{ item.abs }}</p>
        <el-card style="width: 135px;margin-bottom: 20px;height: 233px;float: left;margin-right: 15px" class="book"
                 bodyStyle="padding:10px" shadow="hover">
          <div class="cover"><img :src="item.cover" alt="封面"></div>
          <div class="info">
            <div class="title"><a href="">{{ item.title }}</a></div>
          </div>
          <div class="author">{{ item.author }}</div>
        </el-card>
      </el-tooltip>
    </el-row>
    <el-row>
      <el-pagination :current-page="1" :page-size="10" :total="20"></el-pagination>
    </el-row>
  </div>
</template>
<script>
import SearchBar from "@/components/components/library/SearchBar";
export default {
  name: 'Books',
  components:{SearchBar},
  data() {
    return {
      books: [{
        // cover: 'https://i.loli.net/2019/04/10/5cada7e73d601.jpg',
        cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F14061133651%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662795135&t=6ea1f656270d1ff62569e10e49ff9ab3',
        title: '三体',
        author: '刘慈欣',
        date: '2019-05-05',
        press: '重庆出版社',
        abs: '文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……'
      }]
    }
  }
} </script>
<style scoped> .cover {
  width: 200px;
  height: 172px;
  margin-bottom: 7px;
  overflow: hidden;
  cursor: pointer;
}

img {
  width: 200px;
  height: 172px; /*margin: 0 auto;*/
}

.title {
  font-size: 14px;
  text-align: left;
}

.author {
  color: #333;
  width: 102px;
  font-size: 13px;
  margin-bottom: 6px;
  text-align: left;
}

.abstract {
  display: block;
  line-height: 17px;
}

a {
  text-decoration: none;
}

a:link, a:visited, a:focus {
  color: #3377aa;
} </style>
