<template>
	<div>
	    <top-header :pageName="pageName" :isSearch='true'></top-header>
	    <section class="PersonalCenter">
			<div class="PersonalCenter_top d-box bm_f0 cloudPLR15 ">
				<div class="userImg"><img src="../../assets/images/userC.png" alt=""></div>
				<span class="phoneNum b-flex c_darkGray">13699885566</span>				
			</div>
			<div class="PersonalList d-box bm_f0 cloudPLR15 h_45">
				<div class="mr_5"><i class="iconfont wf-flame c_red"></i></div>
				<span class="phoneNum b-flex c_darkGray">运营活动推广，如限时免费活动~</span>
			</div>
			<div class="bm_f0">
				<ul class="PersonalCenter_area lightBlack">
				<li class="d-box h_45 bm_d9">
					<a href="javascript:;" class=" d-box">
						<aside class="mr_10 top_columnNameImg b-flex d-box">
							<span class="wf-novelBox"><i class="iconfont wf-novel" style="margin-top: -22px;"></i></span>
							<span class="b-flex">我的小说</span>
						</aside>
    					<div class="bt_Subscribe">
							<i class="iconfont wf-enter"></i>
						</div>
					</a>
				</li>
				<li class="d-box h_45 bm_d9">
					<a href="javascript:;" class="d-box">
						<aside class="mr_10 top_columnNameImg b-flex d-box">
							<span class="wf-infBox"><i class="iconfont wf-inf" style="margin-top: 0px;">
								
							</style>></i></span>
							<span class="b-flex">我的资讯</span>
						</aside>
    					<div class="bt_Subscribe">
							<i class="iconfont wf-enter"></i>
						</div>
					</a>
				</li>
				<li class="d-box h_45 bm_d9">
					<a href="javascript:;" class="d-box">
						<aside class="mr_10 top_columnNameImg b-flex d-box">
							<span class="wf-infBox bg_pink"><i class="iconfont wf-MyMonth" style="margin-top: -22px;"></i></span>
							<span class="b-flex">我的精品包月</span>
						</aside>
    					<div class="bt_Subscribe">
							<i class="iconfont wf-enter"></i>
						</div>
					</a>
				</li>
				<li class="d-box h_45 bm_d9 bm_none">
					<a href="javascript:;" class="d-box">
						<aside class="mr_10 top_columnNameImg b-flex d-box">
							<span class="wf-PasswordBox"><i class="iconfont wf-Password" style="margin-top: -22px;"></i></span>
							<span class="b-flex">重置密码</span>
						</aside>
    					<div class="bt_Subscribe">
							<i class="iconfont wf-enter"></i>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</section>
	<section>
    	<div class="ta_c SignOut">
    	    <a href="javascript:;" class="c_red">退出登录</a>
    	</div>
    </section>
	</div>
</template>
<script type="text/javascript">
    import topHeader from   'COMPONENTS/TopHeader.vue'

    export default {
        name: 'usercenter',
        components: {topHeader},
        data: ()=>({
        	pageName: '用户中心'
        })
    }
</script>