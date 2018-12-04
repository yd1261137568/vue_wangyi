<template>
  <div class="goodsContainer">
    <div class="rightContainer">
      <div class="rightContent" v-for="(listItem,index1) in sort.categoryL1List" :key="index1" v-if="index1 === goodIndex">
        <img :src="listItem.bannerUrl" alt="">
        <div class="typeContainer">
          <div class="type_title">
            <div class="line"></div>
            <div class="title">{{listItem.name}}</div>
            <div class="line"></div>
          </div>
          <ul class="goodList">
            <li class="goodItem" v-for="(item,listIndex) in listItem.subCateList" :key="listIndex">
              <a href="javascript:;">
                <img :src="item.wapBannerUrl" alt="">
                <p class="goodName">{{item.name}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll';
  import PubSub from 'pubsub-js'
  export default {
    data () {
      return {
        goodIndex:0
      }
    },
    mounted () {
      //订阅消息（将）
      PubSub.subscribe('msg', (msg, index) => {
        this.goodIndex = index ;

      })
    },

    computed:{
      ...mapState(['sort'])
    },
 /*   mounted () {
      this.$store.dispatch('getSort',() => {
        this.$nextTick(() => {
          setTimeout(function () {
            this.scroll5 = new BScroll('.goodsContainer',{
              click:true
            })
            console.log(this.scroll5);
          },1000)

        })
      });

    },*/
    watch:{
      sort () {
        this.$nextTick(() => {
          setTimeout(function () {
            new BScroll('.goodsContainer',{
              click:true
            })
          },1000)
        })
      }
    },
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .goodsContainer
    width 588px
    height 1400px
    margin 30px
    margin-top 88px
    .rightContainer
      width 100%
      margin-top 30px
      .rightContent
        width 525px
        img
          width 525px
          height 200px
        .typeContainer
          .type_title
            width 100%
            height 108px
            display flex
            align-items center
            justify-content space-around
            .title
              font-size 30px
            .line
              width 100px
              height 1px
              background #ccc
        .goodList
          width 550px
          padding-bottom 198px
          clearFix()
          .goodItem
            width 144px
            height 216px
            margin 19px
            float left

            a
              img
                width 144px
                height 144px
              .goodName
                font-size 26px
                text-align center


</style>
