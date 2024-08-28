import styles from "./NewItem.module.css"

import { useRef } from "react"
import { Link } from "react-router-dom"
// ←→





export default function NewItem(){

    const scrollRef = useRef(null)

    function RightRef(){
        scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' })
    }

    function LeftRef(){
        scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' })
    }

    return(
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.name}>Новинки</h1>

                <div onClick={RightRef} className={styles.arrowLeft}>←</div>
                <div onClick={LeftRef} className={styles.arrowRight}>→</div>

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

