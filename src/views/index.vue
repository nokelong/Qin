<template>
   <div>
	<top-header></top-header>
	<Carousel></Carousel>
	<section class="tabMenu cloudPall15">
		<ul class="tabMenuList d-box">
			<li class="b-flex ta_c">
				<a class="" href="javascript:;">
					<img src="../assets/images/i-tabBoy.png" alt="">
					<span>男生小说</span>
				</a>
			</li>
			<li class="b-flex ta_c">
				<a class="" href="javascript:;">
					<img src="../assets/images/i-tabGril.png" alt="">
					<span>女生小说</span>
				</a>
			</li>
			<li class="b-flex ta_c">
				<a class="" href="javascript:;">
					<img src="../assets/images/i-tabMess.png" alt="">
					<span>最新资讯</span>
				</a>
			</li>
			<li class="b-flex ta_c">
				<a class="" href="javascript:;">
					<img src="../assets/images/i-tabAll.png" alt="">
					<span>全部分类</span>
				</a>
			</li>
		</ul>
	</section>
	<section class="RecommendBox bt_d9 listImgBox">
		<div class="titleBox d-box cloudPLR15">
			<span class="blueblock mr_5 mt_13"></span>
			<span class="b-flex fz_14 lightBlack">重磅推荐</span>
			<a href="javascript:;">
				<i class="iconfont wf-change mr_3 fz_12"></i>
				<span class="c_darkGray fz_12">换一换</span>
			</a>
		</div>
		<div class="ImgList cloudPLR15 mb_15">
			<ul class="d-box" v-for="item in items">
				<novel></novel>
			</ul>
		</div>
	</section>
   </div>
</template>
<script>
  import TopHeader from '../components/TopHeader.vue'
  import Carousel from '../components/Carousel.vue'
  import Novel from '../components/Novel.vue'

  export default{
    components:{TopHeader, Carousel,Novel},
    data :()=>({items:[1,2,3]})
  }
</script>
<style>
</style>
