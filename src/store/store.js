import create from "zustand";

const useStore = create((set) => ({
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
  removeProduct: () => set({ product: { } })
}))

export default useStore;