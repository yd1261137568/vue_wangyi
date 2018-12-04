<template>
  <div class="wrap">
   <div class="recContent">
     <TopHeader>
       <h2 slot="middle">发现。。。。。</h2>
     </TopHeader>
     <!--轮播-->
     <div class="swiper-container">
       <div class="swiper-wrapper">
         <div class="swiper-slide" v-for="(item,index) in recognition.banner" :key="index" >
           <img :src="item.picUrl" alt="">
         </div>
       </div>
     </div>

     <div class="scrollX_container">
       <div class="scroll_list">
         <a href="javascript:;" v-for="(recognitionItem,index) in recognition.banner">
           <img :src="recognitionItem.picUrl">
           <p class="new_name">{{recognitionItem.desc}}</p>
         </a>
       </div>

     </div>

     <Split/>

     <div class="yanxuanLookContainer" v-if="recognition.yxLook">
       <h3>严 选 look</h3>
       <a href="javascript:;" >
         <img :src="recognition.yxLook.picUrl" alt="">
         <div class="headerPic">
           <img :src="recognition.yxLook.avatar" alt="">
           <span>{{recognition.yxLook.nickname}}</span>
         </div>
         <p class="rating">{{recognition.yxLook.content}}</p>
       </a>
     </div>

     <div class="moreExciting">
       <div class="more">
         <div class="line"></div>
         <span>更多精彩</span>
         <div class="line"></div>
       </div>
       <ul class="news_list" >
         <li class="news_item" v-for="(item,index) in recognition.findMore" :key="index">
           <a href="javascript:;">
             <img :src="item.itemPicUrl" alt="">
             <p>{{item.subTitle}}</p>
           </a>
         </li>
       </ul>
     </div>
   </div>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll';
  export default {
    mounted () {
      this.$store.dispatch('getBanner');
      this.$store.dispatch('getRecognition',() => {
        this.$nextTick(() => {
          this._initScrollSwiper();
          this._initScrollX();
        })
      });
    },
    computed:{
      ...mapState(['banner','recognition'])
    },
    methods:{
      _initScrollSwiper(){
        this.scroll = new BScroll('.wrap',{
          click:true
        });

      },
      _initScrollX () {
        this.scrollX = new BScroll('.scrollX_container',{
          scrollX:true,
          click: true
        });
        console.log(this.scrollX);
      }
    },
    watch:{
      banner () {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay:true,
            slidesPerView : 'auto',
            centeredSlides : true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      },

    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrap
    width 100%
    height 1334px
    background #F4F4F4
    .recContent
      width 750px
      padding-bottom 98px
      h2
      color #b4282d
      .swiper-container
        width 100%
        height 400px
        background #fff
        .swiper-wrapper
          width 100%
          height 400px
          display flex
          align-items flex-start
          .swiper-slide
            width 100%
            height 100%
            margin 20px 10px
            justify-content center
            align-items center
            img
              width 690px
              height 400px
      .scrollX_container
        height 280px
        background #fff
        margin 50px 30px 0
        display flex
        .scroll_list
          height 280px
          display flex
          a
            width 200px
            height 280px
            margin-right 30px
            img
              width 200px
              height 164px
              margin-top 30px
            .new_name
              font-size 24px
              display block
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              margin-top 20px

      .yanxuanLookContainer
        width 100%
        padding 50px 0
        background #fff
        h3
          margin-bottom 50px
          font-size 30px
          text-align: center
        a
          width 100%
          img
            width 750px
            height 750px
          .headerPic
            display flex
            height 50px
            line-height 50px
            margin 30px 20px
            img
              width 46px
              height 46px
              border-radius 50%
            span
              font-size 30px
              margin-left 20px
          .rating
            font-size 36px
            padding 0 20px
      .moreExciting
        width 100%
        padding 20px 20px 0
        box-sizing border-box
        .more
          width 100%
          height 120px
          display flex
          justify-content space-between
          align-items center
          span
            font-size 30px
          .line
            width 35%
            height 5px
            background #ECECEC
      .news_list
        width 100%
        .news_item
          width 100%
          background #fff
          padding 25px
          box-sizing border-box
          margin-top 30px
          a
            width 690px
            height 500px
            img
              width 660px
              height 360px
            p
              font-size 30px
              margin 30px 0
              text-indent 60px
              word-spacing 20px
              line-height 50px

</style>
