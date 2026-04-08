import { Suspense } from "react";
import styles from "./streaming-example.module.css";
import SlowComponent from "./slow-component";

export function LoadingFallback() {
  return (
    <div className={styles.loadingFallbackContainer}>
      <h3 className={styles.loadingFallbackTitle}>
        Dang tai thanh phan tai cham....
      </h3>
      <p>Vui long doi trong khi du lieu dang duoc tai</p>
    </div>
  );
}

const StreamingExample = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Day la vi du ve streaming UI</h1>
      <p>Phan nay cua trang se hien thi ngay lap tuc</p>

      <Suspense fallback={<LoadingFallback />}>
        <SlowComponent />
      </Suspense>

      <div className={styles.fastComponentContainer}>
        <h3>Day la thanh phan tai nhanh khac</h3>
        <p>
          Thanh phan nay cung hien thi ngay lap thuc, cho thay trang khong bi
          chan boi thanh phan tai cham
        </p>
      </div>
    </div>
  );
};

export default StreamingExample;
