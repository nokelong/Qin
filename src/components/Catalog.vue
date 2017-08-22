<template>	
	<li @click="goReader(item.orderId,item.columnId)">
    	<a href="javascript:;" class="d-box">
    		<!-- c_gray为灰显状态 -->
    		<div class="b-flex c_gray">第{{item.orderId}}章 {{item.title}}</div>
    		<i class="iconfont wf-lock" v-if="item.isLocked==0"></i>
    	</a>
    </li>
</template>
<script type="text/javascript">

    import Tips       from 'UTILS/tips'
  
    export default{
   	    name: 'Catalog',
   	    props:{
   	  	  item:{
   	  		    type:Object,
   	  		    required:true
   	  	  }
   	    },
        methods:{
          goReader(oid, cid) {
              this.$router.push({name: 'reader',query: {columnId:cid,oid:oid}});
          }
        }
    }
</script>