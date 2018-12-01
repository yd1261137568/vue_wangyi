<template>
  <div class="profileContainer">
    <header class="header">头部</header>
    <img src="../../assets/logo.png" alt="">
    <button class="phoneLogin">
      <span><i class="iconfont icon-shouji"></i></span>
      <span>账号登录</span>
    </button>
    <button class="msgLogin">
      <span><i class="iconfont icon-youxiang"></i></span>
      <span>邮箱登录</span>
    </button>
    <p>手机号快速注册 ></p>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .profileContainer
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
    img
      width 200px
      height 200px
      position: absolute
      top 240px
      left 50%
      margin-left -100px
    .phoneLogin
      width 660px
      height 100px
      background #b4282d
      color #fff
      font-size 30px
      border-radius 5px
      border 1px solid #b4282d
      position: absolute
      top 600px
      left 50%
      margin-left -330px
      .icon-shouji
        font-size 30px
        color #fff
    .msgLogin
      width 660px
      height 100px
      color #b4282d
      font-size 30px
      background transparent
      border 2px solid #b4282d
      position: absolute
      top 730px
      left 50%
      margin-left -330px
    p
      font-size 30px
      text-align: center
      margin-top 780px
</style>
