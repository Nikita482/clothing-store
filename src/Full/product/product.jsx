import React, { useRef } from 'react';
import styles from './product.module.css';

const HorizontalScroll = () => {
  const scrollContainerRef = useRef(null);

  const handleWheel = (event) => {
    event.preventDefault();
    scrollContainerRef.current.scrollLeft += event.deltaY;
  };

  const handleTouchStart = (event) => {
    scrollContainerRef.current.dataset.startX = event.touches[0].clientX;
    scrollContainerRef.current.dataset.scrollLeft = scrollContainerRef.current.scrollLeft;
  };

  const handleTouchMove = (event) => {
    const startX = parseFloat(scrollContainerRef.current.dataset.startX);
    const walk = startX - event.touches[0].clientX;
    scrollContainerRef.current.scrollLeft = parseFloat(scrollContainerRef.current.dataset.scrollLeft) + walk;
  };

  return (
    <div
      className={styles.horizontalScroll}
      ref={scrollContainerRef}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className={styles.item}>Item 1</div>
      <div className={styles.item}>Item 2</div>
      <div className={styles.item}>Item 3</div>
      <div className={styles.item}>Item 4</div>
      {/* Добавьте больше элементов по необходимости */}
    </div>
  );
};

export default HorizontalScroll;
