"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import useProductStore from "@/store/productStore";
import styles from "@styles/product.module.scss"


const ProductDetailsPage = () => {
    const { product, setProduct } = useProductStore();

    const { id } = useParams();
    const router = useRouter();

    useEffect(() => {
        const loadProduct = async () => {
            const res = await setProduct(Number(id));
            console.log("product: ", res);
        }
        loadProduct();
    });

    return (
        <div className={styles.page}>
            <div>
                <button
                    className={styles.back}
                    onClick={() => router.push("/products")}
                >
                    Back to products
                </button>

                <div className={styles.container}>
                    <div className={styles.card}>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                        />
                    </div>

                    <div className={styles.info}>
                        <h1 className={styles.title}>{product.title}</h1>
                        <p className={styles.category}>Category: {product.category}</p>
                        <p className={styles.description}>{product.description}</p>
                        <div className={styles.meta}>
                            <span className={styles.price}>${product.price}</span>
                        </div>
                        <button
                            className={styles.edit}
                            onClick={() => router.push(`/products/edit/${product.id}`)}
                        >
                            Edit product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsPage;


