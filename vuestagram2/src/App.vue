<template>
 <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :data="data" />

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>

 <!-- store(vuex)에서 받아온 데이터 -->
  <h4>안녕 나는 {{$store.state.name}}</h4>
  <h4>내 나이는 {{$store.state.age}}살 이야</h4>
  <!-- 
    vuex 국룰 => Components 안에서 직접 수정하기 금지
    
    state 수정을 하고 싶으면 미리 store.js에 수정방법을 정의해두고 
    그 방법을 컴포넌트에서 소환해서 수정해야함

   -->
  <!-- <h4>안녕 나는 {{$store.state.name = '윤주원이야'}}</h4> -->

  <!-- 
    옳바른 vuex 사용방법, component들은 store.js에 부탁할 뿐이지 수정할 권한은 없다,
    미리 짜놓은 변경하는 함수를 사용한다.
  -->
  <!-- $stroe.commit은 mutations에 있는 함수 -->
  <button @click="$store.commit('changeStateName')" > store.js에게 수정부탁하기 </button>
  <button @click="changeStateName(params)"> ...mapMutations로 가져온 함수  </button>
  <button @click="$store.commit('increaseAge', 10)"> 나이 열살 더먹이기 </button>
  <!-- $store.dispatch는 actions에 있는 함수 -->
  <p>{{$store.state.more}}</p>
  <button @click="$store.dispatch('getData')">더보기 버튼</button>
  <br><br>

  <!-- 
      computed 함수는 소괄호()를 제외하고 작성한다
      버튼을 누를때마다 computed 함수 now2는 재 렌더링이 되지않는다.
      methods 함수인 now()는 재 렌더링됨.
   -->
  <p>{{now2}} <br> {{now()}} <br> {{counter}}</p>
  <button @click="counter++">버튼</button>
  <br>
  computed 함수에서 return한 {{name}} <br>
  ...mapState에서 불러온 {{age}} <br>
  ...mapState에서 불러온 {{likes}} <br>
  ...mapState Object 타입에서 불러온 {{keyName}} <br>



  <br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br>

  <!-- 지금 만들거를 앱처럼 사용하기 => PWA 등장(manifest.json, service-worker.js) -->
</template>

<script>
import data from './assets/data.js'
import Container from './components/Container.vue'
import axios from 'axios'
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      data : data,
      counter : 0,
    }
  },
  mounted() {
    this.emitter.on('이벤트명', (e)=>{
      console.log(e);
    })
  },  
  components: {
    Container,
  },
  methods: {
    more(){
      axios.get(`https://codingapple1.github.io/vue/more0.json`)
      .then( res =>{
        this.data.push(res.data);
      })
    },
    // methods 함수는 사용할 때마다 실행됨
    now(){
      return new Date()
    },
    ...mapMutations(['changeStateName', '좋아요']),
  },
  // computed 함수는 사용해도 실행되지 않는다 but
  // 처음 서버를 실행할때 값을 간직하고 호출하면 그대로 값을 전달한다.
  // 보통은 계산 결과 저장용 함수들이다
  // computed는 무조건 return 내용을 서술해야한다 침뱉는거마냥
  computed :{
    now2(){
      return new Date()
    },
    name(){
      return this.$store.state.name
    },
    // vuex state를 한번에 꺼내쓰려면 ...mapState
    // 다른 computed 함수랑 함께 사용할때에도 ... 이 필요하다 
    // import {mapState} from 'vuex' 해줘야 사용가능 
    ...mapState(['name', 'age', 'likes']),
    ...mapState({keyName : 'isClickLikes' }),
  },
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
