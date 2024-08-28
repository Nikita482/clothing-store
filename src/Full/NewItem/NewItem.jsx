import styles from "./NewItem.module.css"

import { useRef } from "react"
import { Link } from "react-router-dom"
// ←→





export default function NewItem(){

    const scrollRef = useRef(null)

    function RightRef() {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            
            // Если не дошли до конца
            if (scrollLeft + clientWidth < scrollWidth) {
                // Прокрутка вправо
                scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
                
                // После завершения прокрутки докручиваем до ближайшего snap элемента
                setTimeout(() => {
                    scrollRef.current.scrollTo({
                        left: Math.round(scrollRef.current.scrollLeft / 310) * 310, // 310 - это ширина item + margin
                        behavior: 'smooth'
                    });
                }, 300); // Задержка для завершения основной прокрутки
            }
        }
    }
    
    function LeftRef() {
        if (scrollRef.current) {
            const { scrollLeft } = scrollRef.current;
    
            // Если не дошли до начала
            if (scrollLeft > 0) {
                // Прокрутка влево
                scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
                
                // После завершения прокрутки докручиваем до ближайшего snap элемента
                setTimeout(() => {
                    scrollRef.current.scrollTo({
                        left: Math.round(scrollRef.current.scrollLeft / 310) * 310, // 310 - это ширина item + margin
                        behavior: 'smooth'
                    });
                }, 0); // Задержка для завершения основной прокрутки
            }
        }
    }
    
    

    return(
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.name}>Новинки</h1>

                <div onClick={LeftRef} className={styles.arrowLeft}>←</div>
                <div onClick={RightRef} className={styles.arrowRight}>→</div>

                <div ref={scrollRef} className={styles.items}>
                    <Link to="/Product" className={styles.item1}><span className={styles.text}>Футболки</span></Link>
                    <Link to="/Product" className={styles.item2}><span className={styles.text}>Худи</span></Link>
                    <Link to="/Product" className={styles.item3}><span className={styles.text}>Джинсы</span></Link>
                    <Link to="/Product" className={styles.item4}><span className={styles.text}>Куртки</span></Link>
                    <Link to="/Product" className={styles.item5}><span className={styles.text}>Аксессуары</span></Link>
                </div>
            </div>
        </>
    )
}

