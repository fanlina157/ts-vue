<template>
  <div>
    <MemoItem v-for="item in memoArr" :key="item.id">{{item.title}}</MemoItem>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import MemoItem from './MemoItem.vue'
import ItemData from '../model/ItemData'
@Component({
  components:{
    MemoItem
  }
})
export default class ItemList extends Vue {
  // memoArr:Array<ItemData>=this.$store.state.Ahelper.memoList
  memoArr:Array<ItemData>= this.$store.state.Ahelper.memoList
}
</script>

