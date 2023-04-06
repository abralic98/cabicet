import { create } from 'zustand'

interface Store {
  activeRoom: string | undefined
  setActiveRoom: (activeRoom: string | undefined) => void
}

export const useRoomStore = create<Store>((set) => ({
  activeRoom: undefined,
  setActiveRoom: (state) => set(() => ({ activeRoom: state })),
}))
