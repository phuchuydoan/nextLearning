import Link from "next/link";
import { products } from "../page";
import styles from "./product-detail.module.css";

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  console.log('slug', slug)
  const productId = slug[0];

  const product = products.find((p) => p.id === productId);

  return (
    <div className={styles.container}>
      {product ? (
        <>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.content}>{product.description}</p>
        </>
      ) : (
        <h1>Không tìm thấy sản phẩm</h1>
      )}
      <Link className={styles.backButton} href="/products">
        Quay lại
      </Link>
    </div>
  );
}
