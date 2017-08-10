<template>	
 	<header class="d-box headBar p_fixed " v-bind:class="{bg_blue:isHome,HomeheadBar:isHome}">
		<aside class="pl_15 ta_avC " :class="{'b-flex': isHome}">
			<a class="btnBox headBarLogo" href="javascript:void(0);" @click="goBack">
				<span class="fz_16 c_fff" v-if="isHome==true">
					<img src="../assets/images/logo.png">
				</span>
				<i class="iconfont wf-arrowL lightBlue" v-else></i> 
			</a>
		</aside>
		<section class="b-flex" v-if="isHome==false">
			<h2 class="headBar-title c_darkblack">{{pageName}}</h2>
		</section>
		<aside class="pr_15 ta_avC" :class="{NovelNavD: !isHome}">		
			<a class="btnBox" href="javascript:void(0);" @click="goSearch">
				<i class="iconfont wf-search fz_18" :class="{lightBlue:!isHome}"></i>
			</a>
			<a class="btnBox" href="javascript:void(0);" v-if="isHome==true">
				<i class="icon i-user mt_10"></i><!-- 未登录状态 -->
				<i class="icon i-userSign hide mt_10"></i><!-- 已登录状态 -->
			</a>
			<a class="btnBox" href="javascript:void(0);" v-else @click="goHome">
				<i class="iconfont wf-home lightBlue"></i>
			</a>
		</aside>
	</header>
</template>
<style>
</style>
<script>
import utils from 'UTILS/utils'

export default {
	name:'topheader',
	props:{
		isHome:{
			type:Boolean,
			default:false
		},
		pageName:{
			type:String
		}
	},
	methods:{
		goHome: function() {
			this.$router.push({name:'index'})			
		},
        goBack: function() {
            this.$router.go(-1)
        },
        goSearch: function() {        	
        	this.$vux.alert.show({
        		title: '攻城狮正在抓紧开发中',
                content: '敬请期待'
        	})
        }
	}
}
</script>