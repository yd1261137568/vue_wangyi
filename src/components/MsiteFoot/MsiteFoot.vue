<template>
  <div>
    <div class="m-ftWrap">
      <div class="m-ft">
        <div class="bd">
          <div class="goApp">下载APP</div>
          <div class="goWeb">电脑版</div>
        </div>
        <p class="copyTop">网易公司版权所有 © 1997-2018</p>
        <p class="copyDown">食品经营许可证：JY13301080111719</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }


</script>

<style scoped lang="stylus" rel="stylesheet/less">
  @import '../../common/stylus/mixins.styl';
  .m-ftWrap
    width 100%
    height 300px
    margin-bottom 120px
    background-color #414141
    .m-ft
      .bd
        display flex
        justify-content center
        font-size 30px
        color #fff
        text-align: center
        .goApp
          width 160px
          height 60px
          line-height 60px
          border 1px solid #ccc
          border-radius 10px
          margin 50px 20px
        .goWeb
          width 160px
          height 60px
          line-height 60px
          border 1px solid #ccc
          border-radius 10px
          margin 50px 20px
      .copyTop
        font-size 30px
        text-align: center
        color #999
        margin-bottom 20px
      .copyDown
        font-size 30px
        color #999
        text-align center




</style>

