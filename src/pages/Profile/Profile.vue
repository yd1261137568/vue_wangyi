<template>
  <div class="wrap">
    <TopHeader>
      <h2 slot="middle" style="{margin-left: 50px}">网易严选</h2>
    </TopHeader>
    <h1 class="logo">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </h1>
    <div class="profileContainer" v-if="isShow">
      <button class="phoneLogin" @click="showPhoneView">
        <span><i class="iconfont icon-shouji"></i></span>
        <span>手机号码登录</span>
      </button>
      <button class="emailLogin" @click="showEmailView">
        <span><i class="iconfont icon-youxiang"></i></span>
        <span>邮箱账号登录</span>
      </button>
      <p>手机号快速注册 ></p>
    </div>
    <div class="phoneLoginContainer" v-if="showPhoneLogin">
      <form class="formMsgCommit">
        <div class="msg_login">
          <div class="phone">
            <!--<lable class="phone_placeHolder" name="">请输入手机号2</lable>-->
            <input type="text" class="phone_placeHolder" placeholder="请输入手机号">
          <!--  <div class="phone_line"></div>-->
          </div>
          <div class="code">
            <!--<lable class="code_placeHolder" name="">请输入短信验证码</lable>-->
            <input type="text" class="code_placeHolder" placeholder="请输入短信验证码">
            <!--<div class="code_line"></div>-->
            <button class="getCode">获取验证码</button>
          </div>
          <div class="hasProblem">
            <span>遇到问题？</span>
            <span>使用密码验证登陆</span>
          </div>
          <button class="phone_login">登陆</button>
          <button class="other_login" @click="otherLoginType">其他登陆方式</button>
          <p class="phone_regist">注册账号></p>
        </div>
      </form>
    </div>
    <div class="emailLoginContainer" v-if="showEmailLogin">
      <form class="formEmailCommit">
        <div class="email_login" >
          <div class="email">
            <input type="text" class="email_placeHolder" placeholder="请输入邮箱账号">
          </div>
          <div class="email_pwd">
            <input type="text" class="email_pwdPlaceHolder" placeholder="请输入邮箱密码">
          </div>
          <div class="regisetOrForgetPwd">
            <span>注册账号</span>
            <span>忘记密码</span>
          </div>
        </div>
        <button class="email_login_button">登陆</button>
        <button class="other_login" @click="otherLoginType">其他登陆方式</button>
      </form>
    </div>

  </div>

</template>
<script>
  export default{
    data () {
      return {
        isShow:true,
        showPhoneLogin:false,
        showEmailLogin:false
      }
    },
    methods:{
      showPhoneView(){
        this.isShow=false,
        this.showPhoneLogin=true
      },
      showEmailView(){
        this.showEmailLogin=true
        this.isShow=false
      },
      otherLoginType () {
        this.showEmailLogin=false
        this.showPhoneLogin=false
        this.isShow=true
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.wrap
  width 100%
  height 1334px
  background #fff
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
    margin 100px auto 120px
    position: relative
    img
      width 260px
      height 100px
      position: absolute
      top 50%
      left 50%
      margin-left -100px
      margin-top -32px
  .profileContainer
    width 100%
    height 100%
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
    .emailLogin
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
      margin-top 480px
  .phoneLoginContainer
    width 750px
    height 1334px
    background #fff
    .formMsgCommit
      padding 0 30px
      .msg_login
        .phone
          width 100%
          height 80px
          .phone_placeHolder
            border-bottom 1px solid #ccc
            outline none
            width 100%
            height 80px
            line-height 80px
            font-size 28px
        .code
          width 100%
          height 90px
          line-height 90px
          margin-top 25px
          clearFix()
          position: relative
          display flex
          .code_placeHolder
            border-bottom 1px solid #ccc
            outline none
            width 100%
            height 80px
            line-height 80px
            font-size 28px
          .getCode
            font-size 28px
            width 200px
            height 60px
            line-height 60px
            text-align: center
            border 1px solid #c5cddb
            color #bdbdbd
            border-radius 10px
            background transparent
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

  .emailLoginContainer
    .formEmailCommit
      padding 0 30px
      .email_login
        .email
          width 100%
          height 80px
          .email_placeHolder
            border-bottom 1px solid #ccc
            outline none
            width 100%
            height 80px
            line-height 80px
            font-size 28px

            /*font-size 28px*/
            /*color #bdbdbd*/
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
          .email_pwdPlaceHolder
            border-bottom 1px solid #ccc
            outline none
            width 100%
            height 80px
            line-height 80px
            font-size 28px

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
