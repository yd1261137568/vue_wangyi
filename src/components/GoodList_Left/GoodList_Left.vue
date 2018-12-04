<template>
  <div class="listContainer">
    <ul class="left_list">
      <li class="left_item" :class="{active:index === currentIndex}" v-for="(item,index) in sort.categoryL1List" @click="switchGood(index)" >
        <a href="javascript:;">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll';
  import Goods_Right from '../Goods_Right/Goods_Right.vue'
  export default {
    data () {
      return {
        currentIndex:0
      }
    },
    mounted () {
      this.$store.dispatch('getSort',() => {
        this.$nextTick(() => {
          new BScroll('.listContainer',{
            click:true
          })
        })
      });

    },
    methods:{
      switchGood (index) {
        this.currentIndex = index ;
        //发布消息（将index传递到GoodList组件中）
        PubSub.publish('msg', index)
      },

    },
    computed:{
      ...mapState(['sort'])
    },
    watch:{

    },
    components:{
      Goods_Right
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .listContainer
    width 162px
    height 1334px
    border-right 1px solid #ccc
    margin-top 88px
    .left_list
      width 100%
      height 1400px
      .left_item
        width 100%
        height 76px
        line-height 76px
        text-align: center
        margin-bottom 20px
        a
          font-size 28px
        &.active
          border-left 5px solid #B4282D
          a
            color #B4282D
            font-weight 700
</style>
