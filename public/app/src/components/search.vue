<template>
	<div class="search">
		<input type="text" placeholder="搜索关键字">
  	</div>
</template>
<script>
export default {

}
</script>
<style>
.search{
	height: 4rem;
	width: 100%;
	background: #fff;
	overflow: hidden;
}
.search input{
	border: none;
	display: block;
	background: #eee;
	width: 92%;
	height: 3rem;
	color: #777;
	font-size: 1.2rem;
	line-height: 3rem;
	padding-left: 1rem;
	border-radius: 0.5rem;
	margin: 0.5rem auto 0.5rem auto;
}
</style>