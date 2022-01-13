import create from "zustand";
import produce from "immer";

export const useStore = create(set => ({
  products: [],
  product: {},
  fetchProducts: async () => {
    let res =
      await fetch("https://fakestoreapi.com/products")
        .catch(err => console.log(err))

    set({ products: await res.json() })
  },
  fetchProduct: async (id) => {
    let res =
      await fetch(`https://fakestoreapi.com/products/${id}`)
        .catch(err => console.log(err))

    set({ product: await res.json() })
  },
  removeProduct: () => set({ product: { } }),

  /* cart */
  cart: [],
  addToCart: (item) => {
    set(
      produce((draft) => {
        const itemIndex = draft.cart.findIndex(el => el.id === item.id);
        if(itemIndex === -1) draft.cart.unshift(item);
      })
    )
  },
  removeFromCart: (id) => {
    set(
      produce((draft) => {
        const itemIndex = draft.cart.findIndex(el => el.id === id);
        draft.cart.splice(itemIndex, 1);
      })
    )
  }
}))
