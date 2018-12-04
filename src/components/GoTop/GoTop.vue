<template>
  <div class="goTopContainer">
    <span class="goTop" @click="gotop()">
      <i class="iconfont icon-tubiao02"></i>
    </span>
  </div>
</template>
<script>
  export default {
    props:{
      gotop:Function
    },
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  body
    position: relative
    .goTopContainer
      width 100px
      height 100px
      position: absolute
      right 0
      bottom 120px
      .goTop
        width 100%
        height 100%
        text-align: center
        line-height 100px
        .icon-tubiao02
          font-size 80px
          color #ccc
</style>
