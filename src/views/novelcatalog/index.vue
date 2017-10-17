<template>
<div style="background:#f4f5f7;">
    <top-header :pageName="pageName" :showSearch="false"></top-header>
    <section class="novelRecom_Warp cloudPLR15">  
        <dl class="catalogListBox  pt_10">
    		<dt class="d-box bm_d9">
    			<span class="c_red">共{{novelcatalog.paging.totalCount}}章</span>
                <span class="b-flex fz_16 ta_c lightBlack">{{novelcatalog.newNovelChapter.columnName}}</span>
    		    <a href="javascript:;" class="lightBlue ta_r">倒序</a>
    		</dt>
    		<dd>
    			<ul class="catalogList_other">
    				<catalog v-for="(item,index) in novelcatalog.items" :item="item" :key="index"></catalog>
    			</ul>
    		</dd>
    	</dl>         			
	</section>
</div>
</template>
<script type="text/javascript">
    import topHeader from   'COMPONENTS/TopHeader.vue'
    import catalog   from   'COMPONENTS/Catalog.vue'  
    import novelServices from 'SERVICES/novelServices'
    import Tips      from     'UTILS/tips' 

    export default {
    	name:'novelcatalog',    	
    	components:{topHeader,catalog},
    	data(){
    		return {
    			pageName:'小说目录',
    			novelcatalog:{
            newNovelChapter:{},
            items:[],
            paging:{}
          }
    		}
    	},
    	mounted() {
    		this.$nextTick(function(){
    			this.getNovelCatalog()
    		})
    	},
    	methods:{
    		 /**
             * [getNovelCatalog 获取小说目录]
             * @return {[type]} [description]
             */
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
              // 显示loading
              Tips.showLoading()
              opions.callback = (results)=>{
                  if(results.resultCode == 0) {
                      
                      if(results.body) {
                          //结构result中的对象             
                          let {items,newNovelChapter,paging} = results.body; 
                          self.novelcatalog.items = items;
                          self.novelcatalog.newNovelChapter = newNovelChapter;
                          self.novelcatalog.paging = paging;   
                          // 隐藏loading
                          Tips.hideLoading();
                      }
                  } else {
                      Tips.showTips({
                          type: 'warn',
                          msg: results.description
                      })
                  }
                
              }
              novelServices.getNovelCatalog(opions); 
            }
    	}
    }
</script>