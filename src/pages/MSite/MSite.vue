<template>
  <div class="wrap">
    <!--头部-->
    <div class="header_wrap">
      <header class="header">
        <h2>网易严选</h2>
        <div class="search_goods">
        <span class="search">
          <i class="iconfont icon-sousuo" ></i>
        </span>
          <input type="text" placeholder="搜索商品，共19603款好物" class="search_input">
        </div>
      </header>
      <!--导航-->
      <div class="nav">
        <ul class="nav_list">
          <li class="nav_item active">
            <a href="javascript:;">推荐</a>
          </li>
          <li class="nav_item">
            <a href="javascript:;">居家</a>
          </li>
          <li class="nav_item">
            <a href="javascript:;">鞋包配饰</a>
          </li>
          <li class="nav_item">
            <a href="javascript:;">服装</a>
          </li>
          <li class="nav_item">
            <a href="javascript:;">电器</a>
          </li>
          <li class="nav_item">
            <a href="javascript:;">洗护</a>
          </li>
          <li class="nav_item">
            <a href="javascript:;">饮食</a>
          </li>
          <li class="nav_item">
            <a href="javascript:;">餐厨</a>
          </li>
          <li class="nav_item">
            <a href="javascript:;">餐厨</a>
          </li>
          <li class="nav_item">
            <a href="javascript:;">餐厨</a>
          </li>
          <li class="nav_item">
            <a href="javascript:;">餐厨</a>
          </li>
          <li class="nav_item">
            <a href="javascript:;">餐厨</a>
          </li>
        </ul>
      </div>
    </div>
    <!--轮播-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/da8aa8ab0c32dd22c0bddee10764afbf.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/b412d997a1abdb2585210645424fb21a.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/8d1c9771ff59205fb1b884d2a6b10ade.png?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/089fdc9bfdc75ccfbe9c349d0096804b.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination">
        <ul class="swiper_list">
          <li class="swiper_item on"></li>
          <li class="swiper_item"></li>
          <li class="swiper_item"></li>
          <li class="swiper_item"></li>
        </ul>
      </div>
    </div>
    <Split/>
    <!--内容区-->
    <section class="content">
      <div class="new_person_gifts">
        <h2>- 新人专享礼 -</h2>
        <div class="new_person_pic">
          <div class="left">
            <p>新人专享礼包</p>
            <img src="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png" alt="">
          </div>
          <div class="right">
            <!--福利社-->
            <div class="right_welfare">
              <p>福利社</p>
              <img src="http://yanxuan.nosdn.127.net/9299ddfcc2d152a169aa2ad2461af263.png" alt="">
            </div>
            <!--新人拼团-->
            <div class="right_assemble">
              <p>新人拼团</p>
              <img src="http://yanxuan.nosdn.127.net/db52ac0a791cecb9129a4a34fc864f48.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <Split/>

      <div class="hot_list">
        <p>类目热销榜</p>
        <div class="cloth_and_home">
          <div class="clothing">
            <div class="clothing_text">
              <span class="text">服装榜</span>
              <span class="line"></span>
            </div>
            <img src="http://yanxuan.nosdn.127.net/3bcdc4fc75f4086b00fc49672ded1a03.png?imageView&quality=65&thumbnail=200x200" alt="">
          </div>
          <div class="home">
            <div class="clothing_text">
              <span class="text">居家榜</span>
              <span class="line"></span>
            </div>
            <img src="http://yanxuan.nosdn.127.net/d85453ca5b9e6ff24cde180504f4c93e.png?imageView&quality=65&thumbnail=200x200" alt="">
          </div>
        </div>

        <div class="other_types">
          <a href="javascript:;">
            <span>饮食榜</span>
            <img src="http://yanxuan.nosdn.127.net/8b7bde0b395e2bda54505cf4c3b7880b.png?imageView&quality=65&thumbnail=200x200" alt="">
          </a>
          <a href="javascript:;">
            <span>饮食榜</span>
            <img src="http://yanxuan.nosdn.127.net/8b7bde0b395e2bda54505cf4c3b7880b.png?imageView&quality=65&thumbnail=200x200" alt="">
          </a>
          <a href="javascript:;">
            <span>饮食榜</span>
            <img src="http://yanxuan.nosdn.127.net/8b7bde0b395e2bda54505cf4c3b7880b.png?imageView&quality=65&thumbnail=200x200" alt="">
          </a>
          <a href="javascript:;">
            <span>饮食榜</span>
            <img src="http://yanxuan.nosdn.127.net/8b7bde0b395e2bda54505cf4c3b7880b.png?imageView&quality=65&thumbnail=200x200" alt="">
          </a>
          <a href="javascript:;">
            <span>饮食榜</span>
            <img src="http://yanxuan.nosdn.127.net/8b7bde0b395e2bda54505cf4c3b7880b.png?imageView&quality=65&thumbnail=200x200" alt="">
          </a>
          <a href="javascript:;">
            <span>饮食榜</span>
            <img src="http://yanxuan.nosdn.127.net/8b7bde0b395e2bda54505cf4c3b7880b.png?imageView&quality=65&thumbnail=200x200" alt="">
          </a>
          <a href="javascript:;">
            <span>饮食榜</span>
            <img src="http://yanxuan.nosdn.127.net/8b7bde0b395e2bda54505cf4c3b7880b.png?imageView&quality=65&thumbnail=200x200" alt="">
          </a>
          <a href="javascript:;">
            <span>饮食榜</span>
            <img src="http://yanxuan.nosdn.127.net/8b7bde0b395e2bda54505cf4c3b7880b.png?imageView&quality=65&thumbnail=200x200" alt="">
          </a>
        </div>
      </div>
      <Split/>

      <div class="fashion_type">
        <a href="javascript:;">
          <img src="http://yanxuan.nosdn.127.net/2e8193e872ec918aa80a33c4181238df.png?imageView&quality=65&thumbnail=330x330" alt="">
          <p>女式超长毛呢大衣</p>
          <div class="fashion_price">
            <span class="currentPrice">￥1481.2</span>
            <del>￥1899</del>
          </div>
          <div class="woman">女士风格周</div>
        </a>
        <a href="javascript:;">
          <img src="http://yanxuan.nosdn.127.net/2e8193e872ec918aa80a33c4181238df.png?imageView&quality=65&thumbnail=330x330" alt="">
          <p>女式超长毛呢大衣</p>
          <div class="fashion_price">
            <span class="currentPrice">￥1481.2</span>
            <del>￥1899</del>
          </div>
          <div class="woman">女士风格周</div>
        </a>
        <a href="javascript:;">
          <img src="http://yanxuan.nosdn.127.net/2e8193e872ec918aa80a33c4181238df.png?imageView&quality=65&thumbnail=330x330" alt="">
          <p>女式超长毛呢大衣</p>
          <div class="fashion_price">
            <span class="currentPrice">￥1481.2</span>
            <del>￥1899</del>
          </div>
          <div class="woman">女士风格周</div>
        </a>
        <a href="javascript:;">
        <img src="http://yanxuan.nosdn.127.net/2e8193e872ec918aa80a33c4181238df.png?imageView&quality=65&thumbnail=330x330" alt="">
        <p>女式超长毛呢大衣</p>
        <div class="fashion_price">
          <span class="currentPrice">￥1481.2</span>
          <del>￥1899</del>
        </div>
        <div class="woman">女士风格周</div>
      </a>
        <a href="javascript:;">
        <img src="http://yanxuan.nosdn.127.net/2e8193e872ec918aa80a33c4181238df.png?imageView&quality=65&thumbnail=330x330" alt="">
        <p>女式超长毛呢大衣</p>
        <div class="fashion_price">
          <span class="currentPrice">￥1481.2</span>
          <del>￥1899</del>
        </div>
        <div class="woman">女士风格周</div>
      </a>
        <a href="javascript:;">
        <img src="http://yanxuan.nosdn.127.net/2e8193e872ec918aa80a33c4181238df.png?imageView&quality=65&thumbnail=330x330" alt="">
        <p>女式超长毛呢大衣</p>
        <div class="fashion_price">
          <span class="currentPrice">￥1481.2</span>
          <del>￥1899</del>
        </div>
        <div class="woman">女士风格周</div>
      </a>
        <a href="javascript:;">
          <img src="http://yanxuan.nosdn.127.net/2e8193e872ec918aa80a33c4181238df.png?imageView&quality=65&thumbnail=330x330" alt="">
          <p>女式超长毛呢大衣</p>
          <div class="fashion_price">
            <span class="currentPrice">￥1481.2</span>
            <del>￥1899</del>
          </div>
          <div class="woman">女士风格周</div>
        </a>
        <a href="javascript:;">
          <img src="http://yanxuan.nosdn.127.net/2e8193e872ec918aa80a33c4181238df.png?imageView&quality=65&thumbnail=330x330" alt="">
          <p>女式超长毛呢大衣</p>
          <div class="fashion_price">
            <span class="currentPrice">￥1481.2</span>
            <del>￥1899</del>
          </div>
          <div class="woman">女士风格周</div>
        </a>
      </div>
    </section>
  </div>

</template>
<script>
  import BScroll from 'better-scroll';
  import Swiper from 'swiper';
  import {mapState} from 'vuex';

  export default {
    mounted () {
      new BScroll('.nav', {
        scrollX:true,
        click: true
      }),

      new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
      })
    },
    computed:{
      ...mapState(['banner'])
    }
  }

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
    .wrap
      width 100%
      height 100%
      .header_wrap
        position: fixed
        /*left 0*/
        top 0
        z-index 10
        background #fff
        .header
          display flex
          align-items center
          width 100%
          height 48px
          padding 20px
          h2
            font 700 32px '宋体'
          .search_goods
            width 75%
            height 88px
            margin-left 20px
            position: relative
            .icon-sousuo
              font-size 40px
              position absolute
              top 20px
              left 38px
            .search_input
              height 65%
              margin-top 20px
              padding 0 80px
              box-sizing border-box
              font-size 30px
              border-radius 10px
              border 1px solid #ccc
        .nav
          display flex
          flex-flow nowrap
          flex-direction row
          width 100%
          height 60px
          font-size 30px
          font-weight 700
          margin-bottom 7px
          .nav_list
            display flex
            align-items flex-start
            text-align: center
            height 60px
            line-height 60px
            clearFix()
            .nav_item
              height 60px
              float: left
              padding 0 20px
              white-space nowrap
              &.active
                border-bottom 5px solid #b4282d
                a
                  color #b4282d

      .swiper-container
        width 100%
        height 400px
        padding-top 152px
        .swiper-wrapper
          width 100%
          height 400px
          display flex
          align-items flex-start
          .swiper-slide
            width 100%
            height 100%
        .swiper-pagination
          width 100%
          height 50px
          position: relative
          margin-top -50px
          .swiper_list
            position: absolute
            left 50%
            top 50%
            margin-top -2px
            margin-left -110px
            display: flex
            .swiper_item
              width 50px
              height 4px
              margin 0 4px
              background #ccc
              &.on
                background #b4282d

      .content
        width 100%
        padding 20px 20px 98px
        .new_person_gifts
          h2
            font-size 36px
            text-align: center
            margin 15px 0
          .new_person_pic
            display flex
            margin 30px 0
            .left
              width 343px
              height 434px
              background #F9E9CF
              margin 0 5px
              position relative
              p
                font-size 36px
                margin 30px 0 0 20px
              img
                position absolute
                left 65px
                top 137px
            .right
              width 343px
              height 434px
              .right_welfare,.right_assemble
                width 343px
                height 215px
                position: relative
                p
                  font-size 36px
                  padding 30px 0 0 20px
                img
                  width 200px
                  height 200px
              .right_welfare
                background #FBE2D3
                margin-bottom 2px
                img
                  position: absolute
                  left 130px
                  top 30px
              .right_assemble
                background #FFECC2
                margin-top 2px
                img
                  position: absolute
                  left 130px
                  top 30px



        .hot_list
          width 100%
          p
            font-size 36px
            margin 25px 0
          .cloth_and_home
            width 100%
            height 200px
            display flex
            .clothing,.home
              width 340px
              height 200px
              line-height 200px
              background #F9F3E4
              margin-right 10px
              position: relative
              display flex
              .text
                position: absolute
                left 20px
                top 50%
                margin-top -125px
                font-size 26px
              .line
                display inline-block
                width 50px
                height 6px
                background #52514F
                margin-left 20px
              img
                width 210px
                height 210px
                margin-left 60px
            .home
              background #EBEFF6


          .other_types
            clearFix()
            a
              width 165px
              height 180px
              background #F5F5F5
              float left
              margin 0 10px 10px 0
              display flex
              flex-direction column
              text-align: center
              position: relative
              span
                font-size 26px
                margin-top 26px
              img
                width 120px
                height 120px
                position: absolute
                left 50%
                top 60%
                margin-left -60px
                margin-top -60px

        .fashion_type
          display flex

          a
            width 200px
            height 318px
            margin 20px 10px
            text-align: center
            display flex
            flex-direction column
            img
              width 200px
              height 200px
              background #F5F5F5
              margin-bottom 10px
            p
              font-size 24px
            .fashion_price
              font-size 24px
              margin 10px 0
              .currentPrice
                color red
            .woman
              margin 0 auto
              font-size 26px
              width 160px
              background orange
              color white


</style>
