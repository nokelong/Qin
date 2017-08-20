<template>	
	<div>
		<top-header :pageName="pageName" :isSearch='true'></top-header>
		<section class="cloudmailBox">
			<div class="searchContainer d-box ta_avC bm_d9">
			  	<div class="searchFormBox b-flex ta_avC d-box">
				    <div class="b-flex ta_avC">
				    	<i class="iconfont wf-search fz_18"></i>
				      	<input  class="b-flex c_darkblack" type="txt" name="" value="" v-model="keyword">               
				      	<div class="searchClose">
				      		<i class="iconfont wf-Close fz_18 hide"></i>
				      	</div>
				    </div>   
			  	</div>
			  	<div class="d-box editModeSwicth pl_10">
			    	<a href="javascript:;" id="btnStartEdit" class="lightBlue" @click="goSearch">搜索</a>
			  	</div>
			  	<div class="d-box editModeSwicth pl_10 dHide">
			    	<a href="javascript:;" id="btnCancelEdit" class="lightBlue" action="30129" thing="69">取消</a>
			  	</div>
			</div>
			<div class="searchCenter">
				  <hot-words :items="hotwords" v-if="initState == true" @search="getResultByKeys">
			    </hot-words>
          <search-result :results="results" v-else @search="getResultByKeys">
          </search-result>
			</div>
		</section>
    </div>
</template>
<script>
    
    import topHeader     from  'COMPONENTS/TopHeader'
    import hotWords      from  './_components/HotWords'    
    import searchResult  from  './_components/SearchResult' 
    import util          from  'UTILS/utils'
    import Tips          from  'UTILS/tips'
    import novelServices from  'SERVICES/novelServices'

    export default{
  	    name:'search',  	   
  	    components: {hotWords, topHeader,searchResult},
  	    data() {
  	   	    return {
                pageName: '搜索',
                initState: true,
                results:[],
                keyword: '',
                hotwords:[
                  {name:'平凡的世界'},
                  {name:'世界的轨迹'},
                  {name:'战争与和平'},
                  {name:'丑陋的中国人'},
                  {name:'都市生活'}
                ]
  	   	    }
  	    },
  	    mounted() {
  	    },
  	    methods: {
          /**
           * [getResultByKeys 根据关键词查询]
           * @param  {[type]} keys [关键词]
           * @return {[type]}      [description]
           */
          getResultByKeys: function( keys) {

            this.keyword = keys
            keys = util.htmlEncode(keys)
              // this.initState = false;
            let options = {
                keys: keys
            };
            options.callback = ((results) =>{
                this.initState = false;
                this.results = results
            }).bind(this);
              
            novelServices.getResultByKeys(options);          
          },
          goSearch: function() {

            if(this.keyword.length >0 ) {
              this.getResultByKeys(this.keyword)
            } else {
              Tips.showTips({          
                msg:'请输入正确的内容',
                type:'warn'
              })
            }
          }
  	    }
    }
</script>