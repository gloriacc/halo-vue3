<template>
  <Nav></Nav>
  <div class="banner shadow">
    <h1>Halo</h1>
    <p>基于 Vue 3.0 的组件库</p>
    <router-link to="/doc">开始</router-link>
  </div>
</template>
<script lang="ts">
  import Nav from '../components/Nav.vue';
  import { defineComponent } from 'vue';
  const Home = defineComponent({
    components: {Nav},
  })
  export default Home
</script>
<style lang="scss" scoped>
  $font-color: #4d80e6;
  $action-height: 2em;
  .banner {
    padding: 14em 0 8em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: $font-color;
    > h1 {
      font-size: 5em;
      text-align: center;
    }
    > a {
      margin: 1em;
      display: inline-block;
      line-height: $action-height;
      border-radius: $action-height / 2;
      padding: .5em 4em;
      border: .1em solid $font-color;
      &:hover{
        box-shadow: 0 0 1em .1em $font-color;
        transition: box-shadow 0.5s;
      }
    }
  }

</style>