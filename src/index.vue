<template>
  <div class="index">
    <div class="msg">
    	{{msg}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'index',
  computed: {
    
  },
  data() {
  	return {
  		msg: 'Hello Vue3!'
  	}
  },
  mounted() {
    
  },
}
</script>
<!-- 使用 lang="scss" 讓 sass loader 來處理 -->
<style lang="scss" scoped>
	.index {
		.msg {
			color: #4bbebe;
		}
	}
</style>