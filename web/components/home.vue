<template>
  <div class="home">
    <div class="home-index">
      <div class="site-name">Technology of the planet</div>
      <div class="site-content">Explore</div>
    </div>
    <canvas id="canvas"></canvas>
    <div class="home-content">
      <header>
        <div class="sticky-wrapper" style="height: 60px;">
          <div class="sticky-nav">
            <a id="mobile-nav" class="menu-nav" href="#menu-nav"></a>
            <div id="logo">
              <a id="goUp" href="#home-slider" title="Brushed | Responsive One Page Template">Brushed Template</a>
            </div>
            <nav id="menu">
              <ul id="menu-nav">
                <li class=""><a href="#home-slider">Home</a></li>
                <li class="current"><a href="#work">Our Work</a></li>
                <li class=""><a href="#about">About Us</a></li>
                <li class=""><a href="#contact">Contact</a></li>
                <li><a href="shortcodes.html" class="external">Shortcodes</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
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
    /* overflow: hidden; */
    background-size: 100% 100%;
  }
  .home-index {
    position: absolute;
    z-index: 1;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .home-content {
    width: 100%;
    height: 100%;
  }
  .site-name {
    color: #fff;
    font-size: 3rem
  }
  .site-content {
    margin: 30px auto;
    background: #fff;
    width: 200px;
    left: 50px;
    height: 50px;
    opacity: 0.2;
    font-size: 1.2rem;
    border-radius: 5px;
    line-height: 45px;
    text-align: center;
    cursor: pointer;
    color: #141835;
  }
</style>
  