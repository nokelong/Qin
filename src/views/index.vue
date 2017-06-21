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
	<!--重磅推荐-->
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
		  <ul class='d-box'>	
			<novel v-for="novel in novellists" :novel="novel"></novel>
		  </ul>
		</div>
	</section>
	<!-- 限免免费 -->
	<section class="TimeFree bt_d9  listImgBox">
		<div class="TimeTop titleBox d-box cloudPLR15">
			<span class="blueblock mr_5 mt_13 bg_red"></span>
			<span class="fz_14 c_red">限时畅读</span>
			<div class="CountDown b-flex clearfix ml_10">
				<div>102</div><span>天</span>
				<div>12</div><span>小时</span>
				<div>25</div><span>分</span>
				<div>36</div>
			</div>
			<a href="javascript:;">
				<span class="c_darkGray fz_12">全部>></span>
			</a>
		</div>
		<div class="ImgList cloudPLR15 ImgN clearfix">
		  <ul class="d-box">
		  	<novel v-for='novel in limitColumn' :novel="novel"></novel>
		  </ul>			
		</div>
		<div class="pl_15 pr_15">
            <h3 class="c_darkGray fz_12 pb_10">限时免费，畅所悦读~</h3>
        </div>
	</section>
	<!-- 男生小说 -->
	<section class="novelBoy bt_d9 listImgBox">
		<div class="titleBox d-box cloudPLR15">
			<span class="blueblock mr_5 mt_13"></span>
			<span class="b-flex fz_14 lightBlack">男生小说</span>
			<a href="javascript:;">
				<i class="iconfont wf-change mr_3 fz_12"></i>
				<span class="c_darkGray fz_12">换一换</span>
			</a>
		</div>
		<div class="ImgList cloudPLR15">
		  <ul class="d-box" v-for='list in boyLists'>
		  	<novel  v-for="novel in list" :novel="novel"></novel>
		  </ul>
		</div>
		<div class="d-box viewMoreBox">
    		<a class="ta_av" href="javascript:;">
    			查看更多
    			<i class="iconfont wf-arrowR fz_12"></i>
    		</a>
    	</div>
	</section>
	<!-- 女生小说 -->
	<section class="novelBoy bt_d9 listImgBox">
		<div class="titleBox d-box cloudPLR15">
			<span class="blueblock mr_5 mt_13"></span>
			<span class="b-flex fz_14 lightBlack">女生小说</span>
			<a href="javascript:;">
				<i class="iconfont wf-change mr_3 fz_12"></i>
				<span class="c_darkGray fz_12">换一换</span>
			</a>
		</div>
		<div class="ImgList cloudPLR15">
		  <ul class="d-box" v-for='list in girlLists'>
		  	<novel v-for="novel in list" :novel="novel"></novel>
		  </ul>		 	
		</div>
		<div class="d-box viewMoreBox">
    		<a class="ta_av" href="javascript:;">
    			查看更多
    			<i class="iconfont wf-arrowR fz_12"></i>
    		</a>
    	</div>
	</section>
	<!-- 最新资讯 -->
	<section class="NewinfBox bt_d9 listWordBox">
		<div class="titleBox d-box cloudPLR15">
			<span class="blueblock mr_5 mt_13"></span>
			<span class="b-flex fz_14 lightBlack">最新资讯</span>
		</div>
		<div class="WordListBox mb_10">
			<ul>
			 <word-list v-for="(wordlist,index) in wordlists" 
			        v-bind:wordList="wordlist"
			        v-bind:index="index" v-bind:key=index></word-list>
			</ul>
		</div>
		<div class="d-box viewMoreBox">
    		<a class="ta_av" href="javascript:;">
    			查看更多
    			<i class="iconfont wf-arrowR fz_12"></i>
    		</a>
    	</div>
	</section>
   </div>   	
</template>
<script>
  import TopHeader from '../components/TopHeader.vue';
  import Carousel from '../components/Carousel.vue';
  import Novel from '../components/Novel.vue';
  import WordList from '../components/WordList.vue';
  import utils from '../utils/utils';

  export default{
    components:{TopHeader, Carousel,Novel,WordList},
    data :()=>({
    	novellists:[1,2,3],
    	limitFree:[1,2,3,4,5],
    	wordlists:[1]
    }),
    computed:{
    	limitColumn:function(){    	
    	   let data = utils.rebuildData(this.limitFree,3)
    	   console.log(data);
    	   return data;
    	},
    	boyLists: function() {
           let data = utils.rebuildData(this.novellists,3)    	   
    	   return data;
    	},
    	girlLists: function() {
           return utils.rebuildData(this.novellists,3);
    	}
    }
  }
</script>
<style>
</style>
