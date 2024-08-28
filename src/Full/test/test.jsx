import React, { useRef } from 'react';
import styles from "./test.module.css"

const HorizontalScroll = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <button onClick={scrollLeft} className={styles.scrollButton}>Left</button>
      <div className={styles.scrollContainer} ref={scrollRef}>
        {/* Добавьте здесь элементы ленты */}
        <div className={styles.item}>Item 1</div>
        <div className={styles.item}>Item 2</div>
        <div className={styles.item}>Item 3</div>
        <div className={styles.item}>Item 3</div>
        <div className={styles.item}>Item 3</div>
        <div className={styles.item}>Item 3</div>
        <div className={styles.item}>Item 3</div>
        <div className={styles.item}>Item 3</div>
        <div className={styles.item}>Item 3</div>
        <div className={styles.item}>Item 3</div>
        <div className={styles.item}>Item 3</div>
        <div className={styles.item}>Item 3</div>
        <div className={styles.item}>Item 3</div>
        {/* Добавьте больше элементов по необходимости */}
      </div>
      <button onClick={scrollRight} className={styles.scrollButton}>Right</button>
    </div>
  );
};

export default HorizontalScroll;
