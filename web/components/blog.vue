<template>
  <div class="blog">
    <Myheader value="博 客"></Myheader>
    <div class="blog-content">
      <div class="menu"></div>
      <div class="content-right">
        <div class="article-inner">
          <div class="article-title">
            <img src="../../static/img/vue.png" width="55px" height="40px">
            <div class="article-date"><img src="../../static/img/date.png" width="20px" height="20px" class="date-icon">2017-09-11</div>
            <div>图片轮播</div>
          </div>
        </div>
        <div class="article-inner">
          <div class="article-title">
            <img src="../../static/img/vue.png" width="55px" height="40px">
          </div>
        </div>
        <div class="article-inner">
          <div class="article-title">
            <img src="../../static/img/vue.png" width="55px" height="40px">
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  import Myheader from './header'
  export default {
    components: {
      Myheader
    },
    methods: {
      home() {
        this.$router.push('/blog/base')
      }
    }
  }
</script>
<style>
  .blog {
    width: 100%;
  }
  .blog-content {
    position: relative;
    height: 100%;
    background: #2F3238;
    /* padding: 50px 0;  */
  }
  .menu {
    position: absolute;
    left: 40px;
    bottom: 0px;
    width: 180px;
    height: inherit;
    background: green;
  }
  .content-right {
    margin-left: 300px;
    padding-right: 80px;
    padding-bottom: 80px;
  }
  .article-inner {
    margin-top: 80px;
    width: 100%;
    height: 777px;
    background: #fff;
    display: inline-block;
  }
  .article-date {
    float: right;
    margin: 20px 55px 0px 0px;
    font-size: 18px;
    color: #888;
  }
  .date-icon {
    padding-bottom: 5px;
    padding-right: 5px;
  }
  .article-title {
    position: relative;
    width: 100%;
    height: 100px;
  }
</style>