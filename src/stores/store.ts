import { acceptHMRUpdate, defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({}),
  getters: {},
  actions: {},
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
