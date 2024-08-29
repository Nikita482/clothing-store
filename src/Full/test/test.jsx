// import React, { useRef, useState } from 'react';
// import styles from './test.module.css'; // Убедитесь, что путь верный

// function Carousel() {
//   // const containerRef = useRef(null);
//   // const wrapperRef = useRef(null)
//   // const [currentIndex, setCurrentIndex] = useState(0);

//   // const scrollToNext = () => {
//   //   const container = containerRef.current;
//   //   if (container) {
//   //     const items = Array.from(container.children);
//   //     const nextIndex = currentIndex + 1;

//   //     if (nextIndex < items.length) {
//   //       items[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
//   //       setCurrentIndex(nextIndex);
//   //     }
//   //   }
//   // };



//   // function next(){
//   //   const wrapper = wrapperRef.current
//   //   if(wrapper){
//   //     const items = Array.from(wrapper.children)
//   //     const nextId = currentIndex + 1
//   //     if(nextId < items.length){
//   //       items[nextId].scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
//   //       setCurrentIndex(nextId)
//   //       console.log(nextId)
//   //       console.log(items.length)
//   //     }
//   //   }
//   // }


//   const wrapperRef3 = useRef(null)
//   const [currentIndex3, setCurrentIndex3] = useState(1);
  
//   function next(){
//     const items = Array.from(wrapperRef3.current.children)
//     setCurrentIndex3(num => num + 1)

//     if(currentIndex3 < items.length){
//       items[currentIndex3].scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
//     }else if(currentIndex3 === items.length){
//       setCurrentIndex3(0)
//     }

//     console.log(currentIndex3)
//     console.log(items.length)
//   }
  

//   return (
//     <div>
//       <button onClick={next}>Следующий</button>
//       <div ref={wrapperRef3} className={styles.wrapper}>
//         <div className={styles.item}>Item 1</div>
//         <div className={styles.item}>Item 2</div>
//         <div className={styles.item}>Item 3</div>
//         <div className={styles.item}>Item 4</div>
//         <div className={styles.item}>Item 5</div>
//         <div className={styles.item}>Item 6</div>
//         <div className={styles.item}>Item 7</div>
//         <div className={styles.item}>Item 8</div>
//         <div className={styles.item}>Item 9</div>
//         <div className={styles.item}>Item 10</div>
//         <div className={styles.item}>Item 11</div>
//         <div className={styles.item}>Item 12</div>
//         <div className={styles.item}>Item 13</div>
//         <div className={styles.item}>Item 14</div>
//         <div className={styles.item}>Item 15</div>
//       </div>
//     </div>
//   );
// }

// export default Carousel;



import React, { useRef, useState, useEffect } from 'react';
import styles from './test.module.css'; // Импорт стилей из отдельного CSS-модуля

function Carousel() {
  // Реф для контейнера карусели
  const wrapperRef3 = useRef(null);
  
  // Состояние для отслеживания текущего индекса элемента
  const [currentIndex3, setCurrentIndex3] = useState(0);

  // Обработчик события прокрутки
  const handleScroll = () => {
    const wrapper = wrapperRef3.current;
    const items = wrapper.children; // Получаем дочерние элементы
    const scrollLeft = wrapper.scrollLeft; // Текущая позиция прокрутки слева

    // Обновляем индекс на основе видимой области
    const newIndex = Array.from(items).findIndex(
      item => item.offsetLeft >= scrollLeft
    );
    console.log(newIndex)

    setCurrentIndex3(newIndex);
  };

  // Добавляем слушатель события прокрутки при монтировании компонента
  useEffect(() => {
    const wrapper = wrapperRef3.current;
    wrapper.addEventListener('scroll', handleScroll);

    return () => wrapper.removeEventListener('scroll', handleScroll);
  }, []);

  // Переход к следующему элементу
  const next = () => {
    const wrapper = wrapperRef3.current;
    const items = wrapper.children; // Получаем все элементы карусели

    // Рассчитываем новый индекс и перематываем к нужному элементу
    const nextIndex = (currentIndex3 + 1) % items.length;
    setCurrentIndex3(nextIndex);
    items[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  };

  return (
    <div>
      <button onClick={next}>Следующий</button>
      <div ref={wrapperRef3} className={styles.wrapper}>
        <div className={styles.item}>Item 1</div>
        <div className={styles.item}>Item 2</div>
        <div className={styles.item}>Item 3</div>
        <div className={styles.item}>Item 4</div>
        <div className={styles.item}>Item 5</div>
        <div className={styles.item}>Item 6</div>
        <div className={styles.item}>Item 7</div>
        <div className={styles.item}>Item 8</div>
        <div className={styles.item}>Item 9</div>
        <div className={styles.item}>Item 10</div>
        <div className={styles.item}>Item 11</div>
        <div className={styles.item}>Item 12</div>
        <div className={styles.item}>Item 13</div>
        <div className={styles.item}>Item 14</div>
        <div className={styles.item}>Item 15</div>
        <div className={styles.item}>Item 16</div>
        <div className={styles.item}>Item 17</div>
        <div className={styles.item}>Item 18</div>
        <div className={styles.item}>Item 19</div>
        <div className={styles.item}>Item 20</div>
      </div>
    </div>
  );
}

export default Carousel;
