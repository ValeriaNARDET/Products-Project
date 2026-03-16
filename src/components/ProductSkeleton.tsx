import styles from "@styles/skeleton.module.scss"


const ProductSkeleton = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}></div>
            <div className={styles.info}>
                <div className={styles.title}></div>
                <div className={styles.text}></div>
                <div className={styles.text}></div>
            </div>
        </div>
    )
}

export default ProductSkeleton;