import styles from "./mainMan.module.css"

import { Link } from "react-router-dom"


export default function MainMan(){
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.fotoTop}>
                    <Link to="/Product" className={styles.chapter1}>

                    </Link>

                    <Link to="/Product" className={styles.chapter2}>

                    </Link>
                </div>

                <div className={styles.fotoBottom}>
                    <Link to="/Product" className={styles.chapter3}>

                    </Link>

                    <Link to="/Product" className={styles.chapter4}>

                    </Link>

                    <Link to="/Product" className={styles.chapter5}>

                    </Link>
                </div>
            </div>

            <div className={styles.wrapperMobule}>
                <Link to="/Product" className={styles.MobuleChapter1}></Link>
                <Link to="/Product" className={styles.MobuleChapter2}></Link>
                <Link to="/Product" className={styles.MobuleChapter3}></Link>
                <Link to="/Product" className={styles.MobuleChapter4}></Link>
                <Link to="/Product" className={styles.MobuleChapter5}></Link>
            </div>
        </>
    )
}