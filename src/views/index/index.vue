<template>
   <div>
	<top-header></top-header>
	<Carousel></Carousel>
	<TabMenu></TabMenu>
	<!-- 重磅推荐 -->
	<Layout :novelColumn="filterRecoColumn" :showMore="false">		
		<span class="b-flex fz_14 lightBlack" slot="novletype">重磅推荐</span>		
	</Layout>
	<!-- 男生小说 -->
	<Layout :novelColumn="boysColumn">		
		<span class="b-flex fz_14 lightBlack" slot="novletype">男生小说</span>		
	</Layout>
	<!-- 女生小说 -->
	<Layout :novelColumn="girlsColumn">		
		<span class="b-flex fz_14 lightBlack" slot="novletype">女生小说</span>		
	</Layout>
	<!-- 最新资讯 -->
	<Newinfo :wordlists="filterNewsColumn"></Newinfo>
   </div>   	
</template>
<script>
  import TopHeader   from   'COMPONENTS/TopHeader.vue'  
  import Carousel    from   './_components/Carousel.vue'
  import Layout      from   './_components/Layout.vue'
  import TabMenu     from   './_components/TabMenu.vue'  
  import Newinfo     from   './_components/Newinfo.vue' 

  import novelServices from 'SERVICES/novelServices' 
  import infoServices from 'SERVICES/infoServices'

  export default{
    name:'IndexRouter',
    components:{TopHeader, Carousel,Layout,TabMenu,Newinfo},
    data :()=>({
        limitNum:3,
    	recommendColumn:[],        
    	boysColumn:[],
    	limitColumn:[],
    	girlsColumn:[],
    	newsColumn:[]
    }),
    mounted (){
        this.$nextTick(function(){
            this.getRecommendColumn();  
            this.getBoysColumn();
            this.getGirlsColumn();
            this.getNewInfoColumn();
        })
    },
    computed:{
        filterRecoColumn:function(){         
            return [this.recommendColumn.slice(0,this.limitNum)]
        },
        filterNewsColumn:function(){
            return this.newsColumn.slice(0,5)
        }
    },
    methods:{    	
        getRecommendColumn(){
        	let self = this;
        	let opions = {};
        	
        	opions.callback = (result)=>{        		
        		self.recommendColumn = result;              
        	} 
       	    novelServices.getRecommendColumn(opions);       	   
        },
        getBoysColumn(){
            let self = this;
        	let opions = {};
        	
        	opions.callback = (result)=>{   
        	    // debugger     		
        		self.boysColumn = result;
        	}
        	novelServices.getBoysColumn(opions);
        },
        getGirlsColumn(){
            let self = this;
        	let opions = {};
        	
        	opions.callback = (result)=>{   
        	    // debugger     		
        		self.girlsColumn = result;
        	}
        	novelServices.getGirlsColumn(opions);
        },
        getNewInfoColumn(){
            let self = this;
            let opions = {};
            
            opions.callback = (result)=>{   
                // debugger             
                self.newsColumn = result;
            }
            infoServices.getNewInfoColumn(opions);
        }
    }
  }
</script>
<style>
</style>
