<template>
  <div class="shopCartContainer">
    <div class="header">购物车</div>
    <div class="service">
      <span>30天无忧退货</span>
      <span>48小时快速退款</span>
      <span>满88元免邮费</span>
    </div>
    <img class="shopPic" src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
    <button class="btn" @click="$router.replace('/login')">登录</button>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .shopCartContainer
    width 100%
    height 1300px
    background #F4F4F4
    .header
      width 100%
      height 88px
      line-height 88px
      background #fff
      font-size 40px
      text-align: center
    .service
      display flex
      justify-content space-around
      font-size 26px
      margin 20px
    .shopPic
      width 260px
      height 260px
      position: absolute
      top 550px
      left 50%
      margin-left -130px
    .btn
      width 500px
      height 100px
      background #b4282d
      color #fff
      font-size 30px
      border-radius 5px
      border 1px solid #b4282d
      position: absolute
      top 830px
      left 50%
      margin-left -250px
</style>
