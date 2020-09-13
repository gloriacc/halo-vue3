<template>
  <div class="halo-tabs" :class="{[`halo-tabs-${pos}`]: pos, [`halo-tabs-${type}`]: type}">
    <div class="halo-tabs-head" ref="head">
      <div v-for="(title,index) in titles" :key="index" :ref="el => { if (title === selected) activeItem = el }" @click="select(title)" class="halo-tabs-head-item" :class="{'halo-tabs-head-item-active': title=== selected}">{{title}}</div>
      <div v-if="type !== 'card'" class="halo-tabs-head-indicator" ref="indicator"></div>
    </div>
    <div class="halo-tabs-body" ref="body">
      <component :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref, watchEffect, onMounted, onUpdated, computed, watch} from 'vue';
import Tab from './tabs-item.vue'
interface TabsProps {
  selected?: string,
  pos?: string,
  type?: string
}
const HaloTabs = defineComponent({
  name: 'HaloTabs',
  props: {
    selected: {
      type: String
    },
    pos: {
      type: String,
      validator (value: string) {
        return ['right', 'left', 'top', 'bottom'].includes(value)
      }
    },
    type: {
      type: String
    }
  },
  setup (props: TabsProps, context) {
    const activeItem = ref<HTMLDivElement | null>(null)
    const indicator = ref<HTMLDivElement | null>(null)
    const head = ref<HTMLDivElement | null>(null)
    const body = ref<HTMLDivElement | null>(null)
    const pos = ref(props.pos || 'top')
    watch(() => props.pos, () => {
      pos.value = props.pos || 'top'
    })
    onMounted(() => {
      watchEffect(() => {
        if (!activeItem.value || !indicator.value || !head.value || !body.value) return
        const { width, height, left: leftActive, top: topActive } = activeItem.value.getBoundingClientRect()
        const { width: widthHead, left: leftHead, top: topHead } = head.value.getBoundingClientRect()
        const left = leftActive - leftHead
        const top = topActive - topHead
        const posHash: { [char: string]: { width: number, height: number, left: number, top: number} } = {
          top: {width, height: 2, left, top: top + height},
          bottom: {width, height: 2, left, top: top + height},
          left: {width: 2, height, left: widthHead - 2, top},
          right: {width: 2, height, left: -2, top}
        }
        indicator.value.style.width = posHash[pos.value].width + 'px'
        indicator.value.style.height = posHash[pos.value].height + 'px'
        indicator.value.style.left = posHash[pos.value].left + 'px'
        indicator.value.style.top = posHash[pos.value].top + 'px'
        head.value.style.order = pos.value === 'bottom' ? '1' : '0'
        body.value.style.order = pos.value === 'bottom' ? '0' : '1'
      })
    })

    if (!context.slots.default) {
      console.warn('Tabs 缺少子标签')
    }
    const defaults = context.slots.default()
    defaults.forEach(tab => {
      if (tab.type !== Tab) {
        console.warn('Tabs 子标签必须是 Tab')
      }
    })
    const titles = defaults.map(tab => {
      return tab.props && tab.props.title
    })
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    const current = computed(() => {
      return defaults.find(tab => tab.props && tab.props.title === props.selected)
    })
    return {
      defaults,
      titles,
      select,
      activeItem,
      indicator,
      head,
      body,
      current
    }
  },
})
export default HaloTabs
</script>
<style lang="scss">
$border-color: #dcdcdc;
$tab-height: 40px;
$blue: #4d80e6;
$disabled-text-color: grey;
.halo-tabs {
  display: flex;
  flex-direction: column;
  &-head {
    display: flex;
    justify-content: flex-start;
    position: relative;
    border-bottom: 2px solid $border-color;
    margin-bottom: 1rem;
    order: 0;
    &-indicator {
      position: absolute;
      height: 2px;
      background: $blue;
      left: 0;
      width: 100px;
      transition: all 300ms;
    }
    &-item {
      flex-shrink: 0;
      margin: 0 1em;
      cursor: pointer;
      display: flex;
      align-items: center;
      height: 40px;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
      &-active {
        color: $blue;
      }
      &.disabled {
        color: $disabled-text-color;
        cursor: not-allowed;
      }
    }
  }
  &-body {
    flex-grow: 1;
    order: 1;
  }
  &-left {
    display: flex;
    flex-direction: row;
    > .halo-tabs-head {
      flex-direction: column;
      border-bottom: none;
      border-right: 2px solid $border-color;
      margin-bottom: 0;
      margin-right: 1em;
      > .halo-tabs-head-item {
        justify-content: flex-end;
      }
      > .halo-tabs-head-item:first-child, &:last-child {
        margin: 0 1em;
      }
    }
  }
  &-right {
    display: flex;
    flex-direction: row-reverse;
    > .halo-tabs-head {
      flex-direction: column;
      border-bottom: none;
      border-left: 2px solid $border-color;
      margin-bottom: 0;
      margin-left: 1em;
      > .halo-tabs-head-item {
        justify-content: flex-start;
      }
      > .halo-tabs-head-item:first-child, &:last-child {
        margin: 0 1em;
      }
    }
  }
  &-card {
    border: 1px solid $border-color;
    > .halo-tabs-head {
      border-bottom: none;
      margin-bottom: 0;
      background-color: #eee;
      > .halo-tabs-head-item {
        padding: 0 1em;
        border-bottom: none;
        margin: 0;
        &-active {
          background-color: #fff;
        }
      }
      > .halo-tabs-head-indicator {
        background-color: #fff;
      }
    }
    > .halo-tabs-body {
      padding: 1em;
    }
  }
}
</style>