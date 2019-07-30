<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Vuex from 'vuex'
import router from '@/router';
import store from '../store/index'

@Component({
  components: {}
})
export default class Index extends Vue {
  public created(){
    console.log((store.state as any).chart.test);
  }
}
</script>
