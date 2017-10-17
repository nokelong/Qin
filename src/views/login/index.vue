<template>
<div>	
    <top-header :pageName="pageName" :showSearch="false"></top-header>
    <section class="loginForm mt_10">
	    <form >
	        <ul class="switchLoginBox">
	            <!--账号登录-->
	            <li class="">	            
	                <div class="LoginList d-box">
	                    <i class="iconfont wf-user"></i>
	                    <div class="b-flex pl_5">
	                        <input type="text" placeholder="手机号/用户名/邮箱" class="txtBox" v-model='username' @input="unameEFlag=false">
	                    </div>
	                </div>
	                <p class="errorLine" v-if="unameEFlag"><i class="iconfont wf-error"></i>请输入账号</p>
	                <div class="LoginList d-box mt_5">
	                    <i class="iconfont wf-Password"></i>
	                    <div class="b-flex pl_5">
	                        <input type="password" placeholder="密码（6~12位，区分大小写）" class="txtBox" style="width:100%;" v-model="password" @input="handlerPassInput">
	                    </div>
	                </div>
	                <p class="errorLine" v-if="upassEFlag"><i class="iconfont wf-error"></i>{{errorMsg}}</p>
	                
	                <div class="d-box mt_5 hide">
	                    <div class="LoginList b-flex d-box">
	                        <i class="iconfont wf-iphone"></i>
	                        <div class="b-flex pl_5">
	                            <input type="password" placeholder="验证码" class="txtBox" style="width:100%;" v-model="vcode">
	                        </div>
	                    </div>
	                    <div class="VCode b-flex bg_blue">
	                        AinH
	                    </div>
	                </div>	             
	                <div class="mt_15 smailUl">
	                    <a class="btn_login d-box btn btnBlue" href="javascript:;" @click="goLogin">登 录</a>
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
    import topHeader    from   'COMPONENTS/TopHeader.vue'
    import authServices from 'SERVICES/authServices'
    import Tips         from  'UTILS/tips'
    import  md5         from  'js-md5'

    export default {
    	name:'login',
    	components:{topHeader},
        data: () => ({
            pageName: '登录',
            username: '',
            password: '',
            vcode: '',
            unameEFlag: false,
            upassEFlag: false,
            errorMsg: '请输入密码'
        }),
        methods:{
            goRegist: function() {
            	this.$router.push({name:'regist'});
            },
            goLogin: function() {
                //check
                if(!this.username) {
                    this.unameEFlag = true;
                    return
                }

                if(!this.password) {
                	this.upassEFlag = true;
                	return
                }
                this.login();
            },
            login: function() {
               
                let options = {
                	data: {
                	    username: this.username,
                	    password: md5(this.password)
                	}
                }
                
                options.callback = ((result) => {
                    var resultCode = result.resultCode;
                    if(resultCode == 0) {
                        this.$root.userData = result.body.username // “写 session”
                        this.$router.replace({name: 'usercenter'}); //进入用户中心
                    } else {
                        // var msg = '登录失败';
                        // msg = result.description;
                        Tips.showTips({
                            type: 'warn',
                            msg: result.description
                        });
                    }
                    
                }).bind(this);
                authServices.login(options);
            },
            handlerPassInput: function() {

            	let length = this.password.length;
            	// console.log(length)
                if(length > 16) {
                	this.upassEFlag = true;
                	this.errorMsg = '请输入正确的密码';
                }else {
                	this.upassEFlag = false;
                }
            }
        }
    }
</script>