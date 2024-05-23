import { create } from 'zustand';

export const useStore = create((set) => ({
  // initial state
  category: "Coffee",
  cart: [],
  tables: [],
  selectedTable: {},
  orders: [],
  total: 0,

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

  addTable: (table) => set(state => ({
    tables: [...state.tables, table]
  })),

  removeTable: (tableId) => set(state => ({
    tables: state.tables.filter(table => tableId !== table.id)
  })),

  selectTable: (table) => set({
    selectedTable: table,
  }),

  unselectTable: () => set({
    selectedTable: {}
  }),

  addOrder: (order) => set(state => ({
    orders: [...state.orders, order]
  })),

  removeOrder: (orderId) => set(state => ({
    orders: state.orders.filter(order => orderId !== order.id)
  })),

  modifyTotal: (total) => set(() => ({
    total: total
  })),

}))
