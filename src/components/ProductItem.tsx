import Link from "next/link";
import { ProductType } from "@/types/productType";
import styles from "@styles/products.module.scss"

type ProductPros = {
    product: ProductType
}

const ProductItem = ({ product }: ProductPros) => {

    return (
        <div className={styles.card}>
            <Link href={`/products/${product.id}`} className={styles.link}>

                <div>
                    <div className={styles.image}>
                        <img src={product.thumbnail} alt={product.title} />
                    </div>
                    <p className={styles.subTitle}><b>{product.title}</b></p>
                    <p>{product.description}</p>
                    <p><b>{product.price}$ </b></p>
                </div>
            </Link>
        </div>
    )
}

export default ProductItem;