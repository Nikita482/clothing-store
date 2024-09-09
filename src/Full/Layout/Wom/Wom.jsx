import styles from "./Wom.module.css"

import { HashLink as Link } from 'react-router-hash-link';


export default function Wom(){
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.wrapperTop}>
                    <Link to="/ProductWom#TShirts" className={styles.department1}><span className={styles.text}>Футболки</span></Link>
                    <Link to="/ProductWom#Hoodie" className={styles.department2}><span className={styles.text}>Худи</span></Link>
                </div>

                <div className={styles.wrapperBottom}>
                    <Link to="/ProductWom#Jeans" className={styles.department3}><span className={styles.text}>Джинсы</span></Link>
                    <Link to="/ProductWom#Jackets" className={styles.department4}><span className={styles.text}>Куртки</span></Link>
                    <Link to="/ProductWom#Sneakers" className={styles.department5}><span className={styles.text}>Кроссовки</span></Link>
                </div>
            </div>

            <h1 className={styles.mobuleName}>Женский отдел</h1>
            <div className={styles.mobuleWrapper}>
                <Link to="/ProductWom#TShirts" className={styles.MobuleDepartment1}><span className={styles.mobuleText}>Футболки</span></Link>
                <Link to="/ProductWom#Hoodie" className={styles.MobuleDepartment2}><span className={styles.mobuleText}>Худи</span></Link>
                <Link to="/ProductWom#Jeans" className={styles.MobuleDepartment3}><span className={styles.mobuleText}>Джинсы</span></Link>
                <Link to="/ProductWom#Jackets" className={styles.MobuleDepartment4}><span className={styles.mobuleText}>Куртки</span></Link>
                <Link to="/ProductWom#Sneakers" className={styles.MobuleDepartment5}><span className={styles.mobuleText}>Кроссовки</span></Link>
            </div>
        </>
    )
}