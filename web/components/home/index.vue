<template>
  <div class="home">
    <input type="text" placeholder="请输入用户名" v-model="name">
    <input type="password" placeholder="请输入密码" v-model="passwd">
    <button @click="register()">注册</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: 'mayuan',
        passwd: '123'
      }
    },
    methods: {
      register() {
        this.$http.post('/api/register', {
          name: this.name,
          passwd:this.passwd
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
  