<template>
    <li>
      <a href="javascript:;" class="d-box">
        <aside class="NovelShelfImg">
          <img class="" v-bind:src="novel.columnImageUrl">
          <i class="icon i-buyTip "></i>
        </aside>
        <div class="b-flex ml_10">
          <h3 class="NovelList-title" style="width: 140px;height:38px;">{{novel.columnName}}</h3>
          <div class="from mt_5">
            <h4>作者：{{novel.author}}</h4>
            <h4 class="mt_5">{{novel.categoryName}} |<span class="c_red pl_5">已完结</span></h4>
            <!-- 宽度需要自动获取 -->
            <div class="fz_12 mt_5 text-overflow" style="width:200px;">{{novel.description}}</div>
          </div>
        </div>
      </a>
      <div class="btn_order">
        <a href="javascript:;" class="d-box"></a>
        <a href="javascript:;" class="lightBlue">立即阅读</a>
      </div>
      <a href="javascript:;" class="lightBlue"></a>
    </li>
</template>

<script>
export default {
  name: 'Novel',
  props:['novel'],
  methods:{
    goNovelDetail (cid){
      // console.log(cid)
      this.$router.push({ name: 'noveldetail', query: { columnId: cid }})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
