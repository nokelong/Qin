<template>    
    <!-- 有图模式 -->
    <li v-bind:class="classObject" class="WordList">
      <a href="javascript:;" class="d-box" @click="goDetail">
        <div class="b-flex mr_10">
          <h3 class="WordList-title">PC游戏《消失的地平线》今夏将推移动版 再探神秘高原</h3>
          <p class="from">
            <span class="mr_10">139邮箱体育报</span>
            <i class="iconfont wf-eye"></i>
            <span>0.5万</span>
          </p>
        </div>
        <aside v-if="hasImg==true">
          <img class="WordList-img" src="../assets/images/img_01.jpg">
        </aside>
      </a>
    </li>   
</template>
<script>
export default {
  name: 'Info',
  props:{
    item:{
      type:Object,
      required:true
    }
  },
  data:()=>({
    hasImg:false
  }),
  computed:{
    classObject:function(){
      return {
        bg_ListGery:this.hasImg,
        noImg :!this.hasImg,
        'd-box':!this.hasImg
      }
    }
  },
  methods:{
    goDetail:function(nid){
      // this.$router.push({ name: 'user', params: { nid: nid }})
      this.$vux.alert.show({
          title: '攻城狮正在抓紧开发中',
          content: '敬请期待'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
