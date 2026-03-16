import { create } from "zustand";
import { ProductType } from "@/types/productType";


type ProductStoreTypes = {
    products: ProductType[],
    filteredProducts: ProductType[],
    product: ProductType,
    setProducts: (products: ProductType[]) => void,
    setProduct: (id: ProductType["id"]) => void,
    editProduct: (product: ProductType) => void,
    deleteProduct: (id: number) => void,

    applyFilters: () => void,
    setSearch: (search: string) => void,
    setSort: (sort: string) => void;
    search: string,
    sort: string,
}

const useProductStore = create<ProductStoreTypes>((set, get) => ({
    products: [],
    filteredProducts: [],
    product: {
        title: "",
        description: "",
        price: 0
    },
    setProducts: (products: ProductType[]) => {
        set({ products, filteredProducts: products });
    },
    setProduct: (id: ProductType["id"]) => set((state) => ({
        product: state.products.find((product) => product.id === id)
    })),
    editProduct: (product: ProductType) => set({ product }),
    deleteProduct: (id: ProductType["id"]) => set((state) => ({
        products: state.products.filter((product) => product.id !== id)
    })),
    search: "",
    sort: "",
    applyFilters: () => {
        const { products, search, sort } = get();
        
        let result = [...products];

        if (search) {
            result = result.filter((p) =>
                p.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (sort === "price-asc") {
            result.sort((a, b) => a.price - b.price);
        }

        if (sort === "price-desc") {
            result.sort((a, b) => b.price - a.price);
        }

        if (sort === "title") {
            result.sort((a, b) => a.title.localeCompare(b.title));
        }

        set({ filteredProducts: result });
    },
    setSearch: (search: ProductStoreTypes["search"]) => {
        set({ search });
        get().applyFilters();
    },
    setSort: (sort: ProductStoreTypes["sort"]) => {
        set({ sort });
        get().applyFilters();
    },
}))

export default useProductStore;