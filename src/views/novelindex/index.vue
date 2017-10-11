<template>
   <div>
   	    <top-header :pageName="pageName"></top-header>
   		<section class="tabMenu_Novel">	
    		<ul style="width:750px;">
    			<li >
    				<a class="d-box" href="javascript:;">
    					<span class="b-flex">职场商战</span>
    					<img src="../../assets/images/i-tab3.png" alt="">
    				</a>
    			</li>
    			<li >
    				<a class="d-box" href="javascript:;">
    					<span class="b-flex">灵异穿越</span>
    					<img src="../../assets/images/i-tab4.png" alt="">
    				</a>
    			</li>
    			<li >
    				<a class="d-box" href="javascript:;">
    					<span class="b-flex">历史军事</span>
    					<img src="../../assets/images/i-tab5.png" alt="">
    				</a>
    			</li>    		
    		</ul>
    	</section>
    	<section class="Referralbox bt_d9 cloudPall15 ">
			<div class="NovelShelf_List bm_none">
				<ul>
				<novel  v-for="(novel , index) in novelColumn" :key="index" :novel="novel"></novel>
				</ul>
			</div>
		</section>
   </div>
</template>
<script>
    import topHeader from 'COMPONENTS/TopHeader'
    import novel   from 'COMPONENTS/Novel'
    import novelServices from 'SERVICES/novelServices'  

    export default {
    	name:'novelindex',
    	data() {
    	    return {
    	    	pageName: '',
                type: '',
                limitNum: 10,
                novelColumn: {}
            }
    	},
    	components:{novel,topHeader},
    	mounted() {
           this.$nextTick(function(){
               this.type = (this.$route.query.type)
               this.getNovelByType(this.type)
               console.log(this.type);
           });
    	},
        methods:{
            getNovelByType (type) {
           	        
           	    let self = this;
        	      let opions = {};
        	
          	    opions.callback = (result)=>{ 
                    self.novelColumn = result; 	
          	    }
           	    if (type == 0) {        //boys
           	    	this.pageName = '男生小说'
                    novelServices.getBoysColumn(opions);
           	    } else if(type == 1) {  //girl
           	    	this.pageName = '女生小说'
                    novelServices.getGirlsColumn(opions);
           	    }
            }
        }
    }
</script>
<style>
</style>