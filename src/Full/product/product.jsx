import React, { useRef } from 'react';
import styles from './product.module.css'; // Импорт стилей из CSS-модуля


import { Link } from 'react-router-dom';



export default function product(){
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
      <>
          <div className={styles.wrapper}>
            <button className={styles.leftArrow} onClick={scrollLeft}>&lt;</button>
            <button className={styles.rightArrow} onClick={scrollRight}>&gt;</button>
            
            
            <div ref={scrollRef} className={styles.Content}>
              <div className={styles.item}>Item 1</div>
              <div className={styles.item}>Item 2</div>
              <div className={styles.item}>Item 3</div>
              <div className={styles.item}>Item 4</div>
              <div className={styles.item}>Item 5</div>
              <div className={styles.item}>Item 1</div>
              <div className={styles.item}>Item 2</div>
              <div className={styles.item}>Item 3</div>
              <div className={styles.item}>Item 4</div>
              <div className={styles.item}>Item 5</div>
              <div className={styles.item}>Item 1</div>
              <div className={styles.item}>Item 2</div>
              <div className={styles.item}>Item 3</div>
              <div className={styles.item}>Item 4</div>
              <div className={styles.item}>Item 5</div>
              <div className={styles.item}>Item 1</div>
              <div className={styles.item}>Item 2</div>
              <div className={styles.item}>Item 3</div>
              <div className={styles.item}>Item 4</div>
              <div className={styles.item}>Item 5</div>
              <div className={styles.item}>Item 1</div>
              <div className={styles.item}>Item 2</div>
              <div className={styles.item}>Item 3</div>
              <div className={styles.item}>Item 4</div>
              <div className={styles.item}>Item 5</div>
            </div>
          </div>

          <Link to="/Test">123</Link>
      </>
  );
};

