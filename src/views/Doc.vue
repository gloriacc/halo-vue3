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
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    > .nav {
      flex-shrink: 0;
    }
    > .content {
      flex-grow: 1;
      padding-top: 65px;
      padding-left: 200px;
      @media (max-width: 500px) {
        padding-left: 0;
      }
    }
  }
  .content {
    display: flex;
    > aside {
      flex-shrink: 0;
      background-color: white;
      width: 200px;
      padding: 90px 20px 16px 20px;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      overflow: auto;
      border-right: 1px solid #eeeeee;
      > h2 {
        margin-bottom: 4px;
      }
      > ol {
        > li {
          padding: 8px 0;
          font-size: 14px;
          > a {
            &:hover {
              color: #AA96DA;
              border-bottom: none;
            }
            &.link-active {
              color: #AA96DA;
            }
          }
        }
      }
    }
    > main {
      flex-grow: 1;
      padding: 16px;
      background: white;
      overflow: auto;
    }
  }
</style>