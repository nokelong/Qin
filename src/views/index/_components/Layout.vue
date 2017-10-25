<template scope="props">
	<section class="novelBoy bt_d9 listImgBox">
		<div class="titleBox d-box cloudPLR15">
			<span class="blueblock mr_5 mt_13"></span>
			<slot name="novletype"></slot>			
			<a href="javascript:;" @click="changeMore">
				<transition name="bounce">
				  <i class="iconfont wf-change mr_3 fz_12" v-if="ischange"></i>
				</transition>
				<span class="c_darkGray fz_12">换一换</span>
			</a>
		</div>
		<div class="ImgList cloudPLR15">
		  <ul class="d-box" v-for='novlelist in novelColumn'>
		  	  <li class="b-flex" v-for="(novel,index) in novlelist" :key="novel.columnId">
			    <a href="javascript:;" @click="goNovelDetail(novel.columnId)">
			      <div class="listImg p_relative">
			        <img v-bind:src="novel.columnImageUrl"/>
			        <div class="Corner hide"><!-- 角标 -->
			          <i class="icon "></i>
			        </div>        
			        <div class="layer_BlackFloat hide"></div>
			      </div>
			      <h3 class="Firtitle">{{novel.columnName}}</h3>
			      <p class="Subtitle">{{novel.author}}</p>
			    </a>
			  </li>		 
		  </ul>
		</div>
		<div class="d-box viewMoreBox" v-if="showMore==true">
    		<a class="ta_av" href="javascript:;">
    			查看更多
    			<i class="iconfont wf-arrowR fz_12"></i>
    		</a>
    	</div>
	</section>	
</template>
<script>

   export default{
		name: 'Layout',
		data:()=>({
	        startIndex:0,     
	        ischange:true    
		}),
		props:{
			novelColumn:{
	            type:[Object,Array],
	            required: true
			},
		    showMore:{
		    	type: Boolean,
	            default: true
		    }
		},
		computed:{         
		},
		methods:{
			/**
			 * [changeMore 换一换]
			 * @return {[type]} [description]
			 */
	        changeMore: function() {

	        	let self = this        	
	        	self.ischange = !self.ischange;
	        	//换一换动态效果
	        	setTimeout(function(){
	               self.ischange = !self.ischange;
	        	},0)        
	        	// 触发index.vue changeColumn事件
	        	self.$emit('changeColumn');
	        },
	        goNovelDetail: function(cid) {
	        	this.$router.push({ name: 'noveldetail', query: { columnId: cid }})
	        }
		},	
		components:{}
	}
</script>
<style type="text/css">
    .bounce-enter-active {
	  animation: bounce-in .5s;
	}
  
    @keyframes bounce-in {
    0% {
      transform: rotate(0deg);
    }
    50% {
       transform: rotate(180deg);
    }
    100% {
       transform: rotate(360deg);
    }
}
</style>