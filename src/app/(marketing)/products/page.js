import Link from "next/link";
import styles from "./products.module.css";

export const products = [
  {
    id: "product1",
    name: "San pham 1",
    description: "Day la mo ta cua san pham 1",
  },
  {
    id: "product2",
    name: "San pham 2",
    description: "Day la mo ta cua san pham 2",
  },
  {
    id: "product3",
    name: "San pham 3",
    description: "Day la mo ta cua san pham 3",
  },
];

export default function ProductsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Danh sách sản phẩm</h1>
      <div className={styles.productList}>
        {products.map((product) => (
          <div className={styles.productCard} key={product.id}>
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <Link
              href={`/products/${product.id}`}
              className={styles.productLink}
            >
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
