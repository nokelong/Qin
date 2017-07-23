<template>
	<section class="NewinfBox bt_d9 listWordBox" v-if="wordlists.length > 0">
		<div class="titleBox d-box cloudPLR15">
			<span class="blueblock mr_5 mt_13"></span>
			<span class="b-flex fz_14 lightBlack">最新资讯</span>
		</div>
		<div class="WordListBox mb_10">
			<ul>
			 <Info v-for="(item,index) in (wordlists)"  :item="item" :key="index">
			 </Info>
			</ul>
		</div>
		<div class="d-box viewMoreBox">
    		<a class="ta_av" href="javascript:;">
    			查看更多
    			<i class="iconfont wf-arrowR fz_12"></i>
    		</a>
    	</div>
	</section>
</template>
<script >
import Info from 'COMPONENTS/Info.vue'

export default{
	name:'Newinfo',
	props:{
		wordlists:{
			type:Array
		}
	},	
    methods:{
       
    },
	components:{Info}
	
}
</script>