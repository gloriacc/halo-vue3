<template>
  <div class="nav">
    <div class="nav-media">
      <div class="logo"><router-link to="/">Halo</router-link></div>
      <ul class="menu">
        <li><router-link :class="link.path.indexOf('/doc') !== -1 ? 'link-active' : ''" to="/doc">组件</router-link></li>
        <li><a target="_blank" href="https://github.com">GitHub<halo-icon class="target-icon" name="target"></halo-icon></a></li>
      </ul>
      <halo-icon class="toggleAside" @click="toggleAside" name="fold"></halo-icon>
    </div>
  </div>
</template>
<script lang="ts">
  import {inject, Ref, defineComponent} from 'vue'
  import HaloIcon from '../lib/icon.vue'
  import {router} from '../router'

  const Nav = defineComponent({
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
  })
  export default Nav
</script>
<style lang="scss" scoped>
  $light-color: #ccd2f8;
  $dark-color: #7494eb;
  $color: #4d80e6;
  $font-size: 14px;
  @keyframes logo {
    to {
      text-shadow: 0 0 10px $light-color, 0 0 20px $light-color, 0 0 30px $light-color,
      0 0 40px $light-color, 0 0 50px $dark-color, 0 0 60px $dark-color,
      0 0 70px $dark-color, 0 0 80px $dark-color;
    }
    from {
      filter: brightness(110%);
      text-shadow: 0 0 5px $light-color, 0 0 10px $light-color, 0 0 15px $light-color,
      0 0 20px $light-color, 0 0 25px $dark-color, 0 0 30px $dark-color,
      0 0 35px $dark-color, 0 0 40px $dark-color;
    }
  }
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .nav-media {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2em 1em;
      > .logo {
        max-width: 6em;
        margin-right: auto;
        font-size: $font-size * 2;
        color: $color;
        > a:hover {
          border-bottom: none;
          animation: logo 1.5s ease-in-out infinite alternate;
        }
      }
      > .menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        align-items: center;
        font-size: $font-size;
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
              color: $color;
            }
          }
          &:first-child {
            > a {
              background-color: $color;
              color: #fff;
              padding: .5em 2em;
              display: inline-block;
              border-radius: $font-size / 2;
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
  }
  @media (min-width: 500px) {
    .nav {
      .nav-media {
        width: 1120px;
      }
    }
  }
</style>