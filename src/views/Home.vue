<template>
  <Nav></Nav>
  <div class="banner">
    <h1>Halo UI</h1>
    <p class="actions">
      <a href="https://github.com">GitHub</a>
      <router-link to="/doc">开始</router-link>
    </p>
  </div>
</template>
<script lang="ts">
  import Nav from '../components/Nav.vue';
  export default {
    components: {Nav},
  };
</script>
<style lang="scss" scoped>
.banner {
  padding: 8em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h1 {
    font-size: 5em;
    text-align: center;
  }
  > .actions{
    padding: 8px 0;
    text-align: center;
    a {
      margin:8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      $c: #AA96DA;
      line-height: $h;
      border-radius: 18px;
      padding: 8px 28px;
      border: 1px solid $c;
      &:first-child {
        color: $c;
      }
      &:last-child {
        color: white;
        background-color: $c;
      }
    }
  }
}
</style>