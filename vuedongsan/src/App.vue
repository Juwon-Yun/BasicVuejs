<template>
 <!-- npm run serve -->
  <!-- <div class="black-bg" v-if="modalStatus">
    <div class="white-bg" >
      <h4>{{data[clickNum].title}}</h4>
      <p>{{data[clickNum].content}}</p>
      <p>{{data[clickNum].price}}원</p>
      <Discount/>
      <button @click="modalClose">모달창 닫기</button>
    </div>
  </div> -->

  <!-- 
    props로 자식에게 데이터보내는법 
    데이터 보내고, 등록하고 , 사용하기  
    :이나 v-bind 사용  ex) :데이터이름="데이터이름"
  -->
  <!-- <div class="start" :class="{end : modalStatus}"> -->
    <transition name="fade">
      <Modal @closeModal='modalStatus = false'  :data="data" :clickNum="clickNum" :modalStatus="modalStatus" />
    </transition>
  <!-- </div> -->


  <!-- if 문 사용하기 -->
  <!-- <div v-if="1 == 2"> 
    안녕하세요
  </div>
  <div v-else-if=" 1==3">
    대신 안녕하세요
  </div>
  <div v-else>
    대신 대신 안녕하세요
  </div> -->



  <div class="menu">
    <a v-for="a,i in menus" :key="i" href="">{{a}}</a>
  </div>

  <Discount v-if="showDiscount == true" :DiscountRate="DiscountRate"/>

  <button @click="priceSort">가격 낮은순으로 정렬</button>
  <button @click="priceSortEx">가격 높은순으로 정렬</button>
  <button @click="sortBack">되돌리기</button>

  <Card @openModal='modalStatus = true, clickNum = i' :data="data[i]" :Object="Object.name" v-for="(a, i) in data" :key="a"/>
  <!-- v-for의 두번째 인자는 무조건 index를 나타냄 -->
    <!-- <h1>{{index}}</h1> -->
    <!-- <h1>{{key}}</h1> -->

  <!-- <div v-for="(a, i) in data" :key="i"  class="room-img">
      <img :src="a.image" alt="">
      <h4 @click="modal(); fn_clickNum(i);">{{a.title}}</h4>
      <p >{{a.price}}원</p>
  </div> -->

    <!-- <h4 v-for="a in products" :key="a">{{a}}</h4> -->
    <!-- <h4 v-for="i in prices" :key="i">{{i}}</h4> -->

  <!-- a => products 안에 있던 데이터가 됨 -->
  <!-- <div v-for="(j,i) in products" :key="i">
      <h4>{{j}}</h4>
      <p>{{prices[i]}}</p>
      <button @:click="cnts[i]++" >허위매물신고</button> <span>신고수: {{cnts[i]}}</span>
  </div> -->
      <!-- <button v-on:click="자바스크립트" >허위매물신고</button> <span>신고수: 0</span> -->

  <!-- <div>
    <img src="./assets/room0.jpg" alt="room0" class="room-img">
    <h4 @click="modal">{{products[0]}}</h4>
    <p>50만원</p>    
    <button @click="increase">허위매물신고</button><span>신고수: {{cnt}}</span>
  </div> -->

    <!-- 바뀔일이 없는 값은 데이터 바인딩을 할 필요가 없다 -->
    <!-- 속성에 데이터 바인딩을 해주고 싶으면 콜론(:)을 찍는다  :style, :class 등등-->
    <!-- <h4 :style="스타일">xx 원룸</h4>    -->

    <!-- lifeSycle 단계
        1) create
        2) mount 
        3) 컴포넌트 생성
        4) update(컴포넌트 안의 data가 변하면)
        5) unmount(컴포넌트가 삭제되면)

        lifeSycle Hook을 걸어서 단계별로 이벤트를 입력할 수 있다
     -->

</template>

<script>
// {{{}}를 써야 실시간 데이터 렌더링 

import a from './assets/oneroom.js';
import Discount from './Discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';

export default {
  name: 'App',
  data(){
    return{
      Object : { name : 'kim', age : 20},
      clickNum : 0,
      data : a,
      originData : [...a],
      menus : ['Home', 'Shop', 'About'],
      prices : [80, 70, 120],
      logo : '원룸샵',
      스타일 : 'color : blue',
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      cnt : 0,
      cnts : [0, 0, 0],
      modalStatus : false,
      showDiscount : true,
      DiscountRate : 30,
    }
  },
  // 함수 만드는 공간임
  methods:{
    increase(){
      this.cnt++;
    },
    increase2(){
      this.cnts++;
    },
    modal(){
      this.modalStatus = true;
    },
    modalClose(){
      this.modalStatus = false;
    },
    fn_clickNum(i){
      this.clickNum = i;
    },
    priceSort(){
      this.data.sort((a,b)=>{
          return a.price - b.price
      });
    },
    sortBack(){
      this.data = [...this.originData];
    },
    priceSortEx(){
      this.data.sort((a, b)=>{
        return b.price - a.price
      })
    }
  },
  
  created() {
    let interval = setInterval(()=>{
      this.DiscountRate = this.DiscountRate - 1;
      
      if( this.DiscountRate == 0 ){
      clearInterval(interval);
      }
      
    }, 200);

    
  },

  // mounted() {
  //   setTimeout(()=>{
  //     this.showDiscount == false;
  //   }, 2000)  
  // },

  components: {
    // Discount : Discount,
    Discount,
    Modal,
    Card,
  }
}
</script>

<style>
body{
  margin: 0
}
div{
  box-sizing: border-box;
}
.black-bg{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}
.white-bg{
  width: 100%;
  background: white;
  border-radius: 8px;
  padding:20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a{
  color: white;
  padding: 10px;
  text-decoration: none;
}
.room-img{
  width: 100%;
  margin-top: 40px;
}
.start{
  opacity: 0;
  transition: all 1s;
}
.end{
  opacity: 1;
}

.fade-enter-from{
  opacity: 0;  
}
.fade-enter-active{
  transition: all 1s;
}
.fade-enter-to{
  opacity: 1;
}

.fade-leave-from{
  transform: translateY(200px);
}

.fade-leave-active{
  transition: all 1s;
}
.fade-leave-to{
  transform: translateY(0);
}
</style>
