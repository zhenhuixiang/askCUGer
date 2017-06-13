<template>
  <div id="homepage">
	 <div id="search">
      
      <search></search>
    </div>
    <div id="hotQuestion">
      <div class="title">
          <div class="text">热门问题</div>
          <div class="link"><a href="">更多<img src="../assets/arrow.png"></a></div>
      </div>
      <question v-for="item in hotQuestions" v-bind:item="item"></question>
    </div>
    <div id="me">
      <div class="option mypage">
        <router-link to="/me"> 
          <img src="../assets/mypage.png"><span>个人面板</span>
        </router-link>
      </div>
      <div class="option ask">
        <img src="../assets/ask.png"><span>我要提问</span>
      </div>
    </div>
    <div id="newQuestion">
      <div class="title">
          <div class="text">最新问题</div>
          <div class="link"><a href="">更多<img src="../assets/arrow.png"></a></div>
      </div>
      <question v-for="item in hotQuestions" v-bind:item="item"></question>
    </div>
  </div>
</template>

<script>
import search from './search.vue'
import question from './question.vue'
import me from './me.vue'

export default {
  components: { search,question,me },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hotQuestions:[
        {
          question:"哪个专业最好？",
          answer:{
            author:"甄慧翔",
            content:"地球物理学",
            time:"2017.6.12",
            support:['张三','李四'],
            opposition:[]
          },
          link:"",
        },{
          question:"哪个专业最好？",
          answer:{
            author:"甄慧翔",
            content:"地球物理学",
            time:"2017.6.12",
            support:['张三','李四'],
            opposition:[]
          },
          link:"",
        }
      ],
      newQuestions:[
        {
          question:"哪个专业最好？",
          answer:{
            author:"甄慧翔",
            content:"地球物理学",
            time:"2017.6.12",
            support:['张三','李四'],
            opposition:[]
          },
          link:"",
        },{
          question:"哪个专业最好？",
          answer:{
            author:"甄慧翔",
            content:"地球物理学",
            time:"2017.6.12",
            support:['张三','李四'],
            opposition:[]
          },
          link:"",
        }
      ]
    }
  }
}
</script>

<style>
.title{
  display: flex;
  justify-content: space-between;
  background: #eee;
  color: #777;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 1.5rem;
}
.link img{
  margin-left: 0.3rem;
}
#me{
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  box-shadow: 0rem 0.3rem 0.3rem #ccc;
}
#me .option{
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 49.9%;
  height: 4rem;
  line-height: 4rem;
  font-size: 1.5rem;
}
#me .mypage{
  border-right: 0.1rem solid #ccc; 
}
#me .mypage img{
  vertical-align:middle;
  width: 2rem;
  margin-right: 1rem;
}
#me .ask img{
  vertical-align:middle;
  height: 2rem;
  margin-right: 1rem;
}
#me .mypage{
  color: #FF9966;
}
#me .ask{
  color: #66CCFF;
}
</style>