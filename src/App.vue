<template>
  <div id="app">
   <MenuBar> </MenuBar>
   <ItemList> </ItemList>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuBar from './components/MenuBar.vue';
import ItemList from './components/ItemList.vue'
@Component({
  components: {
    MenuBar,
    ItemList
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
