// import {ref, computed} from 'vue'
// import {defineStore} from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(2)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }
//
//   return { count, doubleCount, increment }
// })
//
// export const useCounterStore = defineStore('counter', {
//         // 初期値
//         state: () => ({
//             count: 0
//         }),
//         // stateから別の値を算出
//         getters: {
//             doubleCount(state) {
//                 return state.count * 2
//             },
//             doubleplusOne() {
//                 return this.doubleCount + 1
//             }
//         },
//         // stateの値を更新する関数
//         actions: {
//             countUp() {
//                 this.count++
//             }
//         }
//
//     },
//     {
//         persist: true
//     }
// )

import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useCounterStore = defineStore(
    'counter',
    () => {
        const count = ref(0)
        const doubleCount = computed(() => count.value * 2)
        const hundret = ref(100)

        function increment() {
            count.value++
        }

        return {count, doubleCount, increment, hundret}
    },
    {
        persist: true
    }
)




