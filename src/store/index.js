import { create } from 'zustand';

export const useStore = create((set) => ({
  count: 0,
  category: "Coffee",
  changeCategory: (category) => set(() => ({ category: category })),
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))
