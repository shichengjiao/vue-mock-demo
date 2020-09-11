<template>
  <div id="app">
    test mock......
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    init() {
      this.$http.get('/info').then(res => {
        console.log(res);
        console.log(res.data.data);
      })
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
