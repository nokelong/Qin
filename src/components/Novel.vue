<template>
  <li class="b-flex">
    <a href="javascript:;">
      <div class="listImg p_relative">
        <img src="../assets/images/img01.jpg" v-bind:src="novel.columnImageUrl"/>
        <div class="Corner hide"><!-- 角标 -->
          <i class="icon "></i>
        </div>        
        <div class="layer_BlackFloat hide"></div>
      </div>
      <h3 class="Firtitle">{{novel.columnName}}</h3>
      <p class="Subtitle">{{novel.author}}</p>
    </a>
  </li>
</template>

<script>
export default {
  name: 'Novel',
  props:['novel']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
