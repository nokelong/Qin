class Slide{
    Slide(container,options){
    
        if(!options) {
        	console.log('未传入options参数')
       	    return ;
        }
        this.pagination = this.pagination;
        this.autoPlay = options.autoPlay;
        this.speed = options.speed || 3000;
        this.effect = options.effect ||'leftLoop';//效果 || left：左滚动；|| leftLoop：左循环滚动；
        this.paginationClickable = options.paginationClickable || true;
        this.onTouchEnd = options.onTouchEnd ;
        this.container = document.getElementById(options.container.replace("#",""));
        this.init()
        this.initEvents()
    }
    init() {
    	if(this.autoPlay) {
    		//启动定时器
    		this.startInternal()
    	}

    }
    initEvents() {
       
    }
    startInternal() {
    	window.setInterval(function(){
           
    	},this.speed)
    }
    preAction() {

    }
    nextAction() {

    }
    transform(dist ,speed ,ele) {
      if( !!ele ) { 
      	ele=ele.style; 
      }else{ 
      	ele=conBox.style; 
      }

      ele.webkitTransitionDuration = ele.MozTransitionDuration 
      = ele.msTransitionDuration = ele.OTransitionDuration 
      = ele.transitionDuration = speed + 'ms';
      
      ele.webkitTransform = 'translate(' + dist + 'px,0) translateZ(0)';
      ele.msTransform = ele.MozTransform = ele.OTransform = 'translateX(' + dist + 'px,0)';
    }
}
export default new Slide();