import styles from "./Man.module.css"

import { Link } from "react-router-dom"


export default function Man(){
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.wrapperTop}>
                    <Link to="/ProductMan" className={styles.department1}><span className={styles.text}>Футболки</span></Link>
                    <Link to="/ProductMan" className={styles.department2}><span className={styles.text}>Худи</span></Link>
                </div>

                <div className={styles.wrapperBottom}>
                    <Link to="/ProductMan" className={styles.department3}><span className={styles.text1}>Джинсы</span></Link>
                    <Link to="/ProductMan" className={styles.department4}><span className={styles.text2}>Куртки</span></Link>
                    <Link to="/ProductMan" className={styles.department5}><span className={styles.text3}>Кроссовки</span></Link>
                </div>
            </div>

            <h1 className={styles.mobuleName}>Мужской отдел</h1>
            <div className={styles.mobuleWrapper}>
                <Link to="/ProductMan" className={styles.MobuleDepartment1}><span className={styles.mobuleText}>Футболки</span></Link>
                <Link to="/ProductMan" className={styles.MobuleDepartment2}><span className={styles.mobuleText}>Худи</span></Link>
                <Link to="/ProductMan" className={styles.MobuleDepartment3}><span className={styles.mobuleText}>Джинсы</span></Link>
                <Link to="/ProductMan" className={styles.MobuleDepartment4}><span className={styles.mobuleText}>Куртки</span></Link>
                <Link to="/ProductMan" className={styles.MobuleDepartment5}><span className={styles.mobuleText}>Кроссовки</span></Link>
            </div>
        </>
    )
}