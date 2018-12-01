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
          <li class="nav_item" v-for="(dataItem,index) in data" :key="index" :class="{active:index === currentIndex}" @click="clickLi(index)">
            <a href="javascript:;">{{dataItem.name}}</a>
          </li>
        </ul>
      </div>
    </div>
    <!--轮播-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(bannerItem,index) in banner" :key="index" >
          <img :src="bannerItem.picUrl" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

    <div class="icon_three">
      <div class="item" v-for="(item,index) in msite.policyDescList">
        <img :src="item.icon"/>
        <span>{{item.desc}}</span>
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
            <img src="http://yanxuan.nosdn.127.net/64f33b256b0f8660b8b6184dbf9bfdc2.png?imageView&quality=65&thumbnail=200x200" alt="">
          </a>
          <a href="javascript:;">
            <span>饮食榜</span>
            <img src="http://yanxuan.nosdn.127.net/73a065d6fc8c32197b54421808c54788.png?imageView&quality=65&thumbnail=200x200" alt="">
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

      <ScrollX/>

    </section>

    <!--footer-->
    <MsiteFoot/>
  </div>

</template>
<script>
  import BScroll from 'better-scroll';
  import Swiper from 'swiper';
  import {mapState} from 'vuex';
  import MsiteFoot from '../../components/MsiteFoot/MsiteFoot.vue';

  export default {
    data () {
      return {
        currentIndex:0
      }
    },

    mounted () {
      //触发异步actions，将异步数据保存在state中
      this.$store.dispatch('getBanner');
      this.$store.dispatch('getData');
      new BScroll('.nav', {
        scrollX:true,
        click: true
      });

      this.$store.dispatch('getMsist');

    },
    methods:{
      clickLi (index) {
        this.currentIndex = index
      }
    },
    computed:{
      ...mapState(['banner','msite','data'])
    },
    watch:{
      banner () {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay:true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    },
    components:{
      MsiteFoot
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
          width 750px
          height 60px
          font-size 30px
          font-weight 700
          margin-bottom 7px
          .nav_list
            display flex
            flex-flow nowrap
            flex-direction row
            height 60px
            line-height 60px
            .nav_item
              text-align: center
              width 80px
              height 60px
              margin 0 20px
              &.active
                border-bottom 5px solid #b4282d
                a
                  font-weight 700
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
            img
              width 750px
              height 400px
      .icon_three
        margin-bottom: 12px
        background: #fff
        display: flex
        justify-content: space-between
        align-items: center
        width: 100%
        margin-top: 20px
        .item
          display: flex
          width: 33%
          height 40px
          margin-left: 15px
          color: #b4282d
          img
           width 24px
           height 24px
           vertical-align middle
          span
            font-size 24px;
            margin-left: 5px
            font-weight 700
      .content
        width 100%
        /*padding 10px 0*/
        .new_person_gifts
          padding 0 20px
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
          padding 0 20px
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

</style>
<style lang="stylus" rel="stylesheet/stylus">
  .swiper-pagination-bullets
    width 100%
    height 50px
    margin-top -30px
    z-index 10
    position: relative
    display: flex
    justify-content center
    .swiper-pagination-bullet
      width 50px
      height 4px
      background #ccc
      margin 0 4px
      &.swiper-pagination-bullet-active
        background #b4282d
</style>

