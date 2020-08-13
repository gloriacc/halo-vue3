<template>
  <div class="layout">
    <Nav class="nav"></Nav>
    <div class="content">
      <aside v-if="asideVisible">
        <ol>
          <li>
            <router-link :class="link.path === '/doc' ? 'link-active' : ''" to="/doc">安装</router-link>
          </li>
          <li v-for="route in links">
            <router-link :class="link.path === route.path ? 'link-active' : ''" :to="route.path">{{ route.meta.title }}</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
  import Nav from '../components/Nav.vue'
  import {inject, Ref} from 'vue'
  import { router } from '../router'

  export default {
    components: {Nav},
    setup () {
      const asideVisible = inject<Ref<Boolean>>('asideVisible')
      return {asideVisible}
    },
    data () {
      return {
        links: router.getRoutes().filter(route => route.meta.title) || [],
        link: router.currentRoute
      }
    },
  };
</script>
<style lang="scss" scoped>
  $font-color: #4d80e6;
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    > .nav {
      flex-shrink: 0;
    }
    > .content {
      height: 100%;
      flex-grow: 1;
      padding-top: 6em;
      padding-bottom: 2em;
      @media (max-width: 500px) {
        padding-left: 0;
      }

    }
  }
  .content {
    display: flex;
    > aside {
      flex-shrink: 0;
      width: 200px;
      padding: 3em 20px 16px 20px;
      height: 100%;
      overflow: auto;
      > h2 {
        margin-bottom: 4px;
      }
      > ol {
        > li {
          padding: 8px 0;
          font-size: 14px;
          > a {
            &:hover {
              color: $font-color;
              border-bottom: none;
            }
            &.link-active {
              color: $font-color;
            }
          }
        }
      }
    }
    > main {
      flex-grow: 1;
      padding: 16px;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      &::-webkit-scrollbar-button {
        display: none;
      }
      &::-webkit-scrollbar-track {
        display: none;
      }
      &::-webkit-scrollbar-track-piece {
        background:#fff;
      }
      &::-webkit-scrollbar-thumb{
        background: #ececec;
        border-radius: 4px;
      }
      &::-webkit-scrollbar-corner {
        background:#fff;
      }
    }
  }
</style>