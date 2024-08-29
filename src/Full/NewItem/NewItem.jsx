import styles from "./NewItem.module.css"

import { Link } from "react-router-dom"


export default function NewItem(){
    return(
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.name}>Новинки</h1>

                <div className={styles.arrowLeft}></div>
                <div className={styles.arrowRight}></div>

                <div className={styles.items}>
                    <Link to="/Product" className={styles.item1}><span className={styles.text}>Футболки</span></Link>
                    <Link to="/Product" className={styles.item2}><span className={styles.text}>Худи</span></Link>
                    <Link to="/Product" className={styles.item3}><span className={styles.text}>Джинсы</span></Link>
                    <Link to="/Product" className={styles.item4}><span className={styles.text}>Женские куртки</span></Link>
                    <Link to="/Product" className={styles.item5}><span className={styles.text}>Мужские куртки</span></Link>
                    <Link to="/Product" className={styles.item6}><span className={styles.text}>Аксессуары</span></Link>
                    <Link to="/Product" className={styles.item7}><span className={styles.text}>Кросовки</span></Link>
                </div>
            </div>
        </>
    )
}

