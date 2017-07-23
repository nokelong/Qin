<template scope="props">
	<section class="novelBoy bt_d9 listImgBox">
		<div class="titleBox d-box cloudPLR15">
			<span class="blueblock mr_5 mt_13"></span>
			<slot name="novletype"></slot>			
			<a href="javascript:;">
				<i class="iconfont wf-change mr_3 fz_12"></i>
				<span class="c_darkGray fz_12">换一换</span>
			</a>
		</div>
		<div class="ImgList cloudPLR15">
		  <ul class="d-box" v-for='novlelist in novelColumn'>
		  	<novel  v-for="(novel,index) in novlelist" :novel="novel" :key="index">
		  	</novel>
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
import Novel from 'COMPONENTS/Novel.vue'
export default{
	name: 'Layout',
	data:()=>({
        startIndex:0
	}),
	props:{
		novelColumn:{
            type:[Object,Array],
            required: true
		},
	    showMore:{
	    	type: Boolean,
            default: true
	    },
	    limitNum:{
	    	Number,
	    	default:6
	    }
	},
	computed:{
        filterColumn:function(){
        	return [this.novelColumn.slice(this.startIndex,this.limitNum)]
        }
	},
	components:{Novel}
}
</script>