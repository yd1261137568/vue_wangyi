<template>
  <div class="scrollX_container">
    <div class="scroll_list">
      <a href="javascript:;" v-for="(newItem,index) in msite.newItemList">
        <img :src="newItem.listPicUrl">
        <div class="new">新品</div>
        <p class="new_name">{{newItem.name}}</p>
        <p class="new_describe">{{newItem.simpleDesc}}</p>
        <div class="currentPrice">￥{{newItem.retailPrice}}</div>
      </a>
    </div>

  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll';
  export default {
    computed:{
      ...mapState(['msite'])
    },
    watch : {
      msite () {
        this.$nextTick(() => {
          new BScroll('.scrollX_container', {
            scrollX:true,
            click: true
          })
        })
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
                //动态获取ul的宽度  3步
  .scrollX_container // 最外层包裹器display flex
    display flex
    padding 0 20px
    .scroll_list // ul 在给个 display flex
      display flex
      flex-flow nowrap
      flex-direction row
      a         // li 设置宽高
        width 280px
        height 477px
        margin 20px 10px
        text-align: center
        font-size 26px
        img
          width 280px
          height 288px
          background #F5F5F5
          margin-bottom 10px
        .new
          width 90px
          height 40px
          line-height 40px
          margin 10px 0
          background orange
          color white
        .new_name
          color #7F7F7F
          display block
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          margin 10px 0
        .new_describe
          font-size 24px
          margin 10px 0
          display block
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
        .currentPrice
          width 90px
          color #C25154
</style>
