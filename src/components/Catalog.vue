<template>
	<section class="novelCatalogBox" >	
		<div class="novelCatalog bt_d9 ">
			<dl class="catalogListBox cloudPLR15">
				<dt class="titleBox">目录<span class="c_darkGray">（共380章）</span></dt>
				<dd>
					<div class="catalogList_first bm_d9 bt_d9">
						<a href="javascript:;" class="d-box">
							<i class="icon i-newTip mr_5 mt_3"></i>
							<span class="fz_14 b-flex lightBlue text-overflow">第256章 酒会背后的阴影酒会背后的阴影酒会背后的阴影酒会背后的阴影</span>
							<i class="iconfont wf-lock mr_5"></i>
							<span class="c_lightgray fz_12">02/12更新</span>
						</a>
					</div>
					<ul class="catalogList_other">
						<li>
							<a href="javascript:;" class="d-box">
    							<span class="b-flex">第1章 绯色之夜</span>
    							<i class="iconfont wf-lock hide"></i><!-- 黄色加锁图标，hide为隐藏状态 -->
							</a>
						</li>
						<li>
							<a href="javascript:;" class="d-box">
								<!-- c_gray为灰显状态 -->
								<span class="b-flex c_gray">第2章 成魔的办公室</span>
								<i class="iconfont wf-lock hide"></i>
							</a>
						</li>
						<li>
							<a href="javascript:;" class="d-box">
								<span class="b-flex">第3章 色戒</span>
								<i class="iconfont wf-lock  hide"></i>
							</a>
						</li>
						<li>
							<a href="javascript:;" class="d-box">
								<!-- c_gray为灰显状态 -->
								<span class="b-flex c_gray">第4章 追风筝的白衣女孩</span>
								<i class="iconfont wf-lock hide"></i>
							</a>
						</li>
						<li>
							<a href="javascript:;" class="d-box">
								<span class="b-flex">第5章 曼殊沙华</span>
								<i class="iconfont wf-lock hide"></i>
							</a>
						</li>
						<li>
							<a href="javascript:;" class="d-box">
								<span class="b-flex">第6章 天使爱上魔鬼记</span>
								<i class="iconfont wf-lock  hide"></i>
							</a>
						</li>
						<li>
							<a href="javascript:;" class="d-box">
								<span class="b-flex">第7章 恋空</span>
								<i class="iconfont wf-lock  hide"></i>
							</a>
						</li>
						<!-- c_lightgray为锁定章节的小说章节名称颜色 -->
						<li>
							<a href="javascript:;" class="d-box">
								<span class="b-flex c_lightgray">第8章 老千混江湖</span>
								<i class="iconfont wf-lock "></i>
							</a>
						</li>
						<li>
							<a href="javascript:;" class="d-box">
								<span class="b-flex c_lightgray">第9章 一萧一剑走天涯</span>
								<i class="iconfont wf-lock "></i>
							</a>
						</li>
						<li>
							<a href="javascript:;" class="d-box">
								<span class="b-flex c_lightgray">第10章 帝国的崛起</span>
								<i class="iconfont wf-lock "></i>
							</a>
						</li>
					</ul>
				</dd>
				<!-- 查看更多 -->
    			<div class="d-box viewMoreBox mt_15">
		    		<a class="ta_av bg_white" href="javascript:;">
		    			查看更多
		    			<i class="iconfont wf-arrowR fz_12 ml_3"></i>
		    		</a>
			    </div>
			</dl>
		</div>
	</section>
</template>
<script type="text/javascript">
   export default{
   	  name: 'Catalog',
   	  props:{
   	  	catalog:{
   	  		Object
   	  	},
   	  	isShowNew:{
	    	type: Boolean,
            default: false
	    }
   	  },
   	  data:()=>({
        items:[],
        limitNum:10
   	  })
   }
</script>