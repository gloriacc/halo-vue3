<template>
  <div>
    <h-input value="大猪" @change="inputChange1" @input="inputInput1" @blur="inputBlur1" @focus="inputFocus1"></h-input>
    <div>
      <h-input value="大猪" v-model="message"></h-input>
      <span>{{message}}</span>
    </div>
    <h-input value="大猪" disabled></h-input>
    <h-input value="大猪" readonly></h-input>
    <div>
      <h-input value="大猪" error="woldle"></h-input>
    </div>
  </div>
</template>
<script lang="ts">
  import Input from '../lib/input.vue'
  export default {
    components: {
      'h-input': Input
    }
  }
</script>
<style lang="scss" scoped>

</style>