<template>
  <Nav></Nav>
  <div class="content">
    <aside>aside</aside>
    <main>main</main>
  </div>
</template>
<script lang="ts">
  import Nav from '../components/Nav.vue';

  export default {
    components: {Nav}
  };
</script>