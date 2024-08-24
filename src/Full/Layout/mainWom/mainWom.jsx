import styles from "./mainWom.module.css"

import { Link } from "react-router-dom"


export default function MainWom(){
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.fotoTop}>
                    <Link to="/Product" className={styles.chapter1}><span className={styles.text}>Футболки</span></Link>
                    <Link to="/Product" className={styles.chapter2}><span className={styles.text}>Худи</span></Link>
                </div>

                <div className={styles.fotoBottom}>
                    <Link to="/Product" className={styles.chapter3}><span className={styles.text1}>Джинсы</span></Link>
                    <Link to="/Product" className={styles.chapter4}><span className={styles.text2}>Куртки</span></Link>
                    <Link to="/Product" className={styles.chapter5}><span className={styles.text3}>Аксессуары</span></Link>
                </div>
            </div>

            <h1 className={styles.nameMobule}>Женский отдел</h1>
            <div className={styles.wrapperMobule}>
                <Link to="/Product" className={styles.MobuleChapter1}><span className={styles.textMobule}>Футболки</span></Link>
                <Link to="/Product" className={styles.MobuleChapter2}><span className={styles.textMobule}>Худи</span></Link>
                <Link to="/Product" className={styles.MobuleChapter3}><span className={styles.textMobule}>Джинсы</span></Link>
                <Link to="/Product" className={styles.MobuleChapter4}><span className={styles.textMobule}>Куртки</span></Link>
                <Link to="/Product" className={styles.MobuleChapter5}><span className={styles.textMobule}>Аксессуары</span></Link>
            </div>
        </>
    )
}