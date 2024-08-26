import styles from "./NewItem.module.css"

import { Link } from "react-router-dom"


export default function NewItem(){
    return(
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.name}>Новинки</h1>

                <div className={styles.items}>
                    <Link to="/Product" className={styles.item1}>123</Link>
                    <Link to="/Product" className={styles.item2}>123</Link>
                    <Link to="/Product" className={styles.item3}>123</Link>
                    <Link to="/Product" className={styles.item4}>123</Link>
                    <Link to="/Product" className={styles.item5}>123</Link>
                </div>
            </div>
        </>
    )
}