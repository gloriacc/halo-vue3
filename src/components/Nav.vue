<template>
  <div class="nav">
    <div class="logo"><router-link to="/">Halo</router-link></div>
    <ul class="menu">
      <li><router-link :class="link.path.indexOf('/doc') !== -1 ? 'link-active' : ''" to="/doc">组件库</router-link></li>
      <li><a href="https://github.com">GitHub<halo-icon class="target-icon" name="target"></halo-icon></a></li>
    </ul>
    <halo-icon class="toggleAside" @click="toggleAside" name="fold"></halo-icon>
  </div>
</template>
<script lang="ts">
  import {inject, Ref} from 'vue'
  import HaloIcon from '../lib/icon.vue'
  import {router} from '../router'

  export default {
    name: 'Nav',
    components: {HaloIcon},
    setup () {
      const asideVisible = inject<Ref<Boolean>>('asideVisible')
      const toggleAside = () => {
        if (asideVisible) {
          asideVisible.value = !asideVisible.value
        }
      }
      return {toggleAside}
    },
    data () {
      return {
        link: router.currentRoute
      }
    },
  }
</script>
<style lang="scss" scoped>
  .nav {
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    background: white;
    > .logo {
      max-width: 6em;
      margin-right: auto;
      font-size: 28px;
      > a:hover {
        border-bottom: none;
      }
    }
    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;
      align-items: center;
      > li {
        margin: 0 1em;
        > a {
          > .target-icon {
            vertical-align: top;
            margin-left: .1em;
          }
          &:hover {
            border-bottom: none;
          }
          &.link-active {
            color: #AA96DA;
          }
        }
      }
    }
    > .toggleAside {
      display: none;
      width: 1.25em;
      height: 1.25em;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
    @media (max-width:500px) {
      > .menu {
        display: none;
      }
      > .logo {
        margin: 0 auto;
      }
      > .toggleAside {
        display: inline-block;
      }
    }
  }
</style>