<template>
	<div class="me">
		<div class="myInfo">
			<div class="name"><strong style="font-size:1.6rem">{{name}}</strong>同学，泥嚎~</div>
			<div class="about">
				<span>我的回答：{{myAnswer}}</span>
				<span>收到的赞：{{mySupport}}</span>
				<span>提问次数：{{myQuestion}}</span>
			</div>
		</div>
  		<div class="option myAnswer"><span>我的回答</span><img src="../assets/arrow.png"></div>
		<div class="option myQuestion"><span>我的问题</span><img src="../assets/arrow.png"></div>
		<router-link to="/homepage"> 
			<div class="backhomepage"><span>进入askCUGer首页</span></div>
		</router-link> 
  	</div>
</template>
<script>
export default {
	data:()=>({
		name:'甄慧翔',
		myAnswer:'1',
		mySupport:'2',
		myQuestion:'4'
	})
}
</script>
<style>
.myInfo{
	height: 8rem;
	background: #fff;
	margin: 2rem 0;
	overflow: hidden;
}
.myInfo .name{
	height: 3rem;
	line-height: 3rem;
	font-size: 1.5rem;
	margin: 1rem 2rem;
}
.myInfo .about{
	display: flex;
	justify-content: space-between;
	padding: 0 2rem;
	font-size: 1.4rem;
}
.me .option{
	height: 5rem;
	line-height: 5rem;
	font-size: 1.5rem; 
	background: #fff;
	margin-bottom: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.me .option span{
	margin-left: 2rem; 
}
.me .option img{
	margin-right: 2rem; 
	height: 1.5rem;
}
.me .backhomepage{
	height: 5rem;
	line-height: 5rem;
	background: #fff;
	text-align: center;
	font-size: 1.5rem;
	color: #33CCFF;
}

</style>