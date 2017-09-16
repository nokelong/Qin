<template>
<div>
    <top-header :pageName="pageName" :isSearch='true'></top-header>
    <section class="loginForm mt_20">
        <form >
            <div class="switchLoginBox">
                    <!-- bAll_red为错误提示红色框 -->
                    <div class="LoginList d-box">
                        <i class="iconfont wf-iphone"></i>
                        <div class="b-flex pl_5">
                            <input type="text" placeholder="手机号/用户名/邮箱" class="txtBox">
                        </div>
                    </div>
                    <p class="errorLine hide"><i class="iconfont wf-error"></i>请输入账号</p>
                    <!-- bAll_red为错误提示红色框 -->
                    <div class="LoginList d-box mt_5">
                        <i class="iconfont wf-Password"></i>
                        <div class="b-flex pl_5">
                            <input type="password" placeholder="设置密码（8~16位，区分大小写）" class="txtBox" style="width:100%;">
                        </div>
                       <!--  两次密码一致时出现i-rightBlue -->
                        <i class="icon i-rightBlue mt_10"></i>
                    </div>
                    <div class="LoginList d-box mt_5">
                        <i class="iconfont wf-right"></i>
                        <div class="b-flex pl_5">
                            <input type="password" placeholder="确认密码（8~16位，区分大小写）" class="txtBox" style="width:100%;">
                        </div>
                        <i class="icon i-rightBlue mt_10"></i>
                    </div>
                    <p class="errorLine hide"><i class="iconfont wf-error"></i>输入密码不一致，请重新输入</p>
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
                        <a class="btn_login d-box btn btnBlue" href="javascript:;" @click="regist">注 册</a>
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

    export default {
        name: 'regist',
        components: {topHeader},
        data:()=> ({
            pageName:'注册'
        }),
        methods:{
            regist: function(){

            }
        }
    }
</script>