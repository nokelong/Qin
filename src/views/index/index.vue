<template>
   <div>
	<top-header :isHome="true" :isLogin="isLogin"></top-header>
	<Carousel :position="position"></Carousel>
	<TabMenu></TabMenu>
	<!-- 重磅推荐 -->
	<Layout :novelColumn="filterRecoColumn" :showMore="false"
            @changeColumn="shuffleRecoColumn()">		
		<span class="b-flex fz_14 lightBlack" slot="novletype">重磅推荐</span>		
	</Layout>
	<!-- 男生小说 -->
	<Layout :novelColumn="filterBoysColumn" @changeColumn="shuffleBoysColumn()">	
		<span class="b-flex fz_14 lightBlack" slot="novletype">男性小说</span>		
	</Layout>
	<!-- 女生小说 -->
	<Layout :novelColumn="filterGirlsColumn" @changeColumn="shuffleGirlsColumn()">		
		<span class="b-flex fz_14 lightBlack" slot="novletype">女性小说</span>		
	</Layout>
	<!-- 最新资讯 -->
	<!-- <Newinfo :wordlists="filterNewsColumn"></Newinfo> -->
   </div>   	
</template>
<script>
  import TopHeader   from   'COMPONENTS/TopHeader.vue'  
  import Carousel    from   './_components/Carousel.vue'
  import Layout      from   './_components/Layout.vue'
  import TabMenu     from   './_components/TabMenu.vue'  
  import Newinfo     from   './_components/Newinfo.vue' 

  import novelServices from 'SERVICES/novelServices' 
  import infoServices  from 'SERVICES/infoServices'
  import authServices  from  'SERVICES/authServices'
  import utils         from 'UTILS/utils'
  import Tips          from 'UTILS/tips'
  import _             from 'lodash'

  export default{
    name:'IndexRouter',
    components:{TopHeader, Carousel,Layout,TabMenu,Newinfo},
    data :()=>({
      limitNum:3,
      startIndex:0,
    	recommendColumn:[],        
    	boysColumn:[],
    	limitColumn:[],
    	girlsColumn:[],
    	newsColumn:[],
      position:[],
      isLogin: false
    }),
    mounted (){
        this.$nextTick(function(){
            this.checkLogin();
            this.getRecommendColumn()
            this.getBoysColumn()
            this.getGirlsColumn()
            // this.getNewInfoColumn()
            this.getPositionContent()
        })
    },
    computed:{
        filterRecoColumn: function() {         
            return [this.recommendColumn.slice(this.startIndex,this.limitNum)]
        },
        filterNewsColumn: function() {
            return this.newsColumn.slice(0,5)
        },
        filterBoysColumn: function() {           
            return this.boysColumn.slice(this.startIndex,2)
        },
        filterGirlsColumn: function() {           
            return this.girlsColumn.slice(this.startIndex,2)
        }
    },
    methods:{ 
        /**
         * [getRecommendColumn 获取重磅推荐小说]
         * @return {[type]} [description]
         */   	
        getRecommendColumn(){
        	
          let opions = {};
        	
          opions.callback = ((results)=>{
              if(results.resultCode == 0) {
                  let list = []
                  if(results.body && results.body.list) {
                      list = results.body.list;
                      this.recommendColumn = _.shuffle(list).slice(0,9);
                  }
              } else {
                  Tips.showTips({
                      type: 'warn',
                      msg: results.description
                  })
              }               
        	}).bind(this);
       	  novelServices.getRecommendColumn(opions);       	   
        },
        /**
         * [getBoysColumn 获取男生小说]
         * @return {[type]} [description]
         */
        getBoysColumn(){
          
        	let opions = {
              recId: 101
          };
        	
        	opions.callback = ((results)=>{             
              if(results.resultCode == 0) {
                  let list = []

                  if(results.body && results.body.list) {
                      list = results.body.list;
                      this.boysColumn = utils.rebuildData(list,3) 
                  }
              } else {
                  Tips.showTips({
                      type: 'warn',
                      msg: results.description
                  })
              }       	 
                     	
        	}).bind(this);
        	novelServices.getColumns(opions);
        },
        /**
         * [getGirlsColumn 获取女生小说]
         * @return {[type]} [description]
         */
        getGirlsColumn(){
        
        	let opions = {
              recId: 101
          };
        	
        	opions.callback = ((results)=>{ 
              if(results.resultCode == 0) {
                  let list = []

                  if(results.body && results.body.list) {
                      list = results.body.list;
                      this.girlsColumn = utils.rebuildData(list,3) 
                  }
              } else {
                  Tips.showTips({
                      type: 'warn',
                      msg: results.description
                  })
              }
        	}).bind(this);
        	novelServices.getColumns(opions);
        },
        /**
         * [getNewInfoColumn 获取新闻资讯]
         * @return {[type]} [description]
         */
        getNewInfoColumn(){ 

          let opions = {};
                  
          opions.callback = ((result)=>{  
            this.newsColumn = result;
          }).bind(this)
          infoServices.getNewInfoColumn(opions);         
        },
        /**
         * [getPositionContent 获取广告]
         * @return {[type]} [description]
         */
        getPositionContent() {
      
            let opions = {};
              
            opions.callback = ((results)=>{
                
                if(results.resultCode == 0) {
                    let list = []
                    if(results.body && results.body.list) {
                        this.position = results.body.list;
                    }
                } else {
                    Tips.showTips({
                        type: 'warn',
                        msg: result.description
                    });
                }
                       
            }).bind(this)
            infoServices.getPositionContent(opions);
        },
        checkLogin() {
            let opions = {};
            
            opions.callback = ((result) => {
                if(result.resultCode == 0) {
                    this.isLogin = true;
                }
            }).bind(this);
            authServices.checkLogin(opions);
        },
        shuffleRecoColumn () {  //重磅推荐换一换
            this.recommendColumn = _.shuffle(this.recommendColumn)
        },
        shuffleBoysColumn () {  //男生小说换一换
            this.boysColumn = _.shuffle(this.boysColumn)
        },
        shuffleGirlsColumn () {  //女生小说换一换
            this.girlsColumn = _.shuffle(this.girlsColumn)
        }
    }
  }
</script>
<style>
</style>
