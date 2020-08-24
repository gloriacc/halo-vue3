// declare module '*.vue' {
//   import { ComponentOptions } from 'vue'
//   const componentOptions: ComponentOptions
//   export default componentOptions
// }
declare module "*.vue" {
  import { defineComponent } from "vue"
  const Component: ReturnType<typeof defineComponent>
  export default Component
}