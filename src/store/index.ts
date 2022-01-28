// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { ITable } from "./type/index";

export interface State {
    count: number,
    menuIsExpand: boolean,
    tabsList: Array<ITable>,
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    // 默认值
    state: {
        count: 0,
        menuIsExpand: true,
        tabsList: [],
    },
    mutations: {
        setCount(state: State, count: number) {
            state.count = count
        },
        setMenuIsExpand(state: State, val: boolean) {
            state.menuIsExpand = val
        },
        addTab(state: State, tab: ITable) {
            // 判断是否存在，不存在则存入
            if (state.tabsList.some(item => item.path === tab.path)) {
                return
            }
            state.tabsList.push(tab)
        }
    },
    getters: {
        getCount(state: State) {
            return state.count
        },
        getMenuIsExpand(state: State) {
            return state.menuIsExpand
        },
        getTabList: (state: State) => {
            return state.tabsList
        }
    }
})

// 定义自己的 `useStore` 组合式函数
export function useStore() {
    return baseUseStore(key)
}
