<template>	
	<li @click="show">
    	<a href="javascript:;" class="d-box">
    		<!-- c_gray为灰显状态 -->
    		<div class="b-flex c_gray">第{{item.orderId}}章 {{item.title}}</div>
    		<i class="iconfont wf-lock" v-if="item.isLocked==0"></i>
    	</a>
    </li>
</template>
<script type="text/javascript">
  
   export default{
   	  name: 'Catalog',
   	  props:{
   	  	item:{
   	  		type:Object,
   	  		required:true
   	  	}
   	  },
      methods:{
        show() {          
          // 显示
          this.$vux.alert.show({
            title: '攻城狮正在抓紧开发中',
            content: '敬请期待',
            onShow () {
              console.log('Plugin: I\'m showing')
            },
            onHide () {
              console.log('Plugin: I\'m hiding')
            }
          })
        }
      }
   }
</script>