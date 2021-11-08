<template>
  <List/>
  <Detail/>
    
  <router-view></router-view>

  <div class="mt-4">
    <router-link to="/list">이동하기</router-link>
  </div>
  <div class="mt-4">
    <router-link to="/detail">detail</router-link>
  </div>
  <div class="mt-4">
    <router-link to="/Hello">HomeVue</router-link>
  </div>
  
</template>

<script>
import List from './components/List.vue';
import blogData from './assets/BlogData';
import Detail from './components/detail.vue';

export default {
  name: 'App',
  data() {
    return {
      blogList : blogData,
    }
  },
  components: {
    List,
    Detail,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
