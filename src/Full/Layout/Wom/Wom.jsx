import styles from "./Wom.module.css"

import { Link } from "react-router-dom"


export default function Wom(){
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.wrapperTop}>
                    <Link to="/ProductWom" className={styles.department1}><span className={styles.text}>Футболки</span></Link>
                    <Link to="/ProductWom" className={styles.department2}><span className={styles.text}>Худи</span></Link>
                </div>

                <div className={styles.wrapperBottom}>
                    <Link to="/ProductWom" className={styles.department3}><span className={styles.text}>Джинсы</span></Link>
                    <Link to="/ProductWom" className={styles.department4}><span className={styles.text}>Куртки</span></Link>
                    <Link to="/ProductWom" className={styles.department5}><span className={styles.text}>Кроссовки</span></Link>
                </div>
            </div>

            <h1 className={styles.mobuleName}>Женский отдел</h1>
            <div className={styles.mobuleWrapper}>
                <Link to="/ProductWom" className={styles.MobuleDepartment1}><span className={styles.mobuleText}>Футболки</span></Link>
                <Link to="/ProductWom" className={styles.MobuleDepartment2}><span className={styles.mobuleText}>Худи</span></Link>
                <Link to="/ProductWom" className={styles.MobuleDepartment3}><span className={styles.mobuleText}>Джинсы</span></Link>
                <Link to="/ProductWom" className={styles.MobuleDepartment4}><span className={styles.mobuleText}>Куртки</span></Link>
                <Link to="/ProductWom" className={styles.MobuleDepartment5}><span className={styles.mobuleText}>Кроссовки</span></Link>
            </div>
        </>
    )
}