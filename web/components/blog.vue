<template>
  <div class="blog">
    <div class="layout-head">
      <ul>
        <li>首 页</li>
        <li @click="home()">框 架</li>
        <li>后 端</li>
        <li>网 络</li>
        <li>算 法</li>
        <li>趣 闻</li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    methods: {
      home() {
        this.$router.push('/blog/base')
      }
    }
  }
</script>
<style>
  .blog {
    background: #141835;
    width: 100%;
    height: 100%;
  }
  .layout-head {
    position: relative;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #000;
    /* opacity: 0.5; */
    /* background: url('../../static/img/bg.jpg'); */
  }
  ul {
    margin: 0px auto;
    padding: 0px;
  }
  ul li {
    padding: 20px 0px;
    list-style: none;
    float: left;
    font-size: 1rem;
    width: 14%;
    height: 50px;
    text-align: right;
    color: #fff;
    cursor: pointer;
  }
</style>