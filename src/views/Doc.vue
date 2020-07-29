<template>
  <Nav></Nav>
  <div class="content">
    <aside>
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
      </ol>
    </aside>
    <main>main</main>
  </div>
</template>
<script lang="ts">
  import Nav from '../components/Nav.vue';

  export default {
    components: {Nav}
  };
</script>
<style lang="scss" scoped>
aside {
  width: 150px;
  padding: 70px 16px 16px;
  position: fixed;
  top: 0;
  left: 0;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
</style>