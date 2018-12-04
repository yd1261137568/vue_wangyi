<template>
  <div class="wrap">
    <header class="headerWrap">
      <div class="header">
        <span><i class="iconfont icon-sousuo"></i></span>
        <input type="text" placeholder="搜索商品，共9723款好物">
      </div>
    </header>
    <div class="contentContainer">
      <GoodList_Left />
      <Goods_Right/>
      <router-view/>
    </div>
  </div>
</template>
<script>
  import GoodList_Left from '../../components/GoodList_Left/GoodList_Left.vue';
  import Goods_Right from '../../components/Goods_Right/Goods_Right.vue';
  export default {
    components:{
      GoodList_Left,
      Goods_Right
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrap
    width 100%
    .headerWrap
      width 100%
      height 88px
      background #fff
      position: fixed
      top 0
      z-index 50
      .header
        display flex
        width 100%
        height 88px
        border-bottom 1px solid #ccc
        span
          position: absolute
          left 150px
          top 16px
          z-index 2
          i
            font-size 40px
        input
          width 90%
          height 50px
          font-size 30px
          border 1px solid #EDEDED
          border-radius 10px
          background #EDEDED
          position: absolute
          top 50%
          left 50%
          transform translate(-50%,-50%)
          text-align: center
          outline none
    .contentContainer
      display flex


</style>
