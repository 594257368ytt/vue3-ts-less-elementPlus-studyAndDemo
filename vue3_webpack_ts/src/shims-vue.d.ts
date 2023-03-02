/* eslint-disable */
// declare module '*.vue' {
//   import type { DefineComponent } from 'vue'
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }
declare module 'vue'
declare module 'vue-router'
declare module 'vuex'
declare module '@/vue'
declare module './App.vue'
import { _RouteRecordBase } from 'vue-router';
declare module 'vue-router'{
    interface _RouteRecordBase{
        hidden?: boolean | string | number
    }
}
// import { ComponentCustomPropertie s } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    count: number
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
