<template>
  <router-view/>
</template>

<script lang="ts">
  import {ref, provide} from 'vue'
export default {
  name: 'App',
  setup () {
    const asideVisible = ref<Boolean>(false)
    provide('asideVisible', asideVisible)
  }
}
</script>
