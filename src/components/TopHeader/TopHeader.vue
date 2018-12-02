<template>
  <header class="header">
    <span class="msite" @click="$router.replace('/msite')"><i class="iconfont icon-shouye"></i></span>
    <slot name="middle"></slot>
    <span class="searchAndShopcart">
      <i class="iconfont icon-sousuo"></i>
      <i class="iconfont icon-gouwuche1"></i>
    </span>
  </header>
</template>
<script>

  export default {

  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    height 88px
    line-height 88px
    background #FAFAFA
    font-size 40px
    display flex
    justify-content space-around
    i
      font-size 50px
    h2
      width 50%
    .msite
      width 10%
      position: absolute
      left 20px
      top 0
    .searchAndShopcart
      width 30%
      position absolute
      right 0
      top 0
      i
        font-size 60px
</style>


