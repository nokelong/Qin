<template>
	<div class="searchCatBox">
		<div class="titleBox d-box bg_gray cloudPLR15">
			<span class="blueblock mr_5 mt_13"></span>
			<span class="b-flex fz_14 lightBlack">搜索结果</span>
		</div>		
		<div class="searchResult cloudPall15">
		   <!-- 小说列表 -->
		    <div v-if="results.length > 0">
				<div class="NovelShelf_List bm_none">
					<ul>
					   <novel  v-for="(novel,index) in results" :novel="novel" 
					   :key="index"></novel>				
					</ul>
				</div>
				<div class="NoMore ta_c fz_12 c_darkGray bt_d9">没有更多了~</div>
		    </div>
			<div class="novelNone ta_c mt_45" v-else>
				<i class="icon i-bookListNone"></i>
				<div class="c_darkGray fz_14 mt_30">
					<h4>抱歉，没有查找到你要的内容</h4>
				</div>
			</div>		
		</div>
	</div>
</template>
<script>
    
    import novel from 'COMPONENTS/Novel'
    export default {
    	name:'searchResult',
    	props:['results'],
    	components:{novel}
    }
</script>