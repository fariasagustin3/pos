import { create } from 'zustand';

export const useStore = create((set) => ({
  // initial state
  category: "Coffee",
  cart: [],

  // methods
  changeCategory: (category) => set(() => ({ category: category })),

  addToCart: (product) => set((state) => ({
    ...state,
    cart: [...state.cart, { ...product, quantity: 1, initialPrice: product.price }]
  })),

  incrementQuantity: (id, quantity, price) => set((state) => ({
    cart: state.cart.map((product) =>
      product.id === id ? { ...product, quantity, price } : product
    ),
  })),

  decrementQuantity: (id, quantity, price) => set(state => ({
    cart: state.cart.map(product =>
      product.id === id ? { ...product, quantity, price } : product
    )
  })),

  removeFromCart: (productId) => set(state => ({
    ...state,
    cart: state.cart.filter(product => productId !== product.id)
  })),
}))
