<template>
<div>	
    <top-header :pageName="pageName" ></top-header>
    <section class="loginForm mt_10">
	    <form >
	        <ul class="switchLoginBox">
	            <!--账号登录-->
	            <li class="">
	                <!-- bAll_red为错误提示红色框 -->
	                <div class="LoginList d-box">
	                    <i class="iconfont wf-user"></i>
	                    <div class="b-flex pl_5">
	                        <input type="text" placeholder="/手机号/用户名/邮箱" class="txtBox">
	                    </div>
	                    <label class="mailType c_darkGray fz_12">@139.com</label>
	                </div>
	                <p class="errorLine"><i class="iconfont wf-error"></i>请输入账号</p>
	                <!-- bAll_red为错误提示红色框 -->
	                <div class="LoginList d-box mt_5">
	                    <i class="iconfont wf-Password"></i>
	                    <div class="b-flex pl_5">
	                        <input type="password" placeholder="密码（8~16位，区分大小写）" class="txtBox" style="width:100%;">
	                    </div>
	                </div>
	                <p class="errorLine"><i class="iconfont wf-error"></i>请输入密码</p>
	                <p class="errorLine"><i class="iconfont wf-error"></i>账号或密码异常</p>
	                <div class="d-box mt_5 hide">
	                    <div class="LoginList b-flex d-box">
	                        <i class="iconfont wf-iphone"></i>
	                        <div class="b-flex pl_5">
	                            <input type="password" placeholder="验证码" class="txtBox" style="width:100%;">
	                        </div>
	                    </div>
	                    <div class="VCode b-flex bg_blue">
	                        AinH
	                    </div>
	                </div>	             
	                <div class="mt_15 smailUl">
	                    <a class="btn_login d-box btn btnBlue" href="javascript:;">登 录</a>
	                    <h3 class="mt_10 ta_c" @click="goRegist">
	                        <span>注册新账号</span>
	                    </h3>
	                </div>
	            </li>
	        </ul>
	    </form>
    </section>
</div>
</template>
<script>
    import topHeader from   'COMPONENTS/TopHeader.vue'

    export default {
    	name:'login',
    	components:{topHeader},
        data: () => ({
            pageName : '登录'
        }),
        methods:{
            goRegist: function(){
            	this.$router.push({name:'regist'});
            }
        }
    }
</script>