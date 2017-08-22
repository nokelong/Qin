<template>
<div style="background:#f4f5f7;">
   <top-header :pageName="column.columnName"></top-header>
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
			<a href="javascript:;" class="b-flex ta_c" @click="goBuy">购买全书</a>
			<span class="c_d9d9d9">|</span>
			<a href="javascript:;" class="lightBlue b-flex ta_c" @click="goRead">立即阅读</a>
		</div>   
	</section>
  <div class="cloudPLR15 novelCatalogBox" style="margin-bottom: 0px;">
      <h3>内容简介</h3>
      <p class="" style="margin-bottom:0px">{{filterDes}}</p>
      <h4 class="ta_c h_30" v-if="column.longDescription.length > max_length" @click=showMoreDes>
        <i class="iconfont wf-arrowB c_lightgray"></i>
      </h4>
  </div>
  <section class="novelCatalogBox">  
    <div class="novelCatalog bt_d9 ">
      <dl class="catalogListBox cloudPLR15">
        <dt class="titleBox">目录<span class="c_darkGray">（共{{novelcatalog.paging.totalCount}}章）</span></dt>
        <dd>
          <div class="catalogList_first bm_d9 bt_d9">
            <a href="javascript:;" class="d-box">
              <i class="icon i-newTip mr_5 mt_3"></i>
              <span class="fz_14 b-flex lightBlue text-overflow">第{{novelcatalog.newNovelChapter.chapterOrder}}章 {{novelcatalog.newNovelChapter.title}}</span>
              <i class="iconfont wf-lock mr_5"></i>
              <span class="c_lightgray fz_12">{{filterMdyDate}}更新</span>
            </a>
          </div>
          <ul class="catalogList_other">
	          <catalog v-for="(item,index) in filterCataLog" :item="item" :key="index"></catalog>
          </ul>
        </dd>
        <!-- 查看更多 -->
        <div class="d-box viewMoreBox mt_15" v-if="novelcatalog.items.length >10">
          <a class="ta_av bg_white" href="javascript:;" @click="goNovelCatalog">
            查看更多
            <i class="iconfont wf-arrowR fz_12 ml_3"></i>
          </a>
        </div>
      </dl>
    </div>
  </section>
  <section class="CommentArea bg_white">
    <div class="CommentBox c_titleblack">
      <div class="CommentBoxTop bm_d9 d-box">
        <h3 class="b-flex">评论</h3>
        <h4 class="lightBlue"><i class="iconfont wf-Comment fz_16 lightBlue mr_5"></i>发表评论</h4>
      </div>
      <div class="CommentList" v-if="comments.length > 0">
        <ul class="cloudPLR15 mb_15">
	        <comment v-for="(comment,index) in filterComments" :comment="comment" :key="index"></comment>
        </ul>
        <div class="d-box viewMoreBox mt_15" v-if="comments.length > 3">
            <a class="ta_av bg_white" href="javascript:;">
              更多评论
              <i class="iconfont wf-arrowR fz_12 ml_3"></i>
            </a>
          </div>
      </div>
      <div class="CommentNone ta_c" v-else>
        <i class="i-CommentNone icon"></i>
        <p class="fz_14 c_darkGray">暂无评论，快来抢沙发~</p>
      </div>
    </div>
  </section>
</div>
</template>
<script type="text/javascript">   
    import topHeader from   'COMPONENTS/TopHeader.vue'
    import catalog   from   'COMPONENTS/Catalog.vue'  
    import comment   from   'COMPONENTS/Comment.vue'    
    import novelServices from 'SERVICES/novelServices'
    import Tips       from 'UTILS/tips'
    
    export default {
        name:'noveldetail',
        components:{topHeader,catalog,comment},
        data:function(){
           return {
              pageName:'小说详情',
           	  columnId:0,
              type: 0,
           	  column:{
                longDescription:""
              },
              max_length:116,
              novelcatalog:{
                newNovelChapter:{},
                items:[],
                paging:{}
              },
              comments:[]
           }
        },
        mounted () {
          this.$nextTick(function(){
            //获取栏目ID
            this.columnId = (this.$route.query.columnId)
            this.type     =  this.$route.query.type           
            this.getNovelDetail()
            this.getNovelCatalog()
          });
        },
        methods:{
            /**
             * [getNovelDetail 获取小说详情]
             * @return {[type]} [description]
             */
            getNovelDetail() {
               
        	      let opions = {
        	          cid:this.columnId,
        	    	    type:this.type
        	      };
        	  
        	      opions.callback = ((result)=>{
        		        this.column = result;              
        	      }).bind(this)
       	        novelServices.getNovelDetail(opions); 
            },
            /**
             * [getNovelCatalog 获取目录]
             * @return {[type]} [description]
             */
            getNovelCatalog() {
              
                let self = this;
                let opions = {
                    cid: this.columnId,
                    type: this.type,
                    paging: {
                      currentPageNum:1,
                      perPageCount:10
                    }
                };
            
                opions.callback = (result)=>{ 
                    let {items,newNovelChapter,paging} = result;
                    // console.log(paging)
                    self.novelcatalog.items = items;
                    self.novelcatalog.newNovelChapter = newNovelChapter;
                    self.novelcatalog.paging = paging;              
                }
                novelServices.getNovelCatalog(opions); 
            },
            /**
             * [showMoreDes 更多简介]
             * @return {[type]} [description]
             */
            showMoreDes() {
                this.max_length = this.column.longDescription.length;
            },
            /**
             * [goNovelCatalog 更多目录]
             * @return {[type]} [description]
             */
            goNovelCatalog() { 
                // debugger        
                this.$router.push({name:'novelcatalog',query:{columnId:this.columnId}})
            },
            goRead() {
                this.$router.push({name: 'reader',query: {columnId:this.columnId}});
            },
            goBuy() {
                Tips.showTips({
                  msg:'攻城狮疯狂开发中'
                })
            } 
        },
        computed:{           
            filterDes: function() {
              let longDescription = this.column.longDescription;
              let des = longDescription.substring(0,this.max_length)
            
              if(this.max_length < longDescription.length) des += '...'
              return des;
            },
            filterMdyDate: function() {
              let mdyDate = this.novelcatalog.newNovelChapter.modifyDate || ''
              let today = new Date()
              
              if(today.toDateString() === new Date(mdyDate.replace(/-/g, '/')).toDateString()) {  //当天，显示时间
                return mdyDate.split(' ')[1]; 
              }
              return mdyDate.split(' ')[0]
            },
            filterCataLog: function() {
              return this.novelcatalog.items.slice(0,10)
            },
            filterComments: function() {
              return this.comments.slice(0,3);
            }
        }
   } 
</script>