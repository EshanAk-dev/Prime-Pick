import styles from './OrderHistoryItem.module.css';

const OrderHistoryItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.orderId}>Order ID: id</h2>
          <p className={styles.date}> date</p>
        </div>
        <div className={styles.content}>
          <div className={styles.productImage}>
            <img src="product-image-url.jpg" alt="Product" className={styles.image} />
          </div>
          <div className={styles.details}>
            <p className={styles.itemName}>Item: name</p>
            <p className={styles.quantity}>Quantity: 50</p>
            <p className={styles.price}>Price: $200</p>
          </div>
        </div>
        <div className={styles.footer}>
          <span className={`${styles.status}`}>
            {/* status text */} Status
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryItem;
