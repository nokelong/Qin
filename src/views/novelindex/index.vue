<template>
   <div>
   	    <top-header :pageName="pageName"></top-header>
   		<section class="tabMenu_Novel" style="overflow-x: scroll;">	
    		<ul :style="{width:cateWidth}">
                <li @click="getNovelByType()">
                    <a class="d-box" href="javascript:;">
                        <span class="b-flex">男生小说</span> 
                        <img src="../../assets/images/i-tabMan.png" />
                    </a>
                </li>
    			<li v-for="(cate, index) in filterCategoryColumn" :key="cate.categoryId" @click="getNovelByType(cate.categoryId)">
    				<a class="d-box" href="javascript:;">
    					<span class="b-flex">{{cate.categoryName}}</span> 
                        <img :src="cate.imgUrl" >
    				</a>
    			</li>
    		</ul>
    	</section>
    	<section class="Referralbox bt_d9 cloudPall15 ">
			<div class="NovelShelf_List bm_none">
				<ul>
				<novel  v-for="(novel, index) in novelColumn" :key="novel.columnId" :novel="novel">
                </novel>
				</ul>
			</div>
		</section>
   </div>
</template>
<script>
    import topHeader from 'COMPONENTS/TopHeader'
    import novel   from 'COMPONENTS/Novel'
    import novelServices from 'SERVICES/novelServices'  
    import Tips          from 'UTILS/tips'
    import iRab1  from '@/assets/images/i-tab1.png'
    import iRab2  from '@/assets/images/i-tab2.png'
    import iRab3  from '@/assets/images/i-tab3.png'
    import iRab4  from '@/assets/images/i-tab4.png'

    export default {
    	name:'novelindex',
    	data() {
    	    return {
    	    	pageName: '',
                type: '',
                limitNum: 10,
                categoryColumn: [],
                cateWidth: '0px',
                novelColumn: {}
            }
    	},
    	components:{novel,topHeader},
    	mounted() {
            this.$nextTick(function(){
                this.type = (this.$route.query.type)
                this.getNovelByType();
                this.getCategoryInfo();          
            });
    	},
        methods: {
            getCategoryInfo () {
                let options = {
                    type: this.type
                }
                options.callback = (results) =>{
                    if(results.resultCode == 0) {
                        let list = [];
                        if(results.body && results.body.list) {
                            list = results.body.list;
                        }
                        this.cateWidth = (list.length +1)*100 + 20+ 'px';
                        this.categoryColumn = list;
                    } else {
                        Tips.showTips({
                            type: 'warn',
                            msg: results.description
                        })
                    }
                };
                novelServices.getCategoryInfo(options);
            },
            getNovelByType (cateId) {
           	        
           	    let self = this;
        	      let options = {
                    recId: '',
                    cateId: cateId
                };
        	
          	    options.callback = (results)=>{
                    if(results.resultCode == 0) {
                        let list = []

                        if(results.body && results.body.list) {
                            list = results.body.list;
                        }
                        this.novelColumn = list;
                    } else {
                        Tips.showTips({
                            type: 'warn',
                            msg: results.description
                        })
                    };                    
          	    }
           	    if (this.type == 0) {        //boys
           	        this.pageName = '男性小说'
                    options.recId = 100;                    
                    novelServices.getColumns(options);
           	    } else if(this.type == 1) {  //girl
           	        this.pageName = '女性小说'
                    options.recId = 101;
                    novelServices.getColumns(options);
           	    }
            }
        },
        computed: {
            filterCategoryColumn: function() {
                this.categoryColumn.map((cate, index)=>{                   
                    var obj = {'iRab1':iRab1,'iRab2':iRab2,'iRab3':iRab3,'iRab4':iRab4};
                    cate.imgUrl = obj['iRab'+(index+1)] || iRab1;
                });
                return this.categoryColumn;
            }
        }
    }
</script>
<style>
</style>