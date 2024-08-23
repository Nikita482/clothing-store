import React, { useState, useEffect } from 'react';
import styles from './product.module.css'; // Подключаем стили

const ScrollTracker = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log(`Прокрутка: ${window.scrollY}px`); // Выводим позицию прокрутки в консоль
    };

    window.addEventListener('scroll', handleScroll); // Добавляем обработчик события прокрутки

    return () => {
      window.removeEventListener('scroll', handleScroll); // Удаляем обработчик при размонтировании
    };
  }, []);

  return (
    <div className={styles.scrollTracker}>
      {/* Элемент для применения стилей */}
    </div>
  );
};

export default ScrollTracker;
