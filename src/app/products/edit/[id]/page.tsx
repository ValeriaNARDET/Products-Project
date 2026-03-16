   "use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { updateProduct } from "@/api/productApi";
import styles from "@styles/product-form.module.scss"
import useProductStore from "@/store/productStore";

export default function EditProductPage() {
    const product = useProductStore((state) => state.product);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const router = useRouter();
    const { id } = useParams();


    useEffect(() => {
        const loadProduct = async () => {
                setTitle(product.title);
                setDescription(product.description);
                setPrice(String(product.price));
        };
        loadProduct();
    }, [id]);

    const saveProduct = async (e: React.SubmitEvent) => {
        e.preventDefault();
        await updateProduct(Number(id), {
            title,
            description,
            price: Number(price),
        });
        router.push(`/products/${id}`);
    };

    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <h1 className={styles.title}>Edit Product</h1>
                <form onSubmit={saveProduct} className={styles.form}>
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