<template>
 <!--  <article class="carousel">
    <ul class="carouselList">        
      <li class="carousel-listItem" style="width: 320px;" v-for="( carousel,index) in position" :key="index">
          <a href="javascript:;"><img v-bind:src="carousel.imageUrl" /></a>
      </li>
    </ul> -->
    <!-- 轮播导航 .current当前项 -->
   <!--  <nav class="carouselNavList">
      <li class="carouselNavList-item current"></li>
      <li class="carouselNavList-item"></li>
      <li class="carouselNavList-item"></li>
    </nav>
  </article> -->

  <div class="swiper-container ">
    <div class="swiper-wrapper ">
      <div  class=" swiper-slide" v-for="( carousel,index) in position" :key="index" :style="{ backgroundImage: 'url(' + carousel.imageUrl + ')' }">    
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</template>
<script>
  import Swiper from 'Swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    name:'carousel',
    props:{
      position:{
        type:[Array],
        required:true
      }
    },
    mounted() {
      this.$nextTick(function(){
        var swiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          loop: true,
          speed: 600,
          autoplay: 4000,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
          onTouchEnd: function() {
            swiper.startAutoplay()
          }
        });
      })
     
    }
  }
</script>
<style  lang="less">
  .swiper-container {
        width: 100%;
        height: 10rem;
        .swiper-wrapper {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .swiper-pagination-bullet {
            width:0.833rem;
            height: 0.833rem;
            display: inline-block;
            background: #7c5e53;
        }
    }
</style>
