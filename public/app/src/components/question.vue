<template>
	<div class="item">
		<div class="question">{{item.question}}</div>
		<div class="answer"><strong>{{item.answer.author}}</strong>回答：{{item.answer.content}}</div>
		<div class="other">
			<div class="more"> 
				<a href="" class="link">详细内容<img src="../assets/arrow.png"></a>
			</div>
			<div class="attitude">
				<span class="support">{{item.answer.support.length}} 支持</span>
				<span class="opposition">{{item.answer.opposition.length}} 反对</span>
			</div>
		</div>
  	</div>
</template>
<script>
export default {
	props: ['item'],
}
</script>
<style>
.item{
	height: 10rem;
	background: #fff;
	padding: 0 2rem;
	margin-bottom: 1rem;
}
.item .question{
	font-size: 1.7rem;
	line-height: 4.5rem;
	font-weight: bold;
}
.item .answer{
	font-size: 1.5rem;
	line-height: 1.5rem;
}
.item .other{
	display: flex;
	justify-content: space-between;
	font-size: 1.3rem;
	line-height: 4rem;
}
.item .attitude{
	overflow: hidden;
}
.attitue span{
	display: inline-block;
	margin-right: 1rem;
}
</style>