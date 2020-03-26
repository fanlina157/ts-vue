<template>
  <div class="menu-bar">
    <div class="logo">logo</div>
      <div class="all">全部</div>
      <div class="new-add">新建</div>
  </div>
</template>
<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator'
  @Component
  export default class App extends Vue {

  }
</script>
<style scoped>
  .menu-bar {
    height: 60px;
    background-color: #fff;
    line-height: 60px;
    padding:0 30px;
  }
  .logo {
    float: left;
    width:100px;
    height:40px;
    margin-top: 10px;
    background-color: red;
  }
  .new-add {
    float: right;
    margin-right: 30px;
  }
  .all {
    float: right;
  }
</style>