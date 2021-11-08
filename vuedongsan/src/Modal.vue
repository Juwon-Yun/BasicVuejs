<template>
  <div class="black-bg" v-if="modalStatus">
    <div class="white-bg" >
      <h4 >{{data[clickNum].title}}</h4>
      <p>{{data[clickNum].content}}</p>
      <!-- <input @input="month = $event.target.value"> -->
      <input v-model="month">
      <input type="range" min="1" max="12" v-model="month">
      <select v-model="month">
            <option value="1">1</option>          
            <option value="2">2</option>          
            <option value="3">3</option>          
            <option value="4">4</option>          
            <option value="5">5</option>          
            <option value="6">6</option>          
            <option value="7">7</option>          
            <option value="8">8</option>          
            <option value="9">9</option>          
            <option value="10">10</option>          
            <option value="11">11</option>          
            <option value="12">12</option>          
      </select>
      <p> {{month}}개월 선택함 : {{data[clickNum].price * month}}원</p>
      <button @click="$emit('closeModal')" >모달창 닫기</button>
    </div>
  </div>
</template>

<script>
// props로 받아온 데이터는 readOnly이다 수정불가
export default {
    name : 'Modal',
    data(){
        return{
            month : 1,
        }
    },
    watch :{
        // month를 감시하는 함수(month가 변할때 watcher 도 실행됨) 함수명은 무조건 변수명 
        // month(afterData, beforData){
        month(afterData){
            if(afterData > 12){
                alert("12개월 이상은 입력이안됩니다");
            }
            // let str = "안녕"
            // if(typeof beforData == typeof str){
            //     alert("개월 수를 문자로 입력해? 똑바로해라");
            // }
        }
    },
    props : {
        data : Array,
        clickNum : Object,
        modalStatus : Boolean,
    },
}
</script>

<style>

</style>