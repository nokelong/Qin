<template>
	<div>
    <top-header :pageName="pageName" :isSearch='true'></top-header>
	<section class="readerBox patternDay p_relative readerPf_20 cloudPall15">
		<header>
			<span class="readerBox_title">001 酒会背后的阴影</span>
		</header>
	    <article >
	    	千夜虽然心中疑惑不去，可如此战机不容错过，他直接开始冲锋，双臂绯色光芒缭绕，战锤再次带起尖锐呼啸，一轮狂风骤雨般的攻击后，蛛魔统领被轰倒在地。他踏上蛛魔的胸膛，拔出闪耀光牙，一刀深深刺入心脏，丰沛血气顺着闪耀光牙涌入体内，顿时精神一振。再度斩杀两头蛛魔和一头狼人后，千夜体内血气又接近盈满。
	  		终战之役，依然是众多高阶战士辅助魏柏年斩杀索多。不过汲取了上次的教训，千夜在执行最后一刀的荣耀时，没有再使用闪耀光牙，而是用战锤砸碎了狼人将军的脊柱。
	  		此战之后，黑泥镇彻底被夷为一片平地。魏柏年虽然再度受伤，可看起来心情极佳，他只留下了一支象征姓的守备中队和一个斥候小队，就带着大军返回黑流城。千夜和暗火佣兵团也被他一并带走。
	  		魏柏年回到黑流城的第一件事，既不是加强城防，也不是查看其他锋线的战况。
	  		千夜虽然心中疑惑不去，可如此战机不容错过，他直接开始冲锋，双臂绯色光芒缭绕，战锤再次带起尖锐呼啸，一轮狂风骤雨般的攻击后，蛛魔统领被轰倒在地。他踏上蛛魔的胸膛，拔出闪耀光牙，一刀深深刺入心脏，丰沛血气顺着闪耀光牙涌入体内，顿时精神一振。再度斩杀两头蛛魔和一头狼人后，千夜体内血气又接近盈满。
	  		终战之役，依然是众多高阶战士辅助魏柏年斩杀索多。不过汲取了上次的教训，千夜在执行最后一刀的荣耀时，没有再使用闪耀光牙，而是用战锤砸碎了狼人将军的脊柱。
	  		此战之后，黑泥镇彻底被夷为一片平地。魏柏年虽然再度受伤，可看起来心情极佳，他只留下了一支象征姓的守备中队和一个斥候小队，就带着大军返回黑流城。千夜和暗火佣兵团也被他一并带走。
				魏柏年回到黑流城的第一件事，既不是加强城防，也不是查看其他锋线的战况。
		</article>
		<!-- 面板展开点击收起作用层 -->
		<div class="RetractBox" style="height:568px;">
			
		</div>
		<!-- 加operatBtn -->
		<div class="Font_Adjustment operatBtn p_relative">
			<ul class="d-box">
				<li class="b-flex">
					<div class="btn btnBlue">
	                    上一章
	                </div>
				</li>
				<li class="b-flex ta_c">
					<i class="iconfont wf-catalog ml_15"></i>
				</li>
				<li class="b-flex ta_c ">
					<!-- lightBlue为点击效果 -->
					<i class="iconfont wf-set mr_15 lightBlue"></i>
				</li>
				<li class="b-flex">
					<div class="btn btnBlue">
	                    下一章
	                </div>
				</li>
			</ul>
			<div class="FontBstyleBox hide">
				<div class="FontBstyle">
					<div class="d-box pb_5 Font bm_d9">
						<h3>字体</h3>
						<div class="clearfix b-flex">
							<!-- BgWf为选中效果 -->
							<div class="btn btnBlueH fl BgWf">
		                        <i class="iconfont wf-fontA"></i>
		                    </div>
		                    <div class="btn btnBlueH fl ml_15">
		                        <i class="iconfont wf-fontM"></i>
		                    </div>
						</div>
					</div>
					<div class="d-box Background mt_10">
						<h3>背景</h3>
						<div class="clearfix b-flex">
							<div class="btn fl patternEye">
		                        <span>护眼</span>
		                        <i class="icon i-bRight hide"></i>
		                    </div>
		                    <!-- 选中效果加蓝色边框线bm_blue -->
		                    <div class="btn fl ml_15 patternDay bm_blue">
		                        <span class="lightBlack">日间</span>
		                        <i class="icon i-bRight"></i>
		                    </div>
		                    <div class="btn fl ml_15 patternNight">
		                        <span>夜间</span>
		                        <i class="icon i-bRight hide"></i>
		                    </div>
						</div>
					</div>
				</div>
				<div class="FontBstyleIcon">
					<i class="icon i-wArrow"></i>
				</div>
			</div>
		</div>
    </section>
    </div>
</template>
<script >
    import topHeader from   'COMPONENTS/TopHeader.vue'
    
    export default {
    	name: 'reader',
    	components: {topHeader},
    	data() {
    		return {
    			pageName: '小说阅读器'
    		}
    	}
    }
</script>