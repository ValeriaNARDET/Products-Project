"use client";
import {  useState } from "react";
import { useRouter } from "next/navigation";
import { createProduct } from "@/api/productApi";
import styles from "@styles/product-form.module.scss"

export default function EditProductPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const router = useRouter();

    const addProduct = async (e: React.SubmitEvent) => {
        e.preventDefault();
        await createProduct({
            title,
            description,
            price: Number(price),
        });
        router.push('/products');
    };

    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <h1 className={styles.title}>Edit Product</h1>
                <form onSubmit={addProduct} className={styles.form}>
                    <label className={styles.label}>Title</label>
                    <input
                        value={title}
                        className={styles.input}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <label className={styles.label}>Description</label>
                    <textarea
                        value={description}
                        className={styles.textarea}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                        required
                    />

                    <label className={styles.label}>Price</label>
                    <input
                        id="price"
                        type="number"
                        className={styles.input}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                    <button type="submit" className={styles.button}>Save changes</button>
                </form>
            </div>
        </div>
    );
}