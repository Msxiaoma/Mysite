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