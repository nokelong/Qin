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
			<novel v-for="(novel,index) in recommendColumn" :novel="novel" :key="index"></novel>
		  </ul>
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
		  <ul class="d-box" v-for='boylist in boysColumn'>
		  	<novel  v-for="(novel,index) in boylist" :novel="novel" :key="index">
		  	</novel>
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
		  <ul class="d-box" v-for='list in girlsColumn'>
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
  import TopHeader from '../components/TopHeader.vue'
  import Carousel from '../components/Carousel.vue'
  import Novel from '../components/Novel.vue'
  import WordList from '../components/WordList.vue' 
  import novelServices from '../services/novelServices'

  export default{
    components:{TopHeader, Carousel,Novel,WordList},
    data :()=>({
    	recommendColumn:[],
    	boysColumn:[],
    	limitColumn:[],
    	girlsColumn:[],    
    	limitFree:[1,2,3,4,5],
    	wordlists:[1]
    }),
    mounted (){
        this.getRecommendColumn();  
        this.getBoysColumn();
        this.getGirlsColumn();
    },
    methods:{
    	
        getRecommendColumn(){
        	let self = this;
        	let opions = {};
        	
        	opions.callback = (result)=>{
        		// debugger 
        		self.recommendColumn = result.list;
        	} 
       	    novelServices.getRecommendColumn(opions);       	   
        },
        getBoysColumn(){
            let self = this;
        	let opions = {};
        	
        	opions.callback = (result)=>{   
        	    // debugger     		
        		self.boysColumn = result;
        	}
        	novelServices.getBoysColumn(opions);
        },
        getGirlsColumn(){
            let self = this;
        	let opions = {};
        	
        	opions.callback = (result)=>{   
        	    // debugger     		
        		self.girlsColumn = result;
        	}
        	novelServices.getGirlsColumn(opions);
        }
    },
    computed:{
    }
  }
</script>
<style>
</style>
