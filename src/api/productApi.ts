import { ProductType } from "@/types/productType";
import { axiosInstance } from "./axios";

const getProducts = async (): Promise<ProductType[]> => {
    const response = await axiosInstance.get(`/products`)
    return response.data?.products;
}

const getProduct = async (id: number): Promise<ProductType> => {
    const response = await axiosInstance.get(`/products${id}`)
    return response.data
}


const createProduct = async (product: ProductType): Promise<ProductType> => {
    const response = await axiosInstance.post(`/products/add`, product);
    return response.data;
};

const updateProduct = async (id: number, product: Partial<ProductType>): Promise<ProductType> => {
    const response = await axiosInstance.put(`/products/${id}`, product);
    return response.data;
};

const deleteProduct = async (id: number): Promise<ProductType> => {
    const response = await axiosInstance.delete(`/products/${id}`);
    return response.data;
};


export { getProducts, getProduct, createProduct, updateProduct, deleteProduct }
