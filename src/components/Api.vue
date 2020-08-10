<template>
  <div class="api" v-if="content">
    <ul class="api-head">
      <li v-for="th in content.head">{{ th }}</li>
    </ul>
    <div class="api-body">
      <ul v-for="tr in content.body">
        <li v-for="td in tr">{{td}}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  const Api = defineComponent({
    props: {
      content: Object
    },
  })
  export default Api
</script>
<style lang="scss" scoped>
  $border-color: #eee;
  $head-color: #757575;
  .api {
    width: 100%;
    border: 2px solid $border-color;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    .api-head, .api-body ul {
      display: flex;
      justify-content: center;
      align-items: stretch;
      height: 100%;
      li {
        flex: 1;
        display: flex;
        align-items: center;
        &:last-child {
          border-right: none;
        }
      }
    }
    .api-head {
      border-bottom: 2px solid $border-color;
      font-weight: bold;
      color: $head-color;
      background-color: $border-color;
      li {
        border-right: 1px solid $border-color;
        padding: 1em .5em;
      }
    }
    .api-body {
      display: flex;
      flex-direction: column;
      ul {
        border-bottom: 1px solid $border-color;
        li {
          padding: .5em .5em;
          border-right: 1px solid $border-color;
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
</style>