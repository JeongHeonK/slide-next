import { create } from 'zustand'

type State = {
  isBanner: boolean
}

type Action = {
  actions: {
    setIsBannerActive: () => void
    setIsBannerInactive: () => void
  }
}

export const useBannerStateStore = create<State & Action>((set) => ({
  isBanner: false,
  actions: {
    setIsBannerActive: () => set(() => ({ isBanner: true })),
    setIsBannerInactive: () => set(() => ({ isBanner: false })),
  },
}))
