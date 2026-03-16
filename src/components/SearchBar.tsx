import useProductStore from "@store/productStore"
import styles from "@styles/searchbar.module.scss"


const SearchBar = () => {
    const { search, sort, setSearch, setSort } = useProductStore();

    return (
        <div className={styles.searchbar}>
            <input
                placeholder="Search..."
                value={search}
                className={styles.input}
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
                value={sort}
                className={styles.select}
                onChange={(e) => setSort(e.target.value)}
            >
                <option value="">Sort</option>
                <option value="price-asc">Price Up</option>
                <option value="price-desc">Price Down</option>
                <option value="title">Title</option>
            </select>

        </div>
    );
};


export default SearchBar;