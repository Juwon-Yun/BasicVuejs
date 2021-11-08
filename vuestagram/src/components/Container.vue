<template>
  <div>
  <Post :data="data[i]" v-for="(a,i) in data" :key="i"/>
</div>
    <!-- slot 문법 -->
    <slot name="a"></slot>
    <slot name="b"></slot>
    <slot :msg="msg"></slot>

    <br>
    <br>

    <!-- mitt 문법 (이벤트 발사?)-->
    <button @click="fire">mitt 문법을 이용한 함수 사용 버튼</button>
  <!-- 필터선택페이지 -->
  <div class="upload-image"></div>
  <div class="filters">
    <div class="filter-1"></div>
    <div class="filter-1"></div>
    <div class="filter-1"></div>
    <div class="filter-1"></div>
    <div class="filter-1"></div>
  </div>

<!-- 글작성페이지 -->
  <div class="upload-image"></div>
  <div class="write">
    <textarea class="write-box">write!</textarea>
  </div>

</template>

<script>
import Post from './Post.vue';
 
export default {
    name : 'Container',
    data() {
        return {
            msg : 'Hello slot props',
        }
    },
    components:{
        Post,
    },
    props :{
        data : Object,
    },
    methods: {
        fire(){
            // 다른 컴포넌트에 이벤트 넘기기
            this.emitter.emit('이벤트명', '데이터')
        }
    },
}
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>