<template>
  <div>11
  </div>
</template>
<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'
import ItemData from '../model/ItemData'
@Component({
  components:{
  }
})
export default class MemoItem extends Vue {
  @Prop() memo!:ItemData;
}
</script>

