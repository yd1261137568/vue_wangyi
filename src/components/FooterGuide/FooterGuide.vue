<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" @click="$router.replace('/msite')" :class="{on:$route.path==='/msite'}">
    <span class="item_icon">
      <i class="iconfont icon-shouye"></i>
    </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="$router.replace('/recognition')" :class="{on:$route.path==='/recognition'}">
    <span class="item_icon">
      <i class="iconfont icon-lifangtilitiduomiantifangkuai"></i>
    </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="$router.replace('/sort')" :class="{on:$route.path==='/sort'}">
    <span class="item_icon">
      <i class="iconfont icon-leimupinleifenleileibie"></i>
    </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="$router.replace('/shopcart')" :class="{on:$route.path==='/shopcart'}">
    <span class="item_icon">
      <i class="iconfont icon-gouwuche1"></i>
    </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="$router.replace('/profile')" :class="{on:$route.path==='/profile'}">
    <span class="item_icon">
      <i class="iconfont icon-gerenzhongxin"></i>
    </span>
      <span>我的</span>
    </a>
  </footer>
</template>
<script>
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 98px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #b4282d
      span
        font-size 26px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 40px

</style>
