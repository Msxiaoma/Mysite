<template>
  <div class="layout-head" :value="value">
    <img class="header" src="../../static/img/header.jpg" width="50px" height="50px">
    <img src="../../static/img/luobu.png" class="luobu">
    <div id="tab">
      <img src="../../static/img/one.png" class="one">
      <img src="../../static/img/two.png" class="two">
      <img src="../../static/img/three.png" class="three">
      <img src="../../static/img/four.png" class="four">
    </div>
    <ul>
      <li id="more" @click="go('/more')">更 多</li>
      <li id="cantact" @click="go('/contact')">联 系</li>
      <li id="project" @click="go('/project')">项 目 </li>
      <li id="blogs" @click="go('/blog')">博 客</li>
      <li id="home" @click="go('/')">首 页</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    value: String
  },
  mounted() {
    var images = document.getElementById('tab').children
    var pos = 0
    var len = images.length
    setInterval(function() {
      images[pos].style.display = 'none'
      pos = ++pos == len ? 0 : pos
      images[pos].style.display = 'inline'
    }, 1500)
    switch (this.value) {
      case "首 页":
        var home = dococument.getElementById('home')
        home.style.color = "#DE5E60"
        break;
      case "博 客":
        var blogs = document.getElementById('blogs')
        blogs.style.color = "#DE5E60"
        break
      case "项 目":
        var project = document.getElementById('project')
        project.style.color = "#DE5E60"
        break
      case "联 系":
        var cantact = document.getElementById('cantact')
        cantact.style.color = "#DE5E60"
        break
      case "更 多":
        var more = document.getElementById('more')
        more.style.color = "#DE5E60"
        break
      default:
        break
    }
  },
  methods: {
    go(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>
.layout-head {
  position: relative;
  width: 100%;
  height: 80px;
  background: #26292E;
}

.header {
  margin: 15px 58px;
  border-radius: 50%;
}

ul {
  float: right;
  width: 50%;
  margin: 0px auto;
  padding: 0px;
  display: inline-block;
}

ul li {
  padding: 25px 25px;
  list-style: none;
  float: right;
  font-size: 1rem;
  height: 50px;
  text-align: right;
  color: #fff;
  cursor: pointer;
}

.luobu {
  position: absolute;
  top: 34px;
  left: 10px;
  z-index: 2;
}

.one {
  position: absolute;
  top: 7px;
  left: 8px;
  z-index: 2;
}

.two {
  position: absolute;
  top: 18px;
  left: 38px;
  z-index: 2;
}

.three {
  position: absolute;
  top: 18px;
  left: 80px;
  z-index: 2;
}

.four {
  position: absolute;
  top: 7px;
  left: 110px;
  z-index: 2;
}

#tab{
  display: inline-block;
}
/*让img第一个子元素以外的其他子元素隐藏*/

 #tab>img:not(:first-child) {
  display: none;
} 
</style>
