<template>
<div>
    <top-header :pageName="pageName" :isSearch='true'></top-header>
    <section class="loginForm mt_20">
        <form >
            <div class="switchLoginBox">                   
                    <div class="LoginList d-box">
                        <i class="iconfont wf-iphone"></i>
                        <div class="b-flex pl_5">
                            <input type="text" placeholder="手机号/用户名/邮箱" class="txtBox" v-model="username">
                        </div>
                    </div>
                    <p class="errorLine" v-if="unameEFlag"><i class="iconfont wf-error"></i>请输入账号</p>                   
                    <div class="LoginList d-box mt_5">
                        <i class="iconfont wf-Password"></i>
                        <div class="b-flex pl_5">
                            <input type="password" placeholder="设置密码（8~16位，区分大小写）" class="txtBox" style="width:100%;" v-model="password">
                        </div>                     
                        <i class="icon i-rightBlue mt_10"></i>
                    </div>
                    <div class="LoginList d-box mt_5">
                        <i class="iconfont wf-right"></i>
                        <div class="b-flex pl_5">
                            <input type="password" placeholder="确认密码（8~16位，区分大小写）" class="txtBox" style="width:100%;" v-model="confirmPass">
                        </div>
                        <i class="icon i-rightBlue mt_10"></i>
                    </div>
                    <p class="errorLine" v-if="upassEFlag"><i class="iconfont wf-error"></i>{{passMsg}}</p>
                    <div class="d-box mt_5 hide">
                        <div class="LoginList b-flex d-box">
                            <i class="iconfont wf-envelope"></i>
                            <div class="b-flex pl_5">
                                <input type="password" placeholder="短信验证码" class="txtBox" style="width:100%;">
                            </div>
                        </div>
                        <div class="VCode b-flex bg_blue">
                           获取验证码
                        </div>
                    </div>
                    <div class="mt_15 smailUl">
                        <a class="btn_login d-box btn btnBlue" href="javascript:;" @click="goRegist">注 册</a>
                        <h3 class="mt_10">
                            <span class="b-flex ta_l">
                            <i class="iconfont wf-selected lightBlue mr_5"></i>
                            我已阅读并同意服务条款 用户协议>>
                            </span>
                        </h3>
                    </div>
                </div>
        </form>
    </section>
</div>
</template>
<script >
    import topHeader from   'COMPONENTS/TopHeader.vue'
    import authServices from 'SERVICES/authServices'
    import Tips      from   'UTILS/tips'
    
    export default {
        name: 'regist',
        components: {topHeader},
        data:()=> ({
            pageName: '注册',
            username: '',
            password: '',
            confirmPass: '',
            unameEFlag: false,
            upassEFlag: false,
            passMsg: '输入密码不一致，请重新输入'
        }),
        methods:{
            goRegist: function() {
                //check
                if(!this.username) {
                    this.unameEFlag = true;
                    return;
                }
                if(!this.password) {
                    this.upassEFlag = true;
                    this.passMsg = '请输入密码'
                    return
                }

                if(this.password != this.confirmPass) {
                    this.upassEFlag = true;
                }

                this.regist();
            },
            regist: function(){

                let options = {
                    data: {
                        username: this.username,
                        password: this.password,
                        confirmPass: this.confirmPass
                    }
                };
                options.callback = ((result)=>{
                    if(result.resultCode == 0) {
                        Tips.showTips({
                            type: 'success',
                            msg: '注册成功，3秒后自动跳转...'
                        })
                        setTimeout(()=>{
                            this.$router.push({name: 'index'})
                        },3000)
                    } else {
                        Tips.showTips({
                            type: 'warn',
                            msg: result.description
                        });
                    }
                }).bind(this);
                authServices.regist(options);
            }
        }
    }
</script>