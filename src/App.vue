<template>
  <div>
    <FooterGuide v-show="$route.meta.showFooter"/>
    <router-view/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components:{
    FooterGuide
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
