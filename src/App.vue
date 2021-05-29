<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue';
export default {
  async mounted () {
       // 通过this.$store.dispatch 方法触发调用Action
       this.$store.dispatch('getAddress')
       
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
