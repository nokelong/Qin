<template>
	<section class="tabMenu cloudPall15">
		<ul class="tabMenuList d-box">
			<li class="b-flex ta_c">
				<a class="" href="javascript:;" @click="goNovel(0)">
					<img src="../../../assets/images/i-tabBoy.png" alt="">
					<span>男性小说</span>
				</a>
			</li>
			<li class="b-flex ta_c">
				<a class="" href="javascript:;" @click="goNovel(1)">
					<img src="../../../assets/images/i-tabGril.png" alt="">
					<span>女性小说</span>
				</a>
			</li>			
		</ul>
	</section>
</template>
<script type="text/javascript">
export default{
	name:'TabMenu',
	methods:{
		goNovel (type) {
           this.$router.push({name:'novelindex',query:{type:type}})
		}
	}
}
</script>