<template>
  <div class="wrap">
    <TopHeader >
      <h2 slot="middle">发现。。。。。</h2>
    </TopHeader>
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

    <div class="scrollX_container">
      <div class="scroll_list">
        <a href="javascript:;" v-for="(recognitionItem,index) in recognition.banner">
          <img :src="recognitionItem.picUrl">
          <p class="new_name">{{recognitionItem.desc}}</p>
        </a>
      </div>

    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  import {mapState} from 'vuex';
  export default {

    mounted () {
      this.$store.dispatch('getBanner');
      this.$store.dispatch('getRecognition');
    },
    computed:{
      ...mapState(['banner','recognition'])
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
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrap
    width 100%
    height 1336px
    h2
    color #b4282d
    .swiper-container
      width 100%
      height 400px
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
           /* position: absolute
            top 0
            left 50%
            margin-left -340px*/

</style>
