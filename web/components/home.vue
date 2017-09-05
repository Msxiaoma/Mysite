<template>
  <div class="home">
    <div class="content">
      <div class="site-name">Technology of the planet</div>
      <ul class="site-content">
        <router-link to="blog">
          <li>Blog</li>
        </router-link>
        <router-link to="project">
          <li>Project</li>
        </router-link>
        <router-link to="contact">
          <li>Cantact</li>
        </router-link>
      </ul>
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>
<script>
  import Stars from '../assets/js/stars'
  export default {
    data() {
      return {
        name: 'mayuan',
        passwd: '123'
      }
    },
    mounted() {
      let canvas = document.getElementById('canvas')
      let ctx = canvas.getContext('2d')
      let stars = new Stars(ctx, window.innerWidth, window.innerHeight, 400)
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      let count = 0
      const frame = () => {
        stars.drawBackground()
        count % 40 == 0 && stars.blink()
        stars.draw()
        requestAnimationFrame(frame)
      }
      frame()
    },
    methods: {
      contact() {
        window.open("https://github.com/Mrsxiaoma")
      },
      register() {
        this.$http.post('/api/register', {
          name: this.name,
          passwd: this.passwd
        }).then(response => {
          console.log(response)
          // get status
          // response.status;
          // // get status text
          // response.statusText;
          // // get 'Expires' header
          // response.headers.get('Expires');
          // // get body data
          // this.someData = response.body;
        }, response => {
          // error callback
        });
      }
    }
  }
</script>
<style>
  .home {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-size: 100% 100%;
  }
  .content {
    position: absolute;
    z-index: 1;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .site-name {
    color: #fff;
    font-size: 3rem
  }
  ul {
    margin: 20px;
    padding: 0px;
  }
  .site-content li {
    list-style: none;
    float: left;
    font-size: 1rem;
    width: 33%;
    height: 50px;
    text-align: center;
    color: #909cd8;
    cursor: pointer;
  }
</style>
  