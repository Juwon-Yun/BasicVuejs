<template>
  <!-- <div v-for="(a, i) in data" :key="i"  class="room-img"> -->
  <div class="room-img">
      <img :src="data.image" alt="">
        <!-- 
          <h4 @click="modal(); fn_clickNum(i);">{{a.title}}</h4> 
          emit 으로 부모 component에게 요청
        -->

      <h4 @click="callData">{{data.title}}</h4>
      <p >{{data.price}}원</p>
  </div>
</template>

<script>
export default {
    name : 'Card',
    props : {
        data : Array,
        modalStatus : Boolean,
    },
    methods : {
        callData(){
            this.$emit('openModal', this.data.id)
        }
    },
}
</script>

<style>

</style>