import styles from "./slow.module.css";

async function fetchData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return "DU lieu da duoc tai tu slow component";
}

const SlowComponent = async () => {
  const data = await fetchData();

  return (
    <div className={styles.slowComponentContainer}>
      <h3 className={styles.slowComponentTitle}>
        Thành phần tải chậm (Slow component)
      </h3>
      <p className={styles.slowComponetText}>
        {data}
      </p>
    </div>
  );
};

export default SlowComponent;
