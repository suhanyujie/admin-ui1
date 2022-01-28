// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
    count: number,
    menuIsExpand: boolean,
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    // 默认值
    state: {
        count: 0,
        menuIsExpand: true
    },
    mutations: {
        setCount(state: State, count: number) {
            state.count = count
        },
        setMenuIsExpand(state: State, val: boolean) {
            state.menuIsExpand = val
        }
    },
    getters: {
        getCount(state: State) {
            return state.count
        },
        getMenuIsExpand(state: State) {
            return state.menuIsExpand
        }
    }
})

// 定义自己的 `useStore` 组合式函数
export function useStore() {
    return baseUseStore(key)
}
