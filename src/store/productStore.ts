import { create } from "zustand";
import { ProductType } from "@/types/productType";


type ProductTypes = {
    products: ProductType[],
    setProducts: (products: ProductType[]) => void,
    product: ProductType,
    setProduct: (id: ProductType["id"]) => void,
    editProduct: (product: ProductType) => void,
    deleteProduct: (id: number) => void
}

const useProductStore = create<ProductTypes>((set) => ({
    products: [],
    product: {
        title: "",
        description: "",
        price: 0
    },
    setProducts: (products: ProductType[]) => set({ products }),
    setProduct: (id: ProductType["id"]) => set((state) => ({
        product: state.products.find((product) => product.id === id)
    })),
    editProduct: (product: ProductType) => set({ product }),
    deleteProduct: (id: ProductType["id"]) => set((state) => ({ 
        products: state.products.filter((product) => product.id !== id) 
    }))

}))

export default useProductStore;