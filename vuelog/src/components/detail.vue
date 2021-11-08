<template>
  <div>
      <h4>상세페이지</h4>
      <h5>글목록</h5>
      <p>글설명</p>
  </div>
    <div>
  <!-- <div v-for="(a, i) in blogList" :key="i"> -->
      <h5 @click="$router.push('/detail/1')">{{blogList[i].title}}</h5>
      <p>{{blogList[i].date}}</p>
      <!-- <h5>{{blogList[$route.params.id].title}}</h5>
      <p>{{blogList[$route.params.id].date}}</p> -->
  </div>
 
</template>

<script>
export default {
    props:{
        blogList : Array,
    },
}
</script>

<style>

</style>