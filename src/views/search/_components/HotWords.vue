<template>
	<div class="searchCatBox">
		<div class="titleBox d-box bm_d9 ml_15 mr_15">
			<span class="blueblock mr_5 mt_13"></span>
		    <span class="b-flex fz_14 lightBlack">搜索热词</span>
		</div>
		<div class="searchCatList mt_10">
			<ul class="cloudPLR15">
			    <li  v-for="(item,index) in items" @click='search(item)'>
			    	<a href="javascript:;">{{item.name}}</a>
			    </li>			
			</ul>
		</div>
	</div>
</template>
<script>
    export default{
    	name:'HotWords',
    	props:['items'],
    	methods:{
          search(item) {
          	this.$emit('search',item.name);
          }
    	}
    }
</script>