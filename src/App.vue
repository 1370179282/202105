<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue';
import {reqCategorys} from './api';
export default {
  async mounted () {
      const result = await reqCategorys()
      console.log(result)
    },
  components:{
    FooterGuide
  }
}
</script>

<style>
  .app{
    width: 100%;
    height:100%;
    background: whitesmoke;
  }
</style>
