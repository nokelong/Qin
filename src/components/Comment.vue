<template>
  <li>
	<div class="d-box">
		<h3 class="b-flex fz_12">{{comment.nickName}}</h3>
		<h4>{{filterDate(comment.createDate)}}</h4>
	</div>
	<p>{{comment.content}}</p>
  </li>	
</template>
<script type="text/javascript">
    
    import utils from 'UTILS/utils'

    export default{
        name: 'Comment',
   	    props: {
   	        comment: {
   	            type:Object
   	        }
   	    },
   	    methods: {
   	        filterDate: function(date) {
   	        	return utils.formatDate('yyyy-MM-dd',new Date(date));
   	        }
   	    }
   }
</script>