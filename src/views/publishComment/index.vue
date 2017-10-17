<template>
	<div>
	    <top-header :pageName="pageName" :showSearch="false"></top-header>
    	<section class="cloudmailBox PublishComment">
			<div class=" cloudPall15">
				<div class="CommentInput">
					<textarea placeholder="快来吐糟一下吧~~" v-model="content"></textarea>
				</div>
				<div class="CommentBtn d-box mt_10">
					<h3 class="b-flex lightBlue mt_5">
						可输入{{filterCount}}字
					</h3>
					<div class="btn btnBlue ta_c" @click="postComment">
						<span>发送</span>
					</div>
				</div>
			</div>
			<div class="CommentBox c_titleblack">
				<p class="CommentBoxTop bm_d9">所有评论（共<span>{{comments.length}}</span>条）</p>
				<div class="CommentList">
					<ul class="cloudPLR15 mb_15">
						<comment v-for="(com, index) in comments" :comment="com" :key="index"> 
						</comment>
					</ul>
					<div class="NoMore ta_c fz_12 c_darkGray">没有更多了~</div>
				</div>
			</div>
    	</section>
    </div>
</template>
<script >
    import topHeader from 'COMPONENTS/TopHeader'
    import comment   from 'COMPONENTS/Comment'
    import infoServices  from 'SERVICES/infoServices'
    import authService   from 'SERVICES/authServices'
    import Tips          from 'UTILS/tips'

    export default {
        name: 'publishComment',       
        components:{topHeader, comment},
        data: ()=>({
            pageName: '评论',
            columnId: '',
            content : '',
            comments: []
        }),
        mounted() {
            this.$nextTick(function() {
                this.columnId = this.$route.query.columnId;
                this.getComments();
            });
        },
        methods: {
            /**
             * [getComments 获取小说评论]
             * @return {[type]} [description]
             */
            getComments() {

                var options = {
                    data: {
                        dependId: this.columnId
                    }
                };

                options.callback = ((results)=> {
                    if(results.resultCode == 0) {                    	
                        this.comments = results.body.list;
                    } else {
                        Tips.showTips({
                            type: 'warn',
                            msg: results.description
                        });
                    }
                }).bind(this);
                infoServices.getComments(options);
            },
            postComment() {
                
                let options = {
                	data: {
                		content: this.content,
                		dependId: this.columnId
                	}
                };
                options.callback = (results) =>{
                    if(results.resultCode == 0) {
                        console.log('发表成功');
                    } else {
                    	Tips.showTips({
                            type: 'warn',
                            msg: results.description
                        });
                    }
                };
                //验证是否登录
                authService.checkLogin({  
                	callback: (results)=>{                		
                		if(results.resultCode == 0) {  //已登录
	                        infoServices.postComment(options);
	                    } else {
	                        this.$router.push({name: 'login',params: {columnId: this.columnId}});
	                    }
                	}
                });
            }
        },
        computed: {
        	filterCount: function() {
        		let length = this.content.length;
        		if(length > 30) {
        			Tips.showTips({
                        type: 'text',
                        msg: '评论最多30个字'
                    });
        			return 0;
        		} else {
        			return 30 - length;
        		}
        	}
        }
    }
</script>