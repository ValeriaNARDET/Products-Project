"use client"
import { useEffect, useState } from "react";
import { getProducts } from "@/api/productApi";
import { ProductType } from "@/types/productType";
import { useRouter } from "next/navigation";
import useProductStore from "@store/productStore"
import ProductItem from "@components/ProductItem";
import ProductSkeleton from "@components/ProductSkeleton";
import styles from "@styles/products.module.scss"


const ProductListPage = () => {
    const { products, setProducts } = useProductStore();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            const data = await getProducts()
            setProducts(data)
            setLoading(false);
        }

        loadProducts()
    }, [setProducts]);

    return (
        <div className={styles.page}>
            <div className={styles.productContainer}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Products</h2>
                    <button className={styles.button} onClick={() => router.push("/products/new")} >Add New Product</button>
                </div>

                <div className={styles.container}>
                    {loading && <>
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                    </>
                    }

                    {products && products.length && products.map((product: ProductType) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductListPage;