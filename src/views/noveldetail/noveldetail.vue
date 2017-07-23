<template>
<div>
   <top-header></top-header>
   <section class="novelDetails_buy p_relative">
		<div class="NovelShelf_List cloudPLR15 bm_none p_relative">
			<ul>
				<li class="d-box">
					<aside class="NovelShelfImg">
						<img class="" src="">
						<i class="icon i-TimeFree"></i>
						<div class="NovelShelfTime">30天15时29分</div>
					</aside>
					<div class="b-flex ml_10">
						<h3 class="NovelList-title">宫锁金训</h3>
						<div class="from mt_8">
							<h4>作者：张小贤</h4>
							<h4 class="mt_3">历史军事</h4>
							<!-- textThrough为删除线样式 -->
							<h4 class="mt_3 textThrough">价格：2元</h4>
							<h4 class="mt_3">章节：共XXX章 |<span class="c_green ml_5">连载中</span></h4>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="d-box bt_d9 h_45">
			<a href="javascript:;" class="b-flex ta_c">购买全书</a>
			<span class="c_d9d9d9">|</span>
			<a href="javascript:;" class="lightBlue b-flex ta_c">立即阅读</a>
		</div>
		<div class="FreeCorner">
			<i class="icon i-FreeLimit"></i>
		</div>
	</section>	
	<catalog></catalog>
	<comment></comment>
</div>
</template>
<script type="text/javascript">
    import topHeader from   'COMPONENTS/TopHeader.vue'
    import catalog   from   'COMPONENTS/Catalog.vue'  
    import comment   from   'COMPONENTS/Comment.vue' 
    
    export default {
        name:'noveldetail',
        data:function(){
           return {
           	  columnId:0
           }
        },
        mounted () {
           this.columnId = (this.$route.query.columnId)
           console.log(this.columnId);
        },
        components:{topHeader,catalog,comment}
   } 
</script>