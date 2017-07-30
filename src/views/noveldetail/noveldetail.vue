<template>
<div style="background:#f4f5f7;">
   <top-header></top-header>
   <section class="novelDetails_buy p_relative">
		<div class="NovelShelf_List cloudPLR15 bm_none p_relative">
			<ul>
				<li class="d-box">
					<aside class="NovelShelfImg">
						<img class="" v-bind:src="column.columnImageUrl">						
					</aside>
					<div class="b-flex ml_10">
						<h3 class="NovelList-title">{{column.columnName}}</h3>
						<div class="from mt_8">
							<h4>作者：{{column.author}}</h4>
							<h4 class="mt_3">{{column.categoryName}}</h4>
							<!-- textThrough为删除线样式 -->
							<h4 class="mt_3 ">价格：{{column.subPrice}}元</h4>
							<h4 class="mt_3">章节：共{{column.totalChapter}}章 |
                <span class="c_red ml_5" v-if="column.isEnd ==1">已完结</span>
                <span class="c_green ml_5" v-else>连载中</span>
              </h4>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="d-box bt_d9 h_45">
			<a href="javascript:;" class="b-flex ta_c">购买全书</a>
			<span class="c_d9d9d9">|</span>
			<a href="javascript:;" class="lightBlue b-flex ta_c">立即阅读</a>
		</div>   
	</section>
   <div class="cloudPLR15 novelCatalogBox" style="margin-bottom: 0px;">
      <h3>内容简介</h3>
      <p class="" style="margin-bottom:0px">{{filterDes}}</p>
      <h4 class="ta_c h_30" v-if="column.longDescription.length > max_length" @click=showMoreDes>
        <i class="iconfont wf-arrowB c_lightgray"></i>
      </h4>
    </div>	
	<catalog :catalog="catalog"></catalog>
	<comment></comment>
</div>
</template>
<script type="text/javascript">
    import topHeader from   'COMPONENTS/TopHeader.vue'
    import catalog   from   'COMPONENTS/Catalog.vue'  
    import comment   from   'COMPONENTS/Comment.vue' 
    
    import infoServices from 'SERVICES/infoServices'
    import novelServices from 'SERVICES/novelServices'

    export default {
        name:'noveldetail',
        data:function(){
           return {
           	  columnId:0,
           	  column:{
                longDescription:""
              },
              max_length:116,
              catalog:{}
           }
        },
        mounted () {
          this.$nextTick(function(){
            //获取栏目ID
            this.columnId = (this.$route.query.columnId)
            console.log(this.columnId);
            this.getNovelDetail()
            this.getNovelCatalog()
          });
        },
        methods:{
            //获取小说详情
            getNovelDetail() {
              
              let self = this;
        	    let opions = {
        	        cid:this.columnId,
        	    	  ctype:4
        	    };
        	  
        	    opions.callback = (result)=>{        		
        		    self.column = result;              
        	    } 

       	      infoServices.getColumnDetail(opions); 
            },
            //更多简介
            showMoreDes() {
              this.max_length = this.column.longDescription.length;
            },
            getNovelCatalog() {
              
              let self = this;
              let opions = {
                  cid:this.columnId,
                  ctype:4,
                  paging:{
                    currentPageNum:1,
                    perPageCount:10
                  }
              };
            
              opions.callback = (result)=>{           
                self.catalog = result;              
              }

              novelServices.getNovelCatalog(opions); 
            }
        },
        computed:{           
            filterDes:function() {

              let longDescription = this.column.longDescription;
              let des = longDescription.substring(0,this.max_length)
            
              if(this.max_length < longDescription.length) des += '...'
              return des;
            },
            filterCataLog:function(){
              // return catalog.slice()
            }
        },
        components:{topHeader,catalog,comment}
   } 
</script>