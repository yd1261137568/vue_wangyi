<template>
  <div class="loginContainer">
    <TopHeader>
      <h2 slot="middle" style="{margin-left: 50px}">网易严选</h2>
    </TopHeader>
    <!--<header class="header">头部</header>-->
    <h1 class="logo">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </h1>
    <form class="formCommit">
      <div class="msg_login" v-show="isShow">
        <div class="phone">
          <lable class="phone_placeHolder" name="">请输入手机号</lable>
          <div class="phone_line"></div>
        </div>
        <div class="code">
          <lable class="code_placeHolder" name="">请输入短信验证码</lable>
          <div class="code_line"></div>
          <span>获取验证码</span>
        </div>

        <div class="hasProblem">
          <span>遇到问题？</span>
          <span>使用密码验证登陆</span>
        </div>

        <button class="phone_login">登陆</button>
        <button class="other_login">其他登陆方式</button>
        <p class="phone_regist">注册账号></p>
      </div>

      <div class="email_login" >
        <div class="email">
          <lable class="email_placeHolder" name="">请输入邮箱</lable>
          <div class="email_line"></div>
        </div>
        <div class="email_pwd">
          <lable class="email_placeHolder" name="">请输入邮箱密码</lable>
          <div class="email_line"></div>
        </div>
        <div class="regisetOrForgetPwd">
          <span>注册账号</span>
          <span>忘记密码</span>
        </div>
      </div>

      <button class="email_login_button">登陆</button>
      <button class="other_login">其他登陆方式</button>
    </form>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        isShow:false
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 750px
    height 1300px
    .header
      width 100%
      height 88px
      line-height 88px
      background #F4F4F4
      font-size 40px
      text-align: center
    .logo
      width 400px
      height 200px
      margin 20px auto 120px
      position: relative
      img
        width 200px
        height 64px
        position: absolute
        top 50%
        left 50%
        margin-left -100px
        margin-top -32px
    .formCommit
      padding 0 30px
      .msg_login
        .phone
          width 100%
          height 80px
          .phone_placeHolder
            font-size 28px
            color #bdbdbd
          .phone_line
            width 100%
            height 1px
            background #c5cddb
            margin-top 30px
        .code
          width 100%
          height 90px
          line-height 90px
          margin-top 25px
          clearFix()
          position: relative
          .code_placeHolder
            float left
            font-size 28px
            color #bdbdbd
          .code_line
            width 100%
            height 1px
            background #c5cddb
            position: absolute
            left 0
            bottom 0
          span
            font-size 28px
            display inline-block
            width 200px
            height 60px
            line-height 60px
            text-align: center
            border 1px solid #c5cddb
            float right
            color #bdbdbd
            border-radius 10px
        .hasProblem
          display flex
          justify-content space-between
          font-size 28px
          color #bdbdbd
          margin 40px 0
        .phone_login
          width 100%
          height 90px
          font-size 30px
          color #fff
          line-height 90px
          background #b4282d
          text-align center
          margin 20px 0
        .other_login
          width 100%
          height 90px
          font-size 30px
          color #b4282d
          line-height 90px
          text-align center
          border 1px solid #b4282d
          background transparent
          margin-top 20px
        .phone_regist
          font-size 28px
          width 100%
          height 50px
          line-height 50px
          text-align: center
          color #bdbdbd
          margin-top 20px


      .email_login
        .email
          width 100%
          height 80px
          .email_placeHolder
            font-size 28px
            color #bdbdbd
          .email_line
            width 100%
            height 1px
            background #c5cddb
            margin-top 30px
        .email_pwd
          width 100%
          height 90px
          line-height 90px
          margin-top 25px
          clearFix()
          position: relative
          .email_placeHolder
            float left
            font-size 28px
            color #bdbdbd
          .email_line
            width 100%
            height 1px
            background #c5cddb
            position: absolute
            left 0
            bottom 0
        .regisetOrForgetPwd
          display flex
          justify-content space-between
          font-size 28px
          color #bdbdbd
          margin 40px 0
      .email_login_button
        width 100%
        height 90px
        font-size 30px
        color #fff
        line-height 90px
        background #b4282d
        text-align center
        margin 10px 0
      .other_login
        width 100%
        height 90px
        font-size 30px
        color #b4282d
        line-height 90px
        text-align center
        border 1px solid #b4282d
        background transparent
        margin-top 20px
</style>

