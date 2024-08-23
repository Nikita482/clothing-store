import React from 'react';
import styles from './product.module.css';

const HorizontalScroll = () => {
  return (
    <div className={styles.horizontalScroll}>
      <div className={styles.item}>Item 1</div>
      <div className={styles.item}>Item 2</div>
      <div className={styles.item}>Item 3</div>
      <div className={styles.item}>Item 4</div>
      {/* Добавьте больше элементов по необходимости */}
    </div>
  );
};

export default HorizontalScroll;
